const { status, getProxy, setAgent, failedWebhook, successWebhook } = require("../../../../lib");
const { CookieJar } = require("tough-cookie");
const { getMonitorType, getHandle, getVariant, getKeywords, parseSizes, parseProducts, parseProduct, calculateSpeed, parseSecretKey, calculateTimeRemaining, calculatePollAfter } = require("../utils");
const { ajaxGetHandle, ajaxGetProducts, frontendGetPayment, frontendPostPayment, graphqlPostQueue, paypalPostApprove, paypalGetCallback, paypalPostCreate, storefrontPostCheckout, storefrontPatchCheckout, storefrontGetCheckout, storefrontGetConfig, storefrontGetRates, walletsPostCalculate } = require("../requests");
const { load } = require("cheerio");
const { getSession } = require("../scripts");
const Twocaptcha = require("../../captcha");

class FastTask {
    constructor(site, profile, task){
        this.id = task.id;
        this.profile = profile;
        //monitor values
        this.input = task.input;
        this.sizes = task.sizes;
        this.quantity = task.quantity;
        this.delays = task.delays;
        this.monitorType = getMonitorType(this.input);
        this.keywords = this.monitorType == "Keywords" ? getKeywords(this.input) : false;
        this.variant = this.monitorType == "Variant" ? getVariant(this.input) : false;
        this.handle = this.monitorType == "Link" ? getHandle(this.input) : false;
        this.deepSearch = task.deepSearch;
        this.twoCaptchaKey = task.twoCaptchaKey;

        //site values
        this.site = site.name;
        this.domain = site.domain;
        this.shopId = site.shopId;
        this.accessToken = site.accessToken;
        this.gateway = site.gateway;
        this.properties = site.properties;
        this.accountCaptchaSitekey = site.accountCaptchaSitekey;
        this.checkpointCaptchaSitekey = site.checkpointCaptchaSitekey;
        this.checkoutCaptchaSitekey = site.checkoutCaptchaSitekey;

        //dynamic values
        this.password = task.password;
        this.discountCode = task.discountCode;

        //request values
        this.proxy = getProxy();        
        this.agent = this.proxy ? setAgent(this.proxy) : false;
        this.cookieJar = new CookieJar();

        //controller values
        this.previous;
        this.current;
        this.next;

        //queue values
        this.queueToken;

        //checkout values
        this.checkoutUrl;
        this.checkoutToken;
        this.secretKey;
        this.shippingRate;
        this.totalPrice;

        //captcha values
        this.authenticityToken;
        this.checkoutCaptchaToken;

        //paypal values
        this.paypalExpressId;
        this.paypalInstrumentId;
        this.paypalAccessToken;
        this.paypalCallbackUrl;

        //timer values
        this.checkoutStart;
        this.checkoutEnd;
        this.checkoutSpeed;

        this.start();
    };

    start(){
        status(this.id, this.site, `Task Started - ${this.profile.id} - ${this.input}`, "cyan");
        
        if(!this.shopId && !this.accessToken)
            this.controller("getConfig");
        else 
            this.controller("createCheckout");
    };

    stop(){
        status(this.id, this.site, "Task Stopped", "red");
    };

    //custom site logic
    getConfig(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Checking Site Config", "cyan");

            storefrontGetConfig(this.domain, this.cookieJar, this.agent)
            .then(({ body }) => {
                let { accessToken, checkoutConfig } = body.paymentInstruments;

                this.shopId = checkoutConfig.shopId;
                this.accessToken = accessToken;

                //add password logic
                resolve("createCheckout");
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Checking Site Config!" });

                let { statusCode } = response;
                reject({ message: `Unknown Error Checking Site Config! (${statusCode})` });
            });
        });
    };

    //monitors
    monitorProducts(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Monitoring", "cyan");
            
            ajaxGetProducts(this.domain, 25, this.cookieJar, this.agent)
            .then(({ body }) => {
                let product = parseProducts(body, this.keywords, this.deepSearch);
                
                if(!product)
                    return reject({ message: "Product Not Found!", delay: this.delays.monitor });

                let { title, handle } = product;
                this.handle = handle;
                this.variant = parseSizes(product, this.sizes);

                if(!this.variant)
                    return reject({ message: "Size(s) Not Found!", delay: this.delays.monitor });

                status(this.id, this.site, `Product Found - ${title}`, "cyan");
                resolve("addToCart");
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Monitoring!" });
                
                let { statusCode } = response;

                if(statusCode == 401)
                    reject({ message: "Password Page Up!", delay: this.delays.monitor });
                else
                    reject({ message: `Unknown Error Monitoring! (${statusCode})` });
            });
        });
    };

    monitorLink(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Monitoring", "cyan");

            ajaxGetHandle(this.domain, this.handle, this.cookieJar, this.agent)
            .then(({ body }) => {
                let { title } = body;
                this.variant = parseSizes(body, this.sizes);

                if(!this.variant)
                    return reject({ message: "Size(s) Not Found!", delay: this.delays.monitor });

                status(this.id, this.site, `Product Found - ${title}`, "cyan");
                resolve("addToCart");
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Monitoring!" });
                
                let { statusCode } = response;

                if(statusCode == 401)
                    reject({ message: "Password Page Up!", delay: this.delays.monitor });
                else if(statusCode == 404)
                    reject({ message: "Product Unavailable!", delay: this.delays.monitor });
                else
                    reject({ message: `Unknown Error Monitoring! (${statusCode})` });
            });
        });
    };

    //queue
    //https://shopify.dev/docs/apps/channels/checkout-api/checkout-queue-polling
    checkQueue(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Checking Queue", "yellow");

            let json = {
                query: "\n      {\n        poll(token: $token) {\n          token\n          pollAfter\n          queueEtaSeconds\n          productVariantAvailability {\n            id\n            available\n          }\n        }\n      }\n    ",
                variables: {
                    token: this.queueToken
                }
            };

            graphqlPostQueue(this.domain, json, this.cookieJar, this.agent)
            .then(({ body }) => {
                let queue = body.data.poll;
            
                if(!queue.pollAfter && !queue.queueEtaSeconds){
                    let step = this.previous;
                    this.previous = "";
                    this.cookieJar.setCookie(`_checkout_queue_token=${queue.token}`, `https://${this.domain}/`);
                    return resolve(step);
                }
                
                this.queueToken = queue.token;
                let seconds = queue.queueEtaSeconds;
                let message = seconds ? `In Queue (${calculateTimeRemaining(seconds)})` : "In Queue";
                reject({ message, color: "yellow", delay: calculatePollAfter(queue.pollAfter) });
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Checking Queue!" });

                let { statusCode } = response;
                reject({ message: `Unknown Error Checking Queue! (${statusCode})`});
            });
        });
    };

    //checkout flow
    createCheckout(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Creating Checkout", "cyan");

            let json = {
                checkout: {
                    secret: true,
                    presentment_currency: "USD",
                    country: "US"
                }
            };

            storefrontPostCheckout(this.domain, json, this.accessToken, this.cookieJar, this.agent)
            .then(({ body }) => {
                this.checkoutUrl = body.checkout.web_url;
                this.checkoutToken = body.checkout.token;
                this.secretKey = parseSecretKey(body);
                resolve("submitInfo");
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Creating Checkout!" });

                let { statusCode, headers } = response;

                if(statusCode == 429 && headers["x-checkout-queue"]){
                    this.queueToken = headers["x-checkout-queue-token"];
                    this.previous = "createCheckout";
                    resolve("checkQueue");
                }
                //i think this means the storefront api is disabled
                else if(statusCode == 400)
                    reject({ message: "Failed Creating Checkout!" });
                //402 also might give the same "Shop Unavailable" message im pretty sure depends on site (uncommon)
                else if(statusCode == 403)
                    reject({ message: "Shop Unavailable!" });
                else
                    reject({ message: `Unknown Error Creating Checkout! (${statusCode})` });
            });
        });
    };

    submitInfo(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Submitting Info", "cyan");

            let json = { 
                checkout: {
                    email: this.profile.email,
                    billing_address: {
                        first_name: this.profile.first,
                        last_name: this.profile.last,
                        phone: this.profile.phone,
                        company: null,
                        address1: this.profile.shipping.line1,
                        ...(this.profile.shipping.line2 && { address2: this.profile.shipping.line2 }),
                        city: this.profile.shipping.city,
                        province_code: this.profile.shipping.state.code,
                        country_code: this.profile.shipping.country.code,
                        zip: this.profile.shipping.zipcode          
                    },
                    shipping_address: {
                        first_name: this.profile.first,
                        last_name: this.profile.last,
                        phone: this.profile.phone,
                        company: null,
                        address1: this.profile.shipping.line1,
                        ...(this.profile.shipping.line2 && { address2: this.profile.shipping.line2 }),
                        city: this.profile.shipping.city,
                        province_code: this.profile.shipping.state.code,
                        country_code: this.profile.shipping.country.code,
                        zip: this.profile.shipping.zipcode
                    }
                }
            };

            storefrontPatchCheckout(this.domain, this.checkoutToken, json, this.accessToken, this.secretKey, this.cookieJar, this.agent)
            .then(() => resolve(this.monitorType == "Variant" ? "addToCart" : this.monitorType == "Keywords" ? "monitorProducts" : "monitorLink"))
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Submitting Info!" });

                let { statusCode } = response;
                
                if(statusCode == 422)
                    reject({ message: "Profile Error!" });
                else if(statusCode == 429 && headers["x-checkout-queue"]){
                    this.queueToken = headers["x-checkout-queue-token"];
                    this.previous = "submitInfo";
                    resolve("checkQueue");
                }
                else
                    reject({ message: `Unknown Error Submitting Info! (${statusCode})` });
            });
        });
    };

    addToCart(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Adding To Cart", "cyan");

            let json = {
                checkout: {
                    line_items: [
                        { 
                            variant_id: this.variant, 
                            quantity: this.quantity,
                            ...(this.properties && { properties: this.properties })
                        }
                    ]
                }
            };

            walletsPostCalculate(this.domain, this.checkoutToken, json, this.accessToken, this.secretKey, this.cookieJar, this.agent)
            .then(({ body }) => {
                this.checkoutStart = performance.now();
                let { line_items, shipping_line, shipping_rate, available_shipping_rates } = body.checkout;
                let { title, variant_title, variant_id } = line_items[0];
            
                if(!variant_id)
                    return reject({ message: "Invalid Variant!", delay: this.delays.monitor });
            
                status(this.id, this.site, `Product Carted - ${title} (${variant_title || "Default Title"})`, "cyan");

                if(this.discountCode)
                    return resolve("submitDiscount");
                else if(shipping_line && shipping_rate)
                    return resolve("calculateTaxes");
                else if(!available_shipping_rates.length)
                    return resolve("getRate");

                this.shippingRate = available_shipping_rates[0].id;
                resolve("submitRate");
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Adding To Cart!" });

                let { statusCode, headers } = response;

                //todo - create a script to get atc properties for custom sites
                if(statusCode == 422)
                    reject({ message: "Waiting For Release!", color: "cyan", delay: this.delays.monitor });
                else if(statusCode == 429 && headers["x-checkout-queue"]){
                    this.queueToken = headers["x-checkout-queue-token"];
                    this.previous = "addToCart";
                    resolve("checkQueue");
                }
                else
                    reject({ message: `Unknown Error Adding To Cart! (${statusCode})` });
            });
        });
    };

    submitDiscount(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Submitting Discount Code", "magenta");

            let json = {
                checkout: {
                    reduction_code: this.discountCode
                }
            };

            storefrontPatchCheckout(this.domain, this.checkoutToken, json, this.accessToken, this.secretKey, this.cookieJar, this.agent)
            .then(({ body }) => {
                let { applied_discounts } = body.checkout;

                if(!applied_discounts[0].applicable)
                    return reject({ message: "Discount Code Inapplicable!" });

                resolve("getRate");
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Submitting Discount Code!" });
                
                let { statusCode, headers } = response;

                //maybe comeback to this
                if(statusCode == 422){
                    status(this.id, this.site, "Invalid Discount Code!", "red");
                    resolve("submitDiscount");
                }
                else if(statusCode == 429 && headers["x-checkout-queue"]){
                    this.queueToken = headers["x-checkout-queue-token"];
                    this.previous = "submitDiscount";
                    resolve("checkQueue");
                }            
                else
                    reject({ message: `Unknown Error Submitting Discount Code! (${statusCode})` });
            });
        });
    };

    getRate(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Getting Shipping Rate", "magenta");

            storefrontGetRates(this.domain, this.checkoutToken, this.accessToken, this.secretKey, this.cookieJar, this.agent)
            .then(({ body, headers }) => {
                if(headers["retry-after"])
                    return reject({ delay: headers["retry-after"] * 1000 });

                let { shipping_rates } = body;

                if(!shipping_rates.length)
                    return reject({ message: "Shipping Unavailable!" });

                this.shippingRate = shipping_rates[0].id;
                resolve("submitRate");
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Getting Shipping Rate!" });

                let { statusCode } = response;
                reject({ message: `Unknown Error Getting Shipping Rate! (${statusCode})` });
            });
        });
    };

    submitRate(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Submitting Shipping Rate", "magenta");

            let json = {
                checkout: {
                    shipping_rate: { 
                        id: this.shippingRate 
                    }
                }
            };
            
            storefrontPatchCheckout(this.domain, this.checkoutToken, json, this.accessToken, this.secretKey, this.cookieJar, this.agent)
            .then(() => resolve("calculateTaxes"))
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Submitting Shipping Rate!"});
                
                let { statusCode, headers } = response;

                if(statusCode == 422){
                    status(this.id, this.site, "Invalid Shipping Rate!", "red");
                    resolve("getRate");
                }
                else if(statusCode == 429 && headers["x-checkout-queue"]){
                    this.queueToken = headers["x-checkout-queue-token"];
                    this.previous = "submitRate";
                    resolve("checkQueue");
                }            
                else
                    reject({ message: `Unknown Error Submitting Shipping Rate! (${statusCode})` });
            });
        });
    };

    calculateTaxes(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Calculating Taxes", "magenta");

            storefrontGetCheckout(this.domain, this.checkoutToken, this.accessToken, this.secretKey, this.cookieJar, this.agent)
            .then(({ body }) => {
                this.totalPrice = body.checkout.payment_due.replace(/\D/g, "");
                resolve(!this.gateway ? "getPayment" : "submitPayment");
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Calculating Taxes!" });

                let { statusCode } = response;
                reject({ message: `Unknown Error Calculating Taxes! (${statusCode})` });
            });
        });
    };

    getPayment(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Getting Payment Page", "magenta");

            frontendGetPayment(this.domain, this.shopId, this.checkoutToken, this.secretKey, this.cookieJar, this.agent)
            .then(({ body, headers }) => {
                let { location } = headers;

                if(/stock_problems/.test(location))
                    return reject({ message: "Out Of Stock!", delay: this.delays.restock });
                //todo try to find a solution for this
                else if(/\/checkouts\/co\//)
                    return reject({ message: "Graphql Checkout Not Supported" });
                else if(/checkpoint/.test(location))
                    return status(this.id, this.site, "Checkpoint Captcha Enabled!", "red");
                else if(/account/.test(location))
                    return status(this.id, this.site, "Account Login Required!", "red");
                else if(location)
                    return reject({ message: `Unknown Redirect Getting Payment Page! (${location})` });
                
                let $ = load(body);

                this.gateway = $("div[class='radio-wrapper content-box__row ']").attr("data-select-gateway");
                resolve("submitPayment");
            })            
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Getting Payment Page!" });

                let { statusCode } = response;
                reject({ message: `Unknown Error Getting Payment Page! (${statusCode})` });
            });
        });
    };

    submitPayment(){
        return new Promise(async (resolve, reject) => {
            this.checkoutEnd = performance.now();
            status(this.id, this.site, "Submitting Payment", "magenta");

            let sessionId = await getSession(this.profile.card, this.domain, this.agent);

            if(!sessionId)
                return reject({ message: "Invalid Session Id!" });

            let form = {
                _method: "patch",
                authenticity_token: this.authenticityToken || null,
                previous_step: "payment_method",
                step: '',
                s: sessionId,
                "checkout[payment_gateway]": this.gateway,
                "checkout[credit_card][vault]": false,
                "checkout[different_billing_address]": false,
                "checkout[remember_me]": false,
                "checkout[remember_me]": 0,
                "checkout[total_price]": this.totalPrice,
                complete: 1,
                "checkout[client_details][browser_width]": 1400,
                "checkout[client_details][browser_height]": 900,
                "checkout[client_details][javascript_enabled]": 1,
                "checkout[client_details][color_depth]": 30,
                "checkout[client_details][java_enabled]": false,
                "checkout[client_details][browser_tz]": 300,
                ...(this.checkoutCaptchaToken && { "g-recaptcha-response": this.checkoutCaptchaToken }),
            };

            frontendPostPayment(this.domain, this.shopId, this.checkoutToken, this.secretKey, form, this.cookieJar, this.agent)
            .then(({ body, headers }) => {
                let { location } = headers;

                //todo: try to submit via /processing (vault), retrieve this via getting checkout "processing_url" or just https://${domain}/${shopId}/checkouts/${checkoutToken}/processing?key=${secretKey}
                if(/processing/.test(location))
                    return resolve("processPayment");
                else if(/stock_problems/.test(location))
                    return reject({ message: "Out Of Stock!", delay: this.delays.restock });
                else if(/checkpoint/.test(location))
                    return status(this.id, this.site, "Checkpoint Captcha Enabled!", "red");
                else if(/account/.test(location))
                    return status(this.id, this.site, "Account Login Required!", "red");
                else if(/paypal/.test(location)){
                    this.paypalExpressId = location.match(/token=(.*?)&/)[1];
                    return resolve("createPaypal");
                }
                else if(location)
                    return reject({ message: `Unknown Redirect Submitting Payment! (${location})` });
                
                let $ = load(body);

                if(/recaptchaCallback/.test(body)){
                    this.authenticityToken = $("input[name='authenticity_token']").val();

                    if(!this.checkoutCaptchaSitekey)
                        this.checkoutCaptchaSitekey = body.match(/sitekey: "(.*?)"/)[1];
            
                    return resolve("checkoutCaptcha");
                };

                let reason = $("[class='notice__text']").text();

                if(/Your payment details couldn’t be verified./.test(reason))
                    status(this.id, this.site, "Invalid Payment Details!", "red");
                else if(/Payment gateway is invalid/.test(reason)){
                    status(this.id, this.site, "Invalid Gateway!", "red");
                    resolve("getPayment");
                }
                else 
                    status(this.id, this.site, "Payment Error!", "red"); 
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Submitting Payment!" });

                let { statusCode } = response;
                reject({ message: `Unknown Error Submitting Payment! (${statusCode})` });
            });
        });
    };

    checkoutCaptcha(){
        return new Promise(async (resolve, reject) => {
            status(this.id, this.site, "Solving Checkout Captcha", "yellow");

            let result = await new Twocaptcha(this.twoCaptchaKey).solveCheckoutCaptcha(this.checkoutUrl, this.checkoutCaptchaSitekey, this.proxy);
            
            if(result.status == "success"){
                this.checkoutCaptchaToken = result.message;
                return resolve("submitPayment");
            }
            else
                return reject({ message: `Captcha Error! (${result.message})` });
        });
    };

    //paypal flow - dont't know if it actually works but it gives real declines
    createPaypal(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Creating Paypal Session", "yellow");

            //might need to update to add countryCode value (phone)
            let json = {
                operationName: "OnboardGuestMutation",
                variables: {
                    card: {
                        cardNumber: this.profile.card.number.replace(/\s/g, ''),
                        expirationDate: `${this.profile.card.month}/${this.profile.card.year}`,
                        securityCode: this.profile.card.cvv,
                        type: this.profile.card.type.toUpperCase()
                    },
                    country: this.profile.shipping.country.code,
                    email: this.profile.email,
                    firstName: this.profile.first,
                    lastName: this.profile.last,
                    phone: {
                        countryCode: "1",
                        number: this.profile.phone,
                        type: "MOBILE"
                    },
                    supportedThreeDsExperiences: ["IFRAME"],
                    token: this.paypalExpressId,
                    billingAddress: {
                        line1: this.profile.shipping.line1,
                        ...(this.profile.shipping.line2 && { line2: this.profile.shipping.line2 }),
                        city: this.profile.shipping.city,
                        state: this.profile.shipping.state.code,
                        postalCode: this.profile.shipping.zipcode,
                        accountQuality: {
                            autoCompleteType: "MERCHANT_PREFILLED",
                            isUserModified: false,
                            twoFactorPhoneVerificationId: ""
                        },
                        country: this.profile.shipping.country.code,
                        familyName: this.profile.last,
                        givenName: this.profile.first
                    },
                    shippingAddress: {
                        line1: this.profile.shipping.line1,
                        ...(this.profile.shipping.line2 && { line2: this.profile.shipping.line2 }),
                        city: this.profile.shipping.city,
                        state: this.profile.shipping.state.code,
                        postalCode: this.profile.shipping.zipcode,
                        accountQuality: {
                            autoCompleteType: "MERCHANT_PREFILLED",
                            isUserModified: false
                        },
                        country: this.profile.shipping.country.code,
                        familyName: this.profile.last,
                        givenName: this.profile.first
                    }, 
                    crsData: null
                },
                query: "mutation OnboardGuestMutation($bank: BankAccountInput, $billingAddress: AddressInput, $card: CardInput, $country: CountryCodes, $currencyConversionType: CheckoutCurrencyConversionType, $dateOfBirth: DateOfBirth, $email: String, $firstName: String!, $lastName: String!, $phone: PhoneInput, $shareAddressWithDonatee: Boolean, $shippingAddress: AddressInput, $supportedThreeDsExperiences: [ThreeDSPaymentExperience], $token: String!) {\n  onboardAccount: onboardGuest(\n    bank: $bank\n    billingAddress: $billingAddress\n    card: $card\n    country: $country\n    currencyConversionType: $currencyConversionType\n    dateOfBirth: $dateOfBirth\n    email: $email\n    firstName: $firstName\n    lastName: $lastName\n    phone: $phone\n    shareAddressWithDonatee: $shareAddressWithDonatee\n    shippingAddress: $shippingAddress\n    token: $token\n  ) {\n    buyer {\n      auth {\n        accessToken\n        __typename\n      }\n      userId\n      __typename\n    }\n    flags {\n      is3DSecureRequired\n      __typename\n    }\n    ...fundingOptions\n    paymentContingencies {\n      threeDomainSecure(experiences: $supportedThreeDsExperiences) {\n        status\n        redirectUrl {\n          href\n          __typename\n        }\n        method\n        parameter\n        experience\n        requestParams {\n          key\n          value\n          __typename\n        }\n        __typename\n      }\n      ...threeDSContingencyData\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment fundingOptions on CheckoutSession {\n  fundingOptions {\n    allPlans {\n      fundingSources {\n        fundingInstrument {\n          id\n          __typename\n        }\n        amount {\n          currencyCode\n          currencyValue\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment threeDSContingencyData on PaymentContingencies {\n  threeDSContingencyData {\n    name\n    causeName\n    resolution {\n      type\n      resolutionName\n      paymentCard {\n        billingAddress {\n          line1\n          line2\n          city\n          state\n          country\n          postalCode\n          __typename\n        }\n        expireYear\n        expireMonth\n        currencyCode\n        cardProductClass\n        id\n        encryptedNumber\n        type\n        number\n        bankIdentificationNumber\n        __typename\n      }\n      contingencyContext {\n        deviceDataCollectionUrl {\n          href\n          __typename\n        }\n        jwtSpecification {\n          jwtDuration\n          jwtIssuer\n          jwtOrgUnitId\n          type\n          __typename\n        }\n        reason\n        referenceId\n        source\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n"
            };

            paypalPostCreate(json, this.paypalExpressId, this.cookieJar, this.agent)
            .then(({ body }) => {
                let { errors, data } = body;

                if(errors)
                    return reject({ message: "Failed Creating Paypal Session!" });
                
                let { buyer, fundingOptions } = data.onboardAccount;
                this.paypalAccessToken = buyer.auth.accessToken;
                //could probably optimze by changing the payload query
                this.paypalInstrumentId = fundingOptions[0].allPlans[0].fundingSources[0].fundingInstrument.id;
                resolve("approvePaypal");
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Creating Paypal Session!" });

                let { statusCode } = response;
                reject({ message: `Unknown Error Creating Paypal Session! (${statusCode})` });
            });
        });
    };

    approvePaypal(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Approving Paypal Session", "yellow") 

            let json = {
                operationName: "ApproveOnboardPaymentMutation",
                variables: {
                    instrumentId: this.paypalInstrumentId,
                    isBillingAgreement: false,
                    token: this.paypalExpressId
                },
                query: "mutation ApproveOnboardPaymentMutation($token: String!, $instrumentId: String, $isBillingAgreement: Boolean!) {\n  attemptSetStickyFi(token: $token, instrumentId: $instrumentId) @include(if: $isBillingAgreement) {\n    buyer {\n      userId\n      __typename\n    }\n    __typename\n  }\n  approveGuestSignUpPayment(token: $token) {\n    buyer {\n      userId\n      email {\n        stringValue\n        __typename\n      }\n      name {\n        fullName\n        __typename\n      }\n      __typename\n    }\n    ...CartDonePage\n    ...CompletedPaymentInfo\n    fundingOptions {\n      fundingInstrument {\n        id\n        lastDigits\n        name\n        __typename\n      }\n      __typename\n    }\n    merchant {\n      name\n      preferences {\n        autoReturnToMerchant\n        enablePaymentDataTransfer\n        returnUrl\n        __typename\n      }\n      __typename\n    }\n    shippingAddresses {\n      fullAddress\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CartDonePage on CheckoutSession {\n  cart {\n    paymentId\n    returnUrl {\n      href\n      pathname\n      __typename\n    }\n    cancelUrl {\n      href\n      pathname\n      __typename\n    }\n    intent\n    items {\n      quantity\n      name\n      sku\n      unitPrice {\n        currencyValue\n        currencyFormat\n        __typename\n      }\n      itemOptionSelections {\n        name\n        description\n        __typename\n      }\n      __typename\n    }\n    amounts {\n      subtotal {\n        currencyCode\n        currencyFormat\n        __typename\n      }\n      tax {\n        currencyCode\n        currencyFormat\n        __typename\n      }\n      shipping {\n        currencyCode\n        currencyFormat\n        __typename\n      }\n      insurance {\n        currencyCode\n        currencyFormat\n        __typename\n      }\n      handlingFee {\n        currencyCode\n        currencyFormat\n        __typename\n      }\n      total {\n        currencyCode\n        currencyFormat\n        __typename\n      }\n      discount {\n        currencyCode\n        currencyFormat\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment CompletedPaymentInfo on CheckoutSession {\n  completedPaymentInfo {\n    transactionId\n    transactionState\n    receiptId\n    softDescriptor\n    postbackData\n    __typename\n  }\n  __typename\n}\n"
            };

            paypalPostApprove(json, this.paypalExpressId, this.paypalAccessToken, this.cookieJar, this.agent)
            .then(({ body }) => {
                let { errors, data } = body;

                if(errors)
                    return reject({ message: "Failed Approving Paypal Session" });
                
                this.paypalCallbackUrl = data.approveGuestSignUpPayment.cart.returnUrl.href;
                resolve("getCallback")
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Approving Paypal Session!" });

                let { statusCode } = response;
                reject({ message: `Unknown Error Approving Paypal Session! (${statusCode})` });
            });
        });
    };

    getCallback(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Getting Callback Page", "yellow");

            paypalGetCallback(this.paypalCallbackUrl, this.domain, this.cookieJar, this.agent)
            .then(({ body, headers }) => {
                let { location } = headers;

                if(/processing/.test(location))
                    return resolve("processPayment");
                else if(location)
                    return reject({ message: `Unknown Redirect Getting Callback Page! (${location})` });
                else if(/Wait while we redirect you./.test(body))
                    return reject({ delay: 1000 });

                status(this.id, this.site, "Paypal Error!", "red");
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Getting Callback Page!" });

                let { statusCode } = response;
                reject({ message: `Unknown Error Getting Callback Page! (${statusCode})` });
            });
        });
    };

    //i think i need to change this for free payments
    processPayment(){
        return new Promise((resolve, reject) => {
            status(this.id, this.site, "Processing Payment", "green");

            storefrontGetCheckout(this.domain, this.checkoutToken, this.accessToken, this.secretKey, this.cookieJar, this.agent)
            .then(({ body, headers }) => {
                if(headers["retry-after"])
                    return reject({ delay: headers["retry-after"] * 1000 });

                //calculates checkout speed (checkout speed = (atc time - submit payment time) x 1000)
                let checkoutTime = calculateSpeed(this.checkoutEnd, this.checkoutStart);
                let product = parseProduct(body);
                let { order, payments } = body.checkout;

                if(!order){
                    let reason = !payments.length ? "Product is no longer available." : payments[0].transaction.message || "Reason not found.";
                    failedWebhook(reason, this.site, product, "Fast", this.profile, checkoutTime);
                    return status(this.id, this.site, `Checkout Failed!`, "red");
                };

                let { name, status_url } = order;
                let confirmation = `[${name}](${status_url})`;

                successWebhook(confirmation, this.site, product, "Fast", this.profile, checkoutTime);
                status(this.id, this.site, "Checkout Success!", "green");
            })
            .catch(({ response }) => {
                if(!response)
                    return reject({ message: "Request Error Processing Payment!" });

                let { statusCode } = response;
                reject({ message: `Unknown Error Processing Payment! (${statusCode})` });
            });
        });
    };

    async controller(current){
        try {
            this.next = await this[current]();
            setTimeout(() => this.controller(this.next));
        }
        catch(error){
            try {
                if(error.message)
                    status(this.id, this.site, error.message, error.color || "red");
                if(/stop/gi.test(error.message))
                    throw new Error();
                setTimeout(() => this.controller(current), error.delay || this.delays.retry);
            }
            catch(error){
                this.stop();
            };
        };
    };
};

module.exports = FastTask;