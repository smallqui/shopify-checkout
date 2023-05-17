let { load } = require("cheerio");

let body = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en" dir="ltr" class="no-js mac chrome desktop page--no-banner page--logo-main page--show page--update card-fields">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0">
        <meta data-browser="chrome" data-browser-major="107">
        <meta data-body-font-family="Roboto" data-body-font-type="google">
        <meta id="shopify-digital-wallet" name="shopify-digital-wallet" content="/942252/digital_wallets/dialog">
        <meta name="shopify-checkout-api-token" content="08430b96c47dd2ac8e17e305db3b71e8">
        <meta name="shopify-checkout-authorization-token" content="b34010ace95d1b4c0307017db9cf5d60" />
        <meta id="shopify-regional-checkout-config" name="shopify-regional-checkout-config" content="{&quot;bugsnag&quot;:{&quot;checkoutJSApiKey&quot;:&quot;717bcb19cf4dd1ab6465afcec8a8de02&quot;,&quot;endpoint&quot;:&quot;https:\/\/notify.bugsnag.com&quot;}}" />
        <meta id="autocomplete-service-sandbox-url" name="autocomplete-service-sandbox-url" content="https://checkout.shopify.com/942252/sandbox/autocomplete_service?locale=en" />
        <meta property="og:title" content="Purchase Kith For The Wire Omar Vintage Tee - Black" />
        <meta property="og:image" content="https://cdn.shopify.com/s/files/1/0094/2252/products/KHM030506-001-FRONT_1024x1024.jpg?v=1654262327" />
        <link href="//cdn.shopify.com/s/files/1/0094/2252/t/82/assets/checkout_2.css?9885839021806687087" rel="stylesheet" type="text/css" media="all">
        <link rel="dns-prefetch" href="https://fonts.shopifycdn.com">
        <link rel="preconnect" href="https://fonts.shopifycdn.com" crossorigin>
        <link rel="preload" href="https://fonts.shopifycdn.com/roboto/roboto_n4.da808834c2315f31dd3910e2ae6b1a895d7f73f5.woff2?valid_until=MTY3MDg5MDg5MA&amp;hmac=830f6d1be774f25863551dbf210521082add948f64ca5d7eb67be49bf1b09d36" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="https://fonts.shopifycdn.com/roboto/roboto_n5.126dd24093e910b23578142c0183010eb1f2b9be.woff2?valid_until=MTY3MDg5MDg5MA&amp;hmac=39d6c87c8ea55d518ee4b6ef704dabc4b54258dbb6390aa81d455b4d8e0c1c7b" as="font" type="font/woff2" crossorigin>
        <style>
            @font-face {
                font-family: "Roboto";
                font-style: normal;
                font-weight: 400;
                src: local('Roboto Regular'), local('Roboto-Regular'), url(https://fonts.shopifycdn.com/roboto/roboto_n4.da808834c2315f31dd3910e2ae6b1a895d7f73f5.woff2?valid_until=MTY3MDg5MDg5MA&hmac=830f6d1be774f25863551dbf210521082add948f64ca5d7eb67be49bf1b09d36) format('woff2'), url(https://fonts.shopifycdn.com/roboto/roboto_n4.a512c7b68cd7f12c72e1a5fd58e7f7315c552e93.woff?valid_until=MTY3MDg5MDg5MA&hmac=b17678332b1fc797cdfb9fb78b987fa173413f93da5e2e712becc5a45d7ea470) format('woff');
            }

            @font-face {
                font-family: "Roboto";
                font-style: normal;
                font-weight: 500;
                src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.shopifycdn.com/roboto/roboto_n5.126dd24093e910b23578142c0183010eb1f2b9be.woff2?valid_until=MTY3MDg5MDg5MA&hmac=39d6c87c8ea55d518ee4b6ef704dabc4b54258dbb6390aa81d455b4d8e0c1c7b) format('woff2'), url(https://fonts.shopifycdn.com/roboto/roboto_n5.ef0ac6b5ed77e19e95b9512154467a6fb9575078.woff?valid_until=MTY3MDg5MDg5MA&hmac=e106b97443961672804d5a6df5a430b9264020f764f1929ebd82516259828ff5) format('woff');
            }
        </style>
        <!--[if lt IE 9]>
														<link rel="stylesheet" media="all" href="//cdn.shopify.com/app/services/942252/assets/131879764096/checkout_stylesheet/v2-ltr-2021-01-25-fae89129e14e1d1356f2f99f330d146d-160000/oldie" />
														<![endif]-->
        <!--[if gte IE 9]>
														<!-->
        <link rel="stylesheet" href="//cdn.shopify.com/app/services/942252/assets/131879764096/checkout_stylesheet/v2-ltr-2021-01-25-fae89129e14e1d1356f2f99f330d146d-160000" media="all" />
        <!--
														<![endif]-->
        <script type="text/javascript">
            Shopify = window.Shopify || {};
            ShopifyExperiments = window.ShopifyExperiments || {};
            ShopifyPay = window.ShopifyPay || {};
            if (window.opener) {
                window.opener.postMessage(JSON.stringify({
                    "current_checkout_page": "\/checkout\/contact_information"
                }), "*");
            }
            Shopify.Checkout = Shopify.Checkout || {};
            Shopify.Checkout.Autocomplete = true;
            Shopify.Checkout.apiHost = "kithnyc.myshopify.com";
            Shopify.Checkout.assetsPath = "\/\/cdn.shopify.com\/shopifycloud\/shopify";
            Shopify.Checkout.DefaultAddressFormat = "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}";
            Shopify.Checkout.geolocatedAddress = {
                "lat": 40.8459,
                "lng": -74.2009
            };
            Shopify.Checkout.i18n = {
                "orders": {
                    "order_updates": {
                        "title": "Order updates"
                    },
                    "complete_order": "Complete order",
                    "pay_now": "Pay now"
                },
                "shipping_line": {
                    "pickup_in_store_label": "Pickup",
                    "no_pickup_location": "Your order isn't available for pickup. Enter a shipping address.",
                    "shipping_label": "Shipping",
                    "shipping_default_value": "Calculated at next step",
                    "shipping_free_value": "Free"
                },
                "continue_button": {
                    "continue_to_shipping_method": "Continue to shipping",
                    "continue_to_payment_method": "Continue to payment"
                },
                "qr_code": {
                    "title": "Track on your phone",
                    "subtitle": "Scan the code with your phone’s camera to track with Shop.",
                    "send_link_to_phone": "Or send a link to your phone"
                }
            };
            Shopify.Checkout.locale = "en";
            Shopify.Checkout.normalizedLocale = "en";
            Shopify.Checkout.moneyFormat = '$#amount';
            Shopify.Checkout.page = "update";
            Shopify.Checkout.releaseStage = "production";
            Shopify.Checkout.deployStage = "production";
            Shopify.Checkout.requiresShipping = true;
            Shopify.Checkout.step = "contact_information";
            Shopify.Checkout.token = "deb5623924abf274112f3b6238f29973";
            Shopify.Checkout.currency = "USD";
            Shopify.Checkout.estimatedPrice = 70.00;
            Shopify.Checkout.dynamicCheckoutPaymentInstrumentsConfig = {
                "paymentInstruments": {
                    "accessToken": "08430b96c47dd2ac8e17e305db3b71e8",
                    "amazonPayConfig": null,
                    "applePayConfig": {
                        "shopId": 942252,
                        "countryCode": "US",
                        "currencyCode": "USD",
                        "merchantCapabilities": ["supports3DS"],
                        "merchantId": "gid:\/\/shopify\/Shop\/942252",
                        "merchantName": "Kith",
                        "requiredBillingContactFields": ["postalAddress", "email", "phone"],
                        "requiredShippingContactFields": ["postalAddress", "email", "phone"],
                        "shippingType": "shipping",
                        "supportedNetworks": ["visa", "masterCard", "amex", "discover", "elo", "jcb", "chinaUnionPay"],
                        "total": {
                            "type": "pending",
                            "label": "Kith",
                            "amount": "1.00"
                        },
                        "shopifyPaymentsEnabled": true,
                        "supportsSubscriptions": true,
                        "walletAuthenticationToken": "eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMzODQifQ.eyJjaGVja291dF90b2tlbiI6ImRlYjU2MjM5MjRhYmYyNzQxMTJmM2I2MjM4ZjI5OTczIiwib3JkZXJfdHlwZV9pZCI6Im9yZGVyLmNvbS5zaG9waWZ5LnNob3AiLCJpc3MiOiJzaG9waWZ5IiwiaWF0IjoxNjcwODg3MjkwLCJleHAiOjE2ODY0MzkyOTB9.Po2ClIclQeIY2o7FleCCCHh1VMVFHIndlY5jcN2GCL3jm086pz-u_uPB3AqVui-G",
                        "walletServiceUrl": "https:\/\/wallet-order-service.shopifyapps.com",
                        "walletOrderTypeIdentifier": "order.com.shopify.shop"
                    },
                    "checkoutConfig": {
                        "domain": "kith.com",
                        "shopId": 942252
                    },
                    "shopifyPayConfig": {
                        "domain": "kith.com",
                        "shopId": 942252,
                        "accelerated": false,
                        "supportsLogin": true,
                        "experimentTestGroup": false,
                        "experimentGroup": "",
                        "merchantId": "gid:\/\/shopify\/Shop\/942252",
                        "supportsSubscriptions": true,
                        "forceCheckoutOneExperience": false,
                        "applePayUsed": false
                    },
                    "currency": "USD",
                    "googlePayConfig": {
                        "dynamicBuyFlow": true,
                        "iframeSrc": "https:\/\/checkout.shopify.com\/942252\/sandbox\/costanza_google_pay_iframe",
                        "currency": "USD",
                        "countryCode": "US",
                        "capabilities": {
                            "environment": "PRODUCTION",
                            "allowedPaymentMethods": [{
                                "type": "CARD",
                                "parameters": {
                                    "allowedAuthMethods": ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                    "allowedCardNetworks": ["VISA", "MASTERCARD", "AMEX", "DISCOVER", "JCB"],
                                    "allowPrepaidCards": false,
                                    "billingAddressRequired": true,
                                    "billingAddressParameters": {
                                        "format": "FULL",
                                        "phoneNumberRequired": true
                                    }
                                },
                                "tokenizationSpecification": {
                                    "type": "PAYMENT_GATEWAY",
                                    "parameters": {
                                        "gateway": "shopify",
                                        "gatewayMerchantId": "942252"
                                    }
                                }
                            }],
                            "existingPaymentMethodRequired": true,
                            "merchantInfo": {
                                "merchantId": "16708973830884969730",
                                "merchantName": "Kith",
                                "merchantOrigin": "kith.com",
                                "authJwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJtZXJjaGFudElkIjoiMTY3MDg5NzM4MzA4ODQ5Njk3MzAiLCJtZXJjaGFudE9yaWdpbiI6ImtpdGguY29tIiwiaWF0IjoxNjcwODg3MjkwfQ.80t97-bspZtIfX22Mhz83GPV7GqBmmJ0brv86A5KCu3lPS6DEgPmZKkiw6dCu7q33EEDY7lmTfKAjvAhRzpi-w"
                            },
                            "emailRequired": true,
                            "shippingAddressRequired": true,
                            "shippingAddressParameters": {
                                "phoneNumberRequired": true,
                                "allowedCountryCodes": ["AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "BZ", "CA", "CH", "CL", "CN", "CO", "CR", "CY", "CZ", "DE", "DK", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GF", "GL", "GR", "GT", "GY", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KR", "LB", "LT", "LU", "LV", "MC", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SI", "SK", "SR", "SV", "TH", "TR", "TW", "US", "UY", "VE", "VN", "YE", "ZA"]
                            }
                        },
                        "supportsSubscriptions": true
                    },
                    "locale": "en",
                    "paypalConfig": {
                        "domain": "kith.com",
                        "environment": "production",
                        "merchantId": "J84BKAHN99EUL",
                        "buttonVersion": "v3",
                        "venmoSupported": true,
                        "locale": "en_US",
                        "shopId": 942252,
                        "supportsSubscriptions": null,
                        "supportsDeferredPurchaseOptions": null
                    },
                    "offsiteConfigs": null,
                    "supportsDiscounts": true,
                    "supportsGiftCards": true,
                    "checkoutDisabled": false,
                    "walletsDisplayedCookieInPaymentSheetFlag": true
                }
            };
            Shopify.Checkout.applePayConfig = null;
            Shopify.Checkout.hasSellingPlan = false;
            Shopify.Checkout.customer = {};
            Shopify.Checkout.requiresConfirmationStep = false;
            Shopify.Checkout.cartToken = null;
            Shopify.Checkout.isCheckoutOne = true; // Default to true
            ShopifyExperiments.AutocompleteServiceApiHost = "https:\/\/atlas.shopifysvc.com";
            ShopifyPay.enabled = true;
            ShopifyPay.apiHost = "shop.app\/pay";
            ShopifyPay.apiToken = "NStCbVhpSVAxQVlvWTRLd2tkcjdVNTI3b0NDcWx2TlVwUmNZY3p3Sk1HQT0tLU9TTkwxLzBnWjQyeEtOUm5IZ0pVN3c9PQ==--daa8a7e1adf117d46d09bd0aab90db6b76dd1597";
            Shopify.houseNumberNudgeCountries = ["AR", "AU", "AT", "BE", "BR", "CA", "CL", "CO", "CZ", "DK", "EE", "FI", "FR", "DE", "HK", "HU", "IL", "IT", "JP", "LV", "MY", "MX", "NL", "NZ", "PL", "PT", "RO", "RU", "SG", "ZA", "ES", "SE", "CH", "TR", "AE", "GB", "US"];
            Shopify.houseNumberMayBeInAddress2 = ["NL"];
            Shopify.autocompleteEnabledCountries = ["AU", "AT", "BE", "BR", "CA", "DK", "FR", "DE", "HK", "IN", "IT", "JP", "LU", "NL", "NZ", "NO", "SA", "SG", "ES", "SE", "CH", "GB", "US"];
        </script>
        <script>
            ShopifyPay.apiHost = "shop.app\/pay";
        </script>
        <script>
            Shopify.Checkout.isCheckoutOne = false; // Override to false
            ShopifyPay.transactionParams = "checkout_secret=b34010ace95d1b4c0307017db9cf5d60\u0026encrypted_params=OGpVbFdsaGJ6bzlzR2lpNVhmdldYQ3o0UGlsL3hUM3Z5K3prMTIzVG9nV3YwZWJVcVU0MWJBKzBqdEg4eUpZV0MwZkkraU00bTFyeEYyKzF0TVdEM2ptcHdvVFlONnh6WTV3dFBGS2gvWHlSZXk3bmtPcXVZS3dDZVBKU2xkYW43RHZ3a29YcWdEa3RjOHZsN1NqdTdNczZ4SElwNmk1UlJoa0FqaE44azdUdm12YWE4VllhTkNRWi9kYkNpbGFYVi9DYXFmRm5xQm5mKzh0dnJrV0wyUEZlYVZ4REI3d3d1WjhkTDFwalA2YTFRV3dGWDlkZWMvV1J5Wjd6RzZqTGxnb3ZENUx0UGY5WCtTdDcwMXF4ajRicjlnZE9FcXcxR0QvTjQ1YmFheG8rdzUwQnpQdk9RVS9VSm42QTc3QjA0YjM5OTU4UHFQNlg3blQvUkxVSFFqbTFlcUVmMndWZ0JhMkFxOFVqNmVrMnoyTzZZa3ZPb1FLaEhaUVZZZ3Y0Q1hhUHRyZzJTSUZQVERZZ3lEZktJRVVOdFdnTW5sdUh0d3VpUThYM1lscVMrU2ZsVmNmMkFmWTZEOHNiSlhUVXBubVF0OWoxd3VPQ2srdHErT2ZteXVsODg1Q3pNSFhlbUhrVVFuam5OYlg1eE0rclk4NHMzMUt5N09VbGV6T0Q1NVlmb3poYlphUzJnVXFCUFhReHM2R3dHVjVNQnlCL0JQdkxvZFJ3UldQVWFxUU5ETU5QZWg3bloxY3NyeDU2WVZCK1B2NlN0V1hBUmRxQmNHUDgxTG9qNG0yWDZDMy8wNk0xK1lqaDV2czc0SnlTYnE0ZzhJYlQ3dVRNc2IwbnEzSHBQSnJOTzBLNGpqdThMczE4NVoxS3BrM2s4Vzh4Q2REUjZ5RE9vQWxlQmFET092ODFac3Q5MGloYWlkT3dzSjIvWldRZGlkYWVwMHA0TW4vZ2lXS3NJWGZFVFB2U3pyMVdUWHc1Z1VGRVVabFZJbDRtYXBoNzFXR2w5ZS84eG9rdlN3T1VsMjM4MWZvRkkrZGhodE5YWUJ5K1BDc1FFSWF1TWE2ckFoVDN3RjJFZjgwd0xpeUZXTlU4RlQzTmM1cmdwVTJOenlhdGJBbklCYnl1WEZkSzQrQWpmNUd3SFlRWWl1cWVoV042UnZKb0pwYWpyRlRaQnBrcFZHSEs5MmlFTk52N0ovZFpwQnQvMWoxdWV2QlRndndoSjU0T3FBdnRCazB0RlJobDBZMTA1aXIvbk1xSnNzQnEwQ0dpUTdtWC9Yc0hxclluWXFoVmlObDd4WUIydmlQL2NyK25qbnp1OHdLMzhLUkcwT2VidUZDa0JkVmlmZDJ4T0tiTmIrWmxOSVBFWVFMQlBja1dFaUhsVEswUjdLbEJWNzExS2phalExanVDUWpkbFJYQXFpSGJzTXRKOUlDSVlDWVctLTcvRjVRZHdhK2l4djNhd1BPWjI3enc9PQ%3D%3D--69864c9f97ee14310f84e8387c0f92196ef153f8\u0026locale=en";
        </script>
        <script>
            Shopify.Checkout.totalPrice = 80.00;
            Shopify.Checkout.shop = {
                id: 942252,
            };
            Shopify.Checkout.shippingAddress = {
                countryCode: "US",
                provinceCode: "NJ",
            };
            Shopify.Checkout.billingAddress = {
                countryCode: "US",
                provinceCode: "NJ",
            };
        </script>
        <script src="//cdn.shopify.com/app/services/942252/javascripts/checkout_countries/131879764096/en/countries-5f3666e98a6ef64dab4ee948727d203390885c50-5f3666e98a6ef64dab4ee948727d203390885c50-1670593337-e1413a830127c0c2806dff1ce9313204d837ef12.js?version=2021-01-25" crossorigin="anonymous"></script>
        <script src="//cdn.shopify.com/shopifycloud/shopify/assets/checkout_2021-01-25-56fd3fb2a9e87e63c7067dc66a54d13c9ca633da1575bf6a48f323da737ee10e.js" crossorigin="anonymous"></script>
        <script src="//cdn.shopify.com/shopifycloud/shopify/assets/shopify_pay-71cbfe0ce2cd95e7632d250008e8b61a28e52b1db2cf6c01b0cc894c2a6cf9d3.js" crossorigin="anonymous"></script>
        <script>
            window.ShopifyPaypalV4VisibilityTracking = true;
        </script>
        <script type="text/javascript">
            Shopify.clientAttributesCollectionEventName = "client_attributes_checkout";
            var DF_CHECKOUT_TOKEN = "deb5623924abf274112f3b6238f29973";
        </script>
        <script id="__st">
            var __st = {
                "a": 942252,
                "offset": -18000,
                "reqid": "d87422fa-7881-42b0-9917-70eb56fcbc9d",
                "pageurl": "kith.com\/942252\/checkouts\/deb5623924abf274112f3b6238f29973?key=b34010ace95d1b4c0307017db9cf5d60",
                "u": "37b52cd3d9ee",
                "t": "checkout",
                "offsite": 1
            };
        </script>
        <script>
            var Shopify = Shopify || {};
            Shopify.paymentSheetCdnHost = "cdn.shopify.com";
        </script>
        <script src="https://cdn.shopify.com/shopifycloud/payment-sheet/assets/latest/dynamic-web-checkout.en.js?v=2" defer="defer"></script>
        <script src="//www.paypalobjects.com/api/checkout.min.js" defer="defer" data-merchant-id="J84BKAHN99EUL" data-partner-attribution-id="JadedPixel_ShoppingCart_EC_CA"></script>
        <script src="https://pay.google.com/gp/p/js/pay.js" defer="defer"></script>
        <meta id="in-context-paypal-metadata" data-shop-id="942252" data-venmo-supported="true" data-environment="production" data-locale="en_US" data-paypal-v4="true" data-currency="USD">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" type="text/javascript"></script>
        <script src="//cdn.shopify.com/s/files/1/0094/2252/t/399/assets/jquery.alphanum.js?160000" type="text/javascript"></script>
        <script>
            (function($) {
                'use strict';
                var addressType;
                var addRestrictions;
                var $addresses;
                $(document).on('page:load page:change', function() {
                    addRestrictions = false;
                    if (Shopify.Checkout.step === 'contact_information') {
                        addressType = "shipping_address";
                        addRestrictions = true;
                    }
                    if (Shopify.Checkout.step === 'payment_method') {
                        addressType = "billing_address";
                        addRestrictions = true;
                    }
                    if (addRestrictions) {
                        $addresses = $('[name="checkout[' + addressType + '][address1]"],' + '[name="checkout[' + addressType + '][address2]"],' + '[name="checkout[' + addressType + '][city]"],' + '[name="checkout[' + addressType + '][zip]"],' + '[name="checkout[' + addressType + '][phone]"],' + '[name="checkout[' + addressType + '][company]"],' + '[name="checkout[' + addressType + '][last_name]"],' + '[name="checkout[' + addressType + '][first_name]"]');
                        $addresses.alphanum({
                            onlyUTF8: true
                        });
                        $addresses.trigger('change');
                        $(document).on('change', '[name="checkout[' + addressType + '][id]"]', function() {
                            $addresses.trigger('change');
                        });
                    }
                });
            })(jQuery);
        </script>
        <link href="//cdn.shopify.com/s/files/1/0094/2252/t/399/assets/checkout.scss.css?v=121061246763505691251670593337" rel="stylesheet" type="text/css" media="all" />
    </head>
    <body>
        <a href="#main-header" class="skip-to-content"> Skip to content </a>
        <div class="banner" data-header>
            <div class="wrap">
                <a class="logo logo--left" href="https://kith.com/">
                    <img alt="Kith" class="logo__image logo__image--small" src="//cdn.shopify.com/s/files/1/0094/2252/files/logo_863a28b5-bea8-4f3a-8e94-68a6fbff0990.png?160000" />
                </a>
                <h1 class="visually-hidden"> Information </h1>
            </div>
        </div>
        <aside role="complementary">
            <button class="order-summary-toggle order-summary-toggle--show shown-if-js" aria-expanded="false" aria-controls="order-summary" data-drawer-toggle="[data-order-summary]">
                <span class="wrap">
                    <span class="order-summary-toggle__inner">
                        <span class="order-summary-toggle__icon-wrapper">
                            <svg width="20" height="19" xmlns="http://www.w3.org/2000/svg" class="order-summary-toggle__icon">
                                <path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z" />
                            </svg>
                        </span>
                        <span class="order-summary-toggle__text order-summary-toggle__text--show">
                            <span>Show order summary</span>
                            <svg width="11" height="6" xmlns="http://www.w3.org/2000/svg" class="order-summary-toggle__dropdown" fill="#000">
                                <path d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z" />
                            </svg>
                        </span>
                        <span class="order-summary-toggle__text order-summary-toggle__text--hide">
                            <span>Hide order summary</span>
                            <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg" class="order-summary-toggle__dropdown" fill="#000">
                                <path d="M6.138.876L5.642.438l-.496.438L.504 4.972l.992 1.124L6.138 2l-.496.436 3.862 3.408.992-1.122L6.138.876z" />
                            </svg>
                        </span>
                        <dl class="order-summary-toggle__total-recap total-recap" data-order-summary-section="toggle-total-recap">
                            <dt class="visually-hidden">
                                <span>Sale price</span>
                            </dt>
                            <dd>
                                <span class="order-summary__emphasis total-recap__final-price skeleton-while-loading" data-checkout-payment-due-target="8000">$80.00</span>
                            </dd>
                        </dl>
                    </span>
                </span>
            </button>
        </aside>
        <div class="content" data-content>
            <div class="wrap">
                <div class="main" role="main">
                    <div class="main__header">
                        <a class="logo logo--left" href="https://kith.com/">
                            <img alt="Kith" class="logo__image logo__image--small" src="//cdn.shopify.com/s/files/1/0094/2252/files/logo_863a28b5-bea8-4f3a-8e94-68a6fbff0990.png?160000" />
                        </a>
                        <h1 class="visually-hidden"> Information </h1>
                        <script>
                            $(document).ready(function() {
                                        if (window.location.href.indexOf("orders") > -1) {
                                            $(".main__header").append(' < div class = "snb" > < a href = "https://kith.com/"
                                                class = "step__footer__continue-btn btn snb" > < span class = "btn__content snb" > Continue shopping < /span> < i class = "btn__spinner icon icon--button-spinner" > < /i> < /a> < /div>');
                                            }
                                        });
                        </script>
                        <nav aria-label="Breadcrumb">
                            <ol class="breadcrumb " role="list">
                                <li class="breadcrumb__item breadcrumb__item--current" aria-current="step">
                                    <span class="breadcrumb__text">Information</span>
                                    <svg class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon" aria-hidden="true" focusable="false">
                                        <use xlink:href="#chevron-right" />
                                    </svg>
                                </li>
                                <li class="breadcrumb__item breadcrumb__item--completed">
                                    <a class="breadcrumb__link" href="/942252/checkouts/deb5623924abf274112f3b6238f29973?step=shipping_method">Shipping</a>
                                    <svg class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon" aria-hidden="true" focusable="false">
                                        <use xlink:href="#chevron-right" />
                                    </svg>
                                </li>
                                <li class="breadcrumb__item breadcrumb__item--blank">
                                    <a class="breadcrumb__link" href="/942252/checkouts/deb5623924abf274112f3b6238f29973?step=payment_method">Payment</a>
                                </li>
                            </ol>
                        </nav>
                        <div class="shown-if-js" data-alternative-payments>
                            <div class="dynamic-checkout dynamic-checkout--loading">
                                <h2 class="dynamic-checkout__title"> Express checkout </h2>
                                <div class="dynamic-checkout__content">
                                    <div class="dynamic-checkout__skeleton">
                                        <div class="placeholder-line placeholder-line--animated"></div>
                                        <div class="placeholder-line placeholder-line--animated"></div>
                                        <div class="placeholder-line placeholder-line--animated"></div>
                                    </div>
                                    <div class="dynamic-checkout__buttons" data-shopify="dynamic-web-checkout"></div>
                                </div>
                            </div>
                            <div class="alternative-payment-separator" data-alternative-payment-separator>
                                <span class="alternative-payment-separator__content"> OR </span>
                            </div>
                        </div>
                    </div>
                    <div class="main__content">
                        <script>
                            (function() {
                                GoogleAnalyticsSandbox = window.GoogleAnlyticsSandbox || {};
                                GoogleAnalyticsSandbox.sandboxToken = "0czRfiZz_qCCCUJ2jbY7zg";
                            })();
                        </script>
                        <iframe srcdoc="
																				<script>(function() {
Shopify = window.Shopify || {};
Shopify.Checkout = window.Shopify.Checkout || {};
Shopify.Checkout.allowlistedUrls = [&quot;https:\/\/kithnyc.myshopify.com&quot;,&quot;https:\/\/shop.kithnyc.com&quot;,&quot;https:\/\/kithnyc.com&quot;,&quot;https:\/\/www.kithnyc.com&quot;,&quot;https:\/\/www.kith.com&quot;,&quot;https:\/\/kith.com&quot;,&quot;https:\/\/kithnyc.account.myshopify.com&quot;,&quot;https:\/\/checkout.shopify.com&quot;];
Shopify.Checkout.allowlistedHostSuffixes = [&quot;-942252.shopifypreview.com&quot;];
GoogleAnalyticsSandbox = window.GoogleAnlyticsSandbox || {};
GoogleAnalyticsSandbox.sandboxToken = &quot;0czRfiZz_qCCCUJ2jbY7zg&quot;;
})();
</script>
																				<script>!function(){var e=function(e){var t={exports:{}};return e.call(t.exports,t,t.exports),t.exports},o=function(){function i(e,t){for(var n=0;n
																					<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,&quot;value&quot;in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),s=function(e,t){if(!(e instanceof t))throw new TypeError(&quot;Cannot call a class as a function&quot;)},t=function(e){return e&&e.__esModule?e:{&quot;default&quot;:e}},a=e(function(e,t){&quot;use strict&quot;;function n(e){if(&quot;string&quot;!=typeof e)return!1;var t=e.indexOf(a);if(e.substring(0,t)!==s)return!1;var n=e.substring(t+1);return JSON.parse(n)}function i(e){return&quot;&quot;+s+a+JSON.stringify(e)}function r(t){if(!t||void 0===t)return!1;try{return Shopify.Checkout.allowlistedUrls&&-1!==Shopify.Checkout.allowlistedUrls.indexOf(t)||Shopify.Checkout.allowlistedHostSuffixes&&0
																						<Shopify.Checkout.allowlistedHostSuffixes.filter(function(e){return new RegExp(&quot;(.*)&quot;+e+&quot;$&quot;).test(t)}).length}catch(e){return window.ErrorReporter&&window.ErrorReporter.notify(new Error(e.message),&quot;sandboxed_messages.js - verifiedOrigin&quot;),!1}}function o(){return GoogleAnalyticsSandbox?GoogleAnalyticsSandbox.sandboxToken:&quot;&quot;}Object.defineProperty(t,&quot;__esModule&quot;,{value:!0}),t.parseMessage=n,t.buildMessage=i,t.verifiedOrigin=r,t.getSandboxToken=o;var s=&quot;shopify_sandboxed_message&quot;,a=&quot;:&quot;}),n=e(function(e,t){&quot;use strict&quot;;Object.defineProperty(t,&quot;__esModule&quot;,{value:!0});var n=function(){function e(){var i=this;s(this,e),this.calls=[],window.ga=function(){for(var e=arguments.length,t=Array(e),n=0;n
																							<e;n++)t[n]=arguments[n];return i.gaCall(t)}}return o(e,[{key:&quot;gaCall&quot;,value:function n(e){var t=this;this.calls.push(e),clearTimeout(this.timeout),this.timeout=setTimeout(function(){0
																								<t.calls.length&&t.sendMessage()},0)}},{key:&quot;listen&quot;,value:function i(){var t=this;window.addEventListener(&quot;message&quot;,function(e){return t.receiveMessage(e)},!1)}},{key:&quot;sendMessage&quot;,value:function t(){window.parent.postMessage({type:&quot;analytics&quot;,calls:this.calls,sandboxToken:(0,a.getSandboxToken)()},this.origin),this.calls=[]}},{key:&quot;receiveMessage&quot;,value:function r(e){if((0,a.verifiedOrigin)(e.origin)&&e.source===window.parent&&e.data&&&quot;checkout_context&quot;===e.data.type){this.origin=e.origin,window.Shopify=e.data.Shopify,window.__st=e.data.__st;try{window.additionalScripts()}catch(t){console.error(&quot;User script error: &quot;,t)}}}}]),e}();t[&quot;default&quot;]=n});e(function(){&quot;use strict&quot;;(new(t(n)[&quot;default&quot;])).listen()})}(&quot;undefined&quot;!=typeof global?global:&quot;undefined&quot;!=typeof window&&window);
window.additionalScripts = function () {

};

																								</script>" src="https://checkout.shopify.com/942252/sandbox/google_analytics_iframe?sandbox_token=0czRfiZz_qCCCUJ2jbY7zg" onload="this.setAttribute(&#39;data-loaded&#39;, true)" sandbox="allow-scripts" id="google-analytics-sandbox" tabIndex="-1" class="visually-hidden" style="display:none" aria-hidden="true">
                        </iframe>
                        <div class="step" data-step="contact_information" data-last-step="false">
                            <form data-customer-information-form="true" data-email-or-phone="false" class="edit_checkout" novalidate="novalidate" action="/942252/checkouts/deb5623924abf274112f3b6238f29973" accept-charset="UTF-8" method="post">
                                <input type="hidden" name="_method" value="patch" autocomplete="off" />
                                <input type="hidden" name="authenticity_token" value="kb5Y1MiQEdhT792D8jxS52K68MtvFJHci-9rLDHJ2_6B7TKYTBTk79WCWf7kEdl5icqHXpqYVND9C0cK_wdKPA" autocomplete="off" />
                                <input type="hidden" name="previous_step" id="previous_step" value="contact_information" autocomplete="off" />
                                <input type="hidden" name="step" value="shipping_method" autocomplete="off" />
                                <div class="step__sections">
                                    <div class="section section--contact-information">
                                        <div class="section__header">
                                            <div class="layout-flex layout-flex--tight-vertical layout-flex--loose-horizontal layout-flex--wrap">
                                                <h2 class="section__title layout-flex__item layout-flex__item--stretch" id="main-header" tabindex="-1"> Contact information </h2>
                                                <p class="layout-flex__item">
                                                    <span aria-hidden="true">Already have an account?</span>
                                                    <a href="https://kith.com/account/login?checkout_url=https%3A%2F%2Fkith.com%2F942252%2Fcheckouts%2Fdeb5623924abf274112f3b6238f29973%3Fkey%3Db34010ace95d1b4c0307017db9cf5d60%26step%3Dcontact_information">
                                                        <span class="visually-hidden">Already have an account?</span> Log in </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="section__content" data-section="customer-information" data-shopify-pay-validate-on-load="false">
                                            <div class="fieldset">
                                                <div data-shopify-pay-email-flow="true" class="field field--required">
                                                    <label class="field__label" for="checkout_email">Email</label>
                                                    <div class="field__input-wrapper">
                                                        <input placeholder="Email" autocapitalize="off" spellcheck="false" autocomplete="shipping email" data-shopify-pay-handle="true" data-autofocus="true" data-backup="customer_email" aria-describedby="checkout-context-step-one" aria-required="true" class="field__input" size="30" type="email" value="test@live.com" name="checkout[email]" id="checkout_email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="fieldset-description" data-buyer-accepts-marketing>
                                                <div class="section__content">
                                                    <div class="checkbox-wrapper">
                                                        <div class="checkbox__input">
                                                            <input name="checkout[buyer_accepts_marketing]" type="hidden" value="0" autocomplete="off" />
                                                            <input class="input-checkbox" data-email-marketing="true" data-backup="buyer_accepts_marketing" type="checkbox" value="1" checked="checked" name="checkout[buyer_accepts_marketing]" id="checkout_buyer_accepts_marketing" />
                                                        </div>
                                                        <label class="checkbox__label" for="checkout_buyer_accepts_marketing"> Email me with news and offers </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="section section--shipping-address" data-shipping-address>
                                        <div class="section__header">
                                            <h2 class="section__title" id="section-delivery-title"> Shipping address </h2>
                                        </div>
                                        <div class="section__content">
                                            <div class="fieldset">
                                                <div class="address-fields" data-address-fields>
                                                    <input class="visually-hidden" autocomplete="shipping given-name" tabindex="-1" aria-hidden="true" aria-label="no-label" data-autocomplete-field="first_name" data-honeypot="true" aria-required="true" size="30" type="text" name="checkout[shipping_address][first_name]" />
                                                    <input class="visually-hidden" autocomplete="shipping family-name" tabindex="-1" aria-hidden="true" aria-label="no-label" data-autocomplete-field="last_name" data-honeypot="true" aria-required="true" size="30" type="text" name="checkout[shipping_address][last_name]" />
                                                    <input class="visually-hidden" autocomplete="shipping address-line1" tabindex="-1" aria-hidden="true" aria-label="no-label" data-autocomplete-field="address1" data-honeypot="true" aria-required="true" size="30" type="text" name="checkout[shipping_address][address1]" />
                                                    <input class="visually-hidden" autocomplete="shipping address-line2" tabindex="-1" aria-hidden="true" aria-label="no-label" data-autocomplete-field="address2" data-honeypot="true" size="30" type="text" name="checkout[shipping_address][address2]" />
                                                    <input class="visually-hidden" autocomplete="shipping address-level2" tabindex="-1" aria-hidden="true" aria-label="no-label" data-autocomplete-field="city" data-honeypot="true" aria-required="true" size="30" type="text" name="checkout[shipping_address][city]" />
                                                    <input class="visually-hidden" autocomplete="shipping country" tabindex="-1" aria-hidden="true" aria-label="no-label" data-autocomplete-field="country" data-honeypot="true" aria-required="true" size="30" type="text" name="checkout[shipping_address][country]" />
                                                    <input class="visually-hidden" autocomplete="shipping address-level1" tabindex="-1" aria-hidden="true" aria-label="no-label" data-autocomplete-field="province" data-honeypot="true" aria-required="true" size="30" type="text" name="checkout[shipping_address][province]" />
                                                    <input class="visually-hidden" autocomplete="shipping postal-code" tabindex="-1" aria-hidden="true" aria-label="no-label" data-autocomplete-field="zip" data-honeypot="true" aria-required="true" size="30" type="text" name="checkout[shipping_address][zip]" />
                                                    <input class="visually-hidden" autocomplete="shipping tel" tabindex="-1" aria-hidden="true" aria-label="no-label" data-autocomplete-field="phone" data-honeypot="true" aria-required="true" size="30" type="text" name="checkout[shipping_address][phone]" />
                                                    <div class="field--half field field--required" data-address-field="first_name">
                                                        <label class="field__label" for="checkout_shipping_address_first_name">First name</label>
                                                        <div class="field__input-wrapper">
                                                            <input placeholder="First name" autocomplete="shipping given-name" autocorrect="off" data-backup="first_name" class="field__input" aria-required="true" size="30" type="text" value="john" name="checkout[shipping_address][first_name]" id="checkout_shipping_address_first_name" />
                                                        </div>
                                                    </div>
                                                    <div class="field--half field field--required" data-address-field="last_name">
                                                        <label class="field__label" for="checkout_shipping_address_last_name">Last name</label>
                                                        <div class="field__input-wrapper">
                                                            <input placeholder="Last name" autocomplete="shipping family-name" autocorrect="off" data-backup="last_name" class="field__input" aria-required="true" size="30" type="text" value="test" name="checkout[shipping_address][last_name]" id="checkout_shipping_address_last_name" />
                                                        </div>
                                                    </div>
                                                    <div data-address-field="address1" data-autocomplete-field-container="true" class="field field--required">
                                                        <label class="field__label" for="checkout_shipping_address_address1">Address</label>
                                                        <div class="field__input-wrapper">
                                                            <input placeholder="Address" autocomplete="shipping address-line1" autocorrect="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-required="true" data-backup="address1" data-autocomplete-trigger="true" data-autocomplete-title="Suggestions" data-autocomplete-single-item="1 item available" data-autocomplete-multi-item="{{number}} items available" data-autocomplete-item-selection="{{number}} of {{total}}" data-autocomplete-close="Close suggestions" class="field__input" size="30" type="text" value="1 Campus Dr" name="checkout[shipping_address][address1]" id="checkout_shipping_address_address1" />
                                                            <p class="field__additional-info visually-hidden" data-address-civic-number-warning>
                                                                <svg class="icon-svg icon-svg--size-16 field__message__icon" aria-hidden="true" focusable="false">
                                                                    <use xlink:href="#info" />
                                                                </svg> Add a house number if you have one
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div data-address-field="address2" data-autocomplete-field-container="true" class="field field--optional">
                                                        <label class="field__label" for="checkout_shipping_address_address2">Apartment, suite, etc. (optional)</label>
                                                        <div class="field__input-wrapper">
                                                            <input placeholder="Apartment, suite, etc. (optional)" autocomplete="shipping address-line2" autocorrect="off" data-backup="address2" class="field__input" size="30" type="text" value="" name="checkout[shipping_address][address2]" id="checkout_shipping_address_address2" />
                                                        </div>
                                                    </div>
                                                    <div data-address-field="city" data-autocomplete-field-container="true" class="field field--required">
                                                        <label class="field__label" for="checkout_shipping_address_city">City</label>
                                                        <div class="field__input-wrapper">
                                                            <input placeholder="City" autocomplete="shipping address-level2" autocorrect="off" data-backup="city" class="field__input" aria-required="true" size="30" type="text" value="Parsippany" name="checkout[shipping_address][city]" id="checkout_shipping_address_city" />
                                                        </div>
                                                    </div>
                                                    <div class="field--third field field--required" data-address-field="country" data-autocomplete-field-container="true">
                                                        <label class="field__label" for="checkout_shipping_address_country">Country/region</label>
                                                        <div class="field__input-wrapper field__input-wrapper--select">
                                                            <select size="1" autocomplete="shipping country" data-backup="country" class="field__input field__input--select" aria-required="true" name="checkout[shipping_address][country]" id="checkout_shipping_address_country">
                                                                <option data-code="US" data-only-numeric-postal-code="true" selected="selected" value="United States">United States</option>
                                                                <option data-code="CA" data-only-numeric-postal-code="false" value="Canada">Canada</option>
                                                                <option data-code="GB" data-only-numeric-postal-code="false" value="United Kingdom">United Kingdom</option>
                                                                <option data-code="NL" data-only-numeric-postal-code="false" value="Netherlands">Netherlands</option>
                                                                <option data-code="ES" data-only-numeric-postal-code="true" value="Spain">Spain</option>
                                                                <option disabled="disabled" value="---">---</option>
                                                                <option data-code="AR" data-only-numeric-postal-code="false" value="Argentina">Argentina</option>
                                                                <option data-code="AU" data-only-numeric-postal-code="true" value="Australia">Australia</option>
                                                                <option data-code="AT" data-only-numeric-postal-code="true" value="Austria">Austria</option>
                                                                <option data-code="BH" data-only-numeric-postal-code="true" value="Bahrain">Bahrain</option>
                                                                <option data-code="BE" data-only-numeric-postal-code="true" value="Belgium">Belgium</option>
                                                                <option data-code="BZ" data-only-numeric-postal-code="false" value="Belize">Belize</option>
                                                                <option data-code="BO" data-only-numeric-postal-code="false" value="Bolivia">Bolivia</option>
                                                                <option data-code="BR" data-only-numeric-postal-code="true" value="Brazil">Brazil</option>
                                                                <option data-code="BG" data-only-numeric-postal-code="true" value="Bulgaria">Bulgaria</option>
                                                                <option data-code="CA" data-only-numeric-postal-code="false" value="Canada">Canada</option>
                                                                <option data-code="CL" data-only-numeric-postal-code="true" value="Chile">Chile</option>
                                                                <option data-code="CN" data-only-numeric-postal-code="true" value="China">China</option>
                                                                <option data-code="CO" data-only-numeric-postal-code="true" value="Colombia">Colombia</option>
                                                                <option data-code="CR" data-only-numeric-postal-code="true" value="Costa Rica">Costa Rica</option>
                                                                <option data-code="CY" data-only-numeric-postal-code="true" value="Cyprus">Cyprus</option>
                                                                <option data-code="CZ" data-only-numeric-postal-code="true" value="Czech Republic">Czechia</option>
                                                                <option data-code="DK" data-only-numeric-postal-code="true" value="Denmark">Denmark</option>
                                                                <option data-code="EC" data-only-numeric-postal-code="true" value="Ecuador">Ecuador</option>
                                                                <option data-code="EG" data-only-numeric-postal-code="true" value="Egypt">Egypt</option>
                                                                <option data-code="SV" data-only-numeric-postal-code="true" value="El Salvador">El Salvador</option>
                                                                <option data-code="EE" data-only-numeric-postal-code="true" value="Estonia">Estonia</option>
                                                                <option data-code="FI" data-only-numeric-postal-code="true" value="Finland">Finland</option>
                                                                <option data-code="FR" data-only-numeric-postal-code="true" value="France">France</option>
                                                                <option data-code="GF" data-only-numeric-postal-code="true" value="French Guiana">French Guiana</option>
                                                                <option data-code="DE" data-only-numeric-postal-code="true" value="Germany">Germany</option>
                                                                <option data-code="GR" data-only-numeric-postal-code="true" value="Greece">Greece</option>
                                                                <option data-code="GL" data-only-numeric-postal-code="true" value="Greenland">Greenland</option>
                                                                <option data-code="GT" data-only-numeric-postal-code="true" value="Guatemala">Guatemala</option>
                                                                <option data-code="GY" data-only-numeric-postal-code="false" value="Guyana">Guyana</option>
                                                                <option data-code="HN" data-only-numeric-postal-code="false" value="Honduras">Honduras</option>
                                                                <option data-code="HK" data-only-numeric-postal-code="false" value="Hong Kong">Hong Kong SAR</option>
                                                                <option data-code="HU" data-only-numeric-postal-code="true" value="Hungary">Hungary</option>
                                                                <option data-code="IS" data-only-numeric-postal-code="true" value="Iceland">Iceland</option>
                                                                <option data-code="IN" data-only-numeric-postal-code="true" value="India">India</option>
                                                                <option data-code="ID" data-only-numeric-postal-code="true" value="Indonesia">Indonesia</option>
                                                                <option data-code="IE" data-only-numeric-postal-code="false" value="Ireland">Ireland</option>
                                                                <option data-code="IL" data-only-numeric-postal-code="true" value="Israel">Israel</option>
                                                                <option data-code="IT" data-only-numeric-postal-code="true" value="Italy">Italy</option>
                                                                <option data-code="JP" data-only-numeric-postal-code="true" value="Japan">Japan</option>
                                                                <option data-code="JO" data-only-numeric-postal-code="true" value="Jordan">Jordan</option>
                                                                <option data-code="LV" data-only-numeric-postal-code="true" value="Latvia">Latvia</option>
                                                                <option data-code="LB" data-only-numeric-postal-code="true" value="Lebanon">Lebanon</option>
                                                                <option data-code="LT" data-only-numeric-postal-code="true" value="Lithuania">Lithuania</option>
                                                                <option data-code="LU" data-only-numeric-postal-code="true" value="Luxembourg">Luxembourg</option>
                                                                <option data-code="MY" data-only-numeric-postal-code="true" value="Malaysia">Malaysia</option>
                                                                <option data-code="MX" data-only-numeric-postal-code="true" value="Mexico">Mexico</option>
                                                                <option data-code="MC" data-only-numeric-postal-code="true" value="Monaco">Monaco</option>
                                                                <option data-code="NL" data-only-numeric-postal-code="false" value="Netherlands">Netherlands</option>
                                                                <option data-code="NZ" data-only-numeric-postal-code="true" value="New Zealand">New Zealand</option>
                                                                <option data-code="NI" data-only-numeric-postal-code="true" value="Nicaragua">Nicaragua</option>
                                                                <option data-code="NO" data-only-numeric-postal-code="true" value="Norway">Norway</option>
                                                                <option data-code="OM" data-only-numeric-postal-code="true" value="Oman">Oman</option>
                                                                <option data-code="PA" data-only-numeric-postal-code="true" value="Panama">Panama</option>
                                                                <option data-code="PY" data-only-numeric-postal-code="true" value="Paraguay">Paraguay</option>
                                                                <option data-code="PE" data-only-numeric-postal-code="false" value="Peru">Peru</option>
                                                                <option data-code="PH" data-only-numeric-postal-code="true" value="Philippines">Philippines</option>
                                                                <option data-code="PL" data-only-numeric-postal-code="true" value="Poland">Poland</option>
                                                                <option data-code="PT" data-only-numeric-postal-code="true" value="Portugal">Portugal</option>
                                                                <option data-code="QA" data-only-numeric-postal-code="false" value="Qatar">Qatar</option>
                                                                <option data-code="RO" data-only-numeric-postal-code="true" value="Romania">Romania</option>
                                                                <option data-code="SA" data-only-numeric-postal-code="true" value="Saudi Arabia">Saudi Arabia</option>
                                                                <option data-code="SG" data-only-numeric-postal-code="true" value="Singapore">Singapore</option>
                                                                <option data-code="SK" data-only-numeric-postal-code="true" value="Slovakia">Slovakia</option>
                                                                <option data-code="SI" data-only-numeric-postal-code="true" value="Slovenia">Slovenia</option>
                                                                <option data-code="ZA" data-only-numeric-postal-code="true" value="South Africa">South Africa</option>
                                                                <option data-code="KR" data-only-numeric-postal-code="true" value="South Korea">South Korea</option>
                                                                <option data-code="ES" data-only-numeric-postal-code="true" value="Spain">Spain</option>
                                                                <option data-code="SR" data-only-numeric-postal-code="false" value="Suriname">Suriname</option>
                                                                <option data-code="SE" data-only-numeric-postal-code="true" value="Sweden">Sweden</option>
                                                                <option data-code="CH" data-only-numeric-postal-code="true" value="Switzerland">Switzerland</option>
                                                                <option data-code="TW" data-only-numeric-postal-code="true" value="Taiwan">Taiwan</option>
                                                                <option data-code="TH" data-only-numeric-postal-code="true" value="Thailand">Thailand</option>
                                                                <option data-code="TR" data-only-numeric-postal-code="true" value="Turkey">Turkey</option>
                                                                <option data-code="AE" data-only-numeric-postal-code="false" value="United Arab Emirates">United Arab Emirates</option>
                                                                <option data-code="GB" data-only-numeric-postal-code="false" value="United Kingdom">United Kingdom</option>
                                                                <option data-code="US" data-only-numeric-postal-code="true" value="United States">United States</option>
                                                                <option data-code="UY" data-only-numeric-postal-code="true" value="Uruguay">Uruguay</option>
                                                                <option data-code="VE" data-only-numeric-postal-code="false" value="Venezuela">Venezuela</option>
                                                                <option data-code="VN" data-only-numeric-postal-code="true" value="Vietnam">Vietnam</option>
                                                                <option data-code="YE" data-only-numeric-postal-code="false" value="Yemen">Yemen</option>
                                                            </select>
                                                            <div class="field__caret">
                                                                <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg" role="presentation" aria-hidden="true" focusable="false">
                                                                    <use xlink:href="#caret-down" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="field--third field field--required" data-address-field="province" data-autocomplete-field-container="true">
                                                        <label class="field__label" for="checkout_shipping_address_province">Region</label>
                                                        <div class="field__input-wrapper field__input-wrapper--select">
                                                            <input placeholder="Region" autocomplete="shipping address-level1" autocorrect="off" value="NJ" data-backup="province" class="field__input" aria-required="true" type="text" name="checkout[shipping_address][province]" id="checkout_shipping_address_province" />
                                                            <div class="field__caret shown-if-js">
                                                                <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg" role="presentation" aria-hidden="true" focusable="false">
                                                                    <use xlink:href="#caret-down" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="field--third field field--required" data-address-field="zip" data-autocomplete-field-container="true">
                                                        <label class="field__label" for="checkout_shipping_address_zip">Postal code</label>
                                                        <div class="field__input-wrapper">
                                                            <input placeholder="Postal code" autocomplete="shipping postal-code" autocorrect="off" data-backup="zip" data-autocomplete-trigger="true" data-autocomplete-title="Suggestions" data-autocomplete-single-item="1 item available" data-autocomplete-multi-item="{{number}} items available" data-autocomplete-item-selection="{{number}} of {{total}}" data-autocomplete-close="Close suggestions" class="field__input field__input--zip" aria-required="true" size="30" type="text" value="07054" name="checkout[shipping_address][zip]" id="checkout_shipping_address_zip" />
                                                        </div>
                                                    </div>
                                                    <div data-address-field="phone" class="field field--required">
                                                        <label class="field__label" for="checkout_shipping_address_phone">Phone</label>
                                                        <div class="field__input-wrapper field__input-wrapper--icon-right">
                                                            <input placeholder="Phone" autocomplete="shipping tel" autocorrect="off" data-backup="phone" data-phone-formatter="true" data-phone-formatter-country-select="[name=&#39;checkout[shipping_address][country]&#39;]" data-placeholder-label-required="Phone" data-placeholder-label-optional="Phone (optional)" class="field__input field__input--numeric" aria-required="true" size="30" type="tel" value="8623215531" name="checkout[shipping_address][phone]" id="checkout_shipping_address_phone" />
                                                            <div class="field__icon">
                                                                <div data-tooltip="true" id="phone_tooltip" class="tooltip-container">
                                                                    <button type="button" class="tooltip-control" data-tooltip-control="true" aria-label="More information" aria-describedby="tooltip-for-phone" aria-controls="tooltip-for-phone" aria-pressed="false">
                                                                        <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-16 icon-svg--block icon-svg--center" role="presentation" aria-hidden="true" focusable="false">
                                                                            <use xlink:href="#question" />
                                                                        </svg>
                                                                    </button>
                                                                    <span class="tooltip" role="tooltip" id="tooltip-for-phone">In case we need to contact you about your order</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="section">
                                        <div class="section__content">
                                            <div class="fieldset">
                                                <div class="field field--required">
                                                    <script>
                                                        //
                                                        < ![CDATA[var onCaptchaSuccess = function() {
                                                                    var event;
                                                                    try {
                                                                        event = new Event('captchaSuccess', {
                                                                            bubbles: true,
                                                                            cancelable: true
                                                                        });
                                                                    } catch (e) {
                                                                        event = document.createEvent('Event');
                                                                        event.initEvent('captchaSuccess', true, true);
                                                                    }
                                                                    window.dispatchEvent(event);
                                                                }
                                                                //]]>
                                                    </script>
                                                    <script>
                                                        //
                                                        < ![CDATA[window.addEventListener('captchaSuccess', function() {
                                                                    var responseInput = document.querySelector('.g-recaptcha-response');
                                                                    var submitButton = document.querySelector('.dialog-submit');
                                                                    if (submitButton instanceof HTMLElement) {
                                                                        var needResponse = (responseInput instanceof HTMLElement);
                                                                        var responseValueMissing = !responseInput.value;
                                                                        submitButton.disabled = (needResponse && responseValueMissing);
                                                                    }
                                                                }, false);
                                                                //]]>
                                                    </script>
                                                    <script>
                                                        //
                                                        < ![CDATA[var recaptchaCallback = function() {
                                                                    grecaptcha.render('g-recaptcha', {
                                                                        sitekey: "6LeoeSkTAAAAAA9rkZs5oS82l69OEYjKRZAiKdaF",
                                                                        size: (window.innerWidth > 320) ? 'normal' : 'compact',
                                                                        callback: 'onCaptchaSuccess',
                                                                        s: 'BpKpamzwU3ivWPsNi8mD0LDqCCaBHWmNtFKUs3gXBbcUml95SsM-sSFs5ged2bujL5X__SYsuXd6WXEpt6EAzAY6iPtgdYYb6JVvT4wVIcGrcjaV36KwA19p0YVbsFZtkmTwxAazAi30zLeIGUsFeFHu0GidLiuLGQP1NWQGK7Imo4pUqGKbHFEONrSq1k2fzmvQmEdLmlpBx9w8hdy23yZK_OSc39MwAxhMzVPtmO8Vw5mM_MqdRoDcpFkdeVbpPAY8dJSgRdrFqVw888Xl2WbmheFKXsqeXVA9BKrnfhnj-f6TF9Q8rWQD9PZA2FonuaTUgg9ia5Mx55UFsCqqxA-kTN9RZ6-o8rodJ0AyPkfLjyezJvvUqX9j9ED7CwIW8FSEmKH0XUHHa3_lfzRTFRxv_h6B',
                                                                    });
                                                                };
                                                                //]]>
                                                    </script>
                                                    <script src="https://www.recaptcha.net/recaptcha/api.js?onload=recaptchaCallback&amp;render=6LcCR2cUAAAAANS1Gpq_mDIJ2pQuJphsSQaUEuc9&amp;hl=en" async="async">
                                                        //
                                                        < ![CDATA[
                                                                //]]>
                                                    </script>
                                                    <noscript>
                                                        <div class="g-recaptcha-nojs">
                                                            <iframe class="g-recaptcha-nojs__iframe" frameborder="0" scrolling="no" src="https://www.google.com/recaptcha/api/fallback?k=6LeoeSkTAAAAAA9rkZs5oS82l69OEYjKRZAiKdaF"></iframe>
                                                            <div class="g-recaptcha-nojs__input-wrapper">
                                                                <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-nojs__input"></textarea>
                                                            </div>
                                                        </div>
                                                    </noscript>
                                                    <div id="g-recaptcha" class="g-recaptcha"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="step__footer" data-step-footer>
                                    <button name="button" type="submit" id="continue_button" class="step__footer__continue-btn btn" aria-busy="false">
                                        <span class="btn__content" data-continue-button-content="true">Continue to shipping</span>
                                        <svg class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button" aria-hidden="true" focusable="false">
                                            <use xlink:href="#spinner-button" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="hidden">
                            <span class="visually-hidden" id="forwarding-external-new-window-message"> Opens external website in a new window. </span>
                            <span class="visually-hidden" id="forwarding-new-window-message"> Opens in a new window. </span>
                            <span class="visually-hidden" id="forwarding-external-message"> Opens external website. </span>
                            <span class="visually-hidden" id="checkout-context-step-one"> Customer information - Kith - Checkout </span>
                        </div>
                    </div>
                    <div class="main__footer">
                        <ul class="policy-list" role="list">
                            <li class="policy-list__item ">
                                <a aria-haspopup="dialog" data-modal="policy-refund-policy" data-title-text="Refund policy" data-close-text="Close" data-iframe="true" href="/942252/policies/refund-policy.html?locale=en">Refund policy</a>
                            </li>
                            <li class="policy-list__item ">
                                <a aria-haspopup="dialog" data-modal="policy-terms-of-service" data-title-text="Terms of service" data-close-text="Close" data-iframe="true" href="/942252/policies/terms-of-service.html?locale=en">Terms of service</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sidebar" role="complementary">
                    <div class="sidebar__header">
                        <a class="logo logo--left" href="https://kith.com/">
                            <img alt="Kith" class="logo__image logo__image--small" src="//cdn.shopify.com/s/files/1/0094/2252/files/logo_863a28b5-bea8-4f3a-8e94-68a6fbff0990.png?160000" />
                        </a>
                        <h1 class="visually-hidden"> Information </h1>
                    </div>
                    <div class="sidebar__content">
                        <div id="order-summary" class="order-summary order-summary--is-collapsed" data-order-summary>
                            <h2 class="visually-hidden-if-js">Order summary</h2>
                            <div class="order-summary__sections">
                                <div class="order-summary__section order-summary__section--product-list">
                                    <div class="order-summary__section__content">
                                        <table class="product-table">
                                            <caption class="visually-hidden">Shopping cart</caption>
                                            <thead class="product-table__header">
                                                <tr>
                                                    <th scope="col">
                                                        <span class="visually-hidden">Product image</span>
                                                    </th>
                                                    <th scope="col">
                                                        <span class="visually-hidden">Description</span>
                                                    </th>
                                                    <th scope="col">
                                                        <span class="visually-hidden">Quantity</span>
                                                    </th>
                                                    <th scope="col">
                                                        <span class="visually-hidden">Price</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody data-order-summary-section="line-items">
                                                <tr class="product" data-product-id="6535663747200" data-variant-id="39251846004864" data-product-type="Tees" data-customer-ready-visible>
                                                    <td class="product__image">
                                                        <div class="product-thumbnail ">
                                                            <div class="product-thumbnail__wrapper">
                                                                <img alt="Kith For The Wire Omar Vintage Tee - Black - M" class="product-thumbnail__image" src="//cdn.shopify.com/s/files/1/0094/2252/products/KHM030506-001-FRONT_small.jpg?v=1654262327" />
                                                            </div>
                                                            <span class="product-thumbnail__quantity" aria-hidden="true">1</span>
                                                        </div>
                                                    </td>
                                                    <th class="product__description" scope="row">
                                                        <span class="product__description__name order-summary__emphasis">Kith For The Wire Omar Vintage Tee - Black</span>
                                                        <span class="product__description__variant order-summary__small-text">M</span>
                                                    </th>
                                                    <td class="product__quantity">
                                                        <span class="visually-hidden"> 1 </span>
                                                    </td>
                                                    <td class="product__price">
                                                        <span class="order-summary__emphasis skeleton-while-loading">$70.00</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="order-summary__scroll-indicator" aria-hidden="true" tabindex="-1" id="order-summary__scroll-indicator"> Scroll for more items <svg aria-hidden="true" focusable="false" class="icon-svg icon-svg--size-12">
                                                <use xlink:href="#down-arrow" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-summary__section order-summary__section--discount" data-reduction-form="update">
                                    <h3 class="visually-hidden">Gift card or discount code</h3>
                                    <form class="edit_checkout" action="/942252/checkouts/deb5623924abf274112f3b6238f29973" accept-charset="UTF-8" method="post">
                                        <input type="hidden" name="_method" value="patch" autocomplete="off" />
                                        <input type="hidden" name="authenticity_token" value="2ybHjkACEJ6FLEbyoaqqa7IlMHaxvLNkFW6I09tMgzbLda3CxIblqQNBwo-3hyH1WVVH40QwdmhjiqT1FYIS9A" autocomplete="off" />
                                        <input type="hidden" name="step" value="contact_information" autocomplete="off" />
                                    </form>
                                    <form class="edit_checkout" action="/942252/checkouts/deb5623924abf274112f3b6238f29973" accept-charset="UTF-8" method="post">
                                        <input type="hidden" name="_method" value="patch" autocomplete="off" />
                                        <input type="hidden" name="authenticity_token" value="5MmY9m7qg_s-WPjE2X0j-zYLr4kn8bJsHtoi_ZdrHrr0mvK66m52zLg1fLnPUKhl3XvYHNJ9d2BoPg7bWaWPeA" autocomplete="off" />
                                        <input type="hidden" name="step" value="contact_information" autocomplete="off" />
                                        <div class="fieldset">
                                            <div class="field ">
                                                <label class="field__label" for="checkout_reduction_code">Gift card or discount code</label>
                                                <div class="field__input-btn-wrapper">
                                                    <div class="field__input-wrapper">
                                                        <input placeholder="Gift card or discount code" class="field__input" id="checkout_reduction_code" data-discount-field="true" autocomplete="off" aria-required="true" size="30" type="text" name="checkout[reduction_code]" />
                                                    </div>
                                                    <button name="checkout[submit]" type="submit" id="checkout_submit" class="field__input-btn btn btn--disabled" aria-busy="false">
                                                        <span class="btn__content visually-hidden-on-mobile" aria-hidden="true"> Apply </span>
                                                        <span class="visually-hidden"> Apply Discount Code </span>
                                                        <svg class="icon-svg icon-svg--size-16 btn__icon shown-on-mobile" aria-hidden="true" focusable="false">
                                                            <use xlink:href="#arrow" />
                                                        </svg>
                                                        <svg class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button" aria-hidden="true" focusable="false">
                                                            <use xlink:href="#spinner-button" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="order-summary__section order-summary__section--total-lines" data-order-summary-section="payment-lines">
                                    <table class="total-line-table">
                                        <caption class="visually-hidden">Cost summary</caption>
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <span class="visually-hidden">Description</span>
                                                </th>
                                                <th scope="col">
                                                    <span class="visually-hidden">Price</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="total-line-table__tbody">
                                            <tr class="total-line total-line--subtotal">
                                                <th class="total-line__name" scope="row">Subtotal</th>
                                                <td class="total-line__price">
                                                    <span class="order-summary__emphasis skeleton-while-loading" data-checkout-subtotal-price-target="7000"> $70.00 </span>
                                                </td>
                                            </tr>
                                            <tr class="total-line total-line--shipping">
                                                <th class="total-line__name" scope="row">
                                                    <span> Shipping </span>
                                                </th>
                                                <td class="total-line__price">
                                                    <span class="skeleton-while-loading order-summary__emphasis" data-checkout-total-shipping-target="1000"> $10.00 </span>
                                                </td>
                                            </tr>
                                            <tr class="total-line total-line--taxes hidden" data-checkout-taxes>
                                                <th class="total-line__name" scope="row">Estimated taxes</th>
                                                <td class="total-line__price">
                                                    <span class="order-summary__emphasis skeleton-while-loading" data-checkout-total-taxes-target="0">$0.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="total-line-table__footer">
                                            <tr class="total-line">
                                                <th class="total-line__name payment-due-label" scope="row">
                                                    <span class="payment-due-label__total">Total</span>
                                                </th>
                                                <td class="total-line__price payment-due" data-presentment-currency="USD">
                                                    <span class="payment-due__currency remove-while-loading">USD</span>
                                                    <span class="payment-due__price skeleton-while-loading--lg" data-checkout-payment-due-target="8000"> $80.00 </span>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="visually-hidden" data-order-summary-section="accessibility-live-region">
                            <div aria-live="polite" aria-atomic="true" role="status"> Updated total price: <span data-checkout-payment-due-target="8000"> $80.00 </span>
                            </div>
                        </div>
                        <div id="partial-icon-symbols" class="icon-symbols" data-tg-refresh="partial-icon-symbols" data-tg-refresh-always="true">
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <symbol id="info">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12 11h1v7h-2v-5c-.552 0-1-.448-1-1s.448-1 1-1h1zm0 13C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10.5 7.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z" />
                                    </svg>
                                </symbol>
                                <symbol id="caret-down">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                                        <path d="M0 3h10L5 8" fill-rule="nonzero" />
                                    </svg>
                                </symbol>
                                <symbol id="question">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm.7 13H6.8v-2h1.9v2zm2.6-7.1c0 1.8-1.3 2.6-2.8 2.8l-.1 1.1H7.3L7 7.5l.1-.1c1.8-.1 2.6-.6 2.6-1.6 0-.8-.6-1.3-1.6-1.3-.9 0-1.6.4-2.3 1.1L4.7 4.5c.8-.9 1.9-1.6 3.4-1.6 1.9.1 3.2 1.2 3.2 3z" />
                                    </svg>
                                </symbol>
                                <symbol id="powered-by-google">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 15">
                                        <path fill="#737373" d="M4.025 3.572c1.612 0 2.655 1.283 2.655 3.27 0 1.974-1.05 3.27-2.655 3.27-.902 0-1.63-.393-1.974-1.06h-.09v3.057H.95V3.68h.96v1.054h.094c.404-.726 1.16-1.166 2.02-1.166zm-.24 5.63c1.16 0 1.852-.884 1.852-2.36 0-1.477-.692-2.362-1.846-2.362-1.14 0-1.86.91-1.86 2.362 0 1.447.72 2.36 1.857 2.36zm7.072.91c-1.798 0-2.912-1.243-2.912-3.27 0-2.033 1.114-3.27 2.912-3.27 1.8 0 2.913 1.237 2.913 3.27 0 2.027-1.114 3.27-2.913 3.27zm0-.91c1.196 0 1.87-.866 1.87-2.36 0-1.5-.674-2.362-1.87-2.362-1.195 0-1.87.862-1.87 2.362 0 1.494.675 2.36 1.87 2.36zm12.206-5.518H22.05l-1.244 5.05h-.094L19.3 3.684h-.966l-1.412 5.05h-.094l-1.242-5.05h-1.02L16.336 10h1.02l1.406-4.887h.093L20.268 10h1.025l1.77-6.316zm3.632.78c-1.008 0-1.71.737-1.787 1.856h3.48c-.023-1.12-.69-1.857-1.693-1.857zm1.664 3.9h1.005c-.305 1.085-1.277 1.747-2.66 1.747-1.752 0-2.848-1.262-2.848-3.26 0-1.987 1.113-3.276 2.847-3.276 1.705 0 2.742 1.213 2.742 3.176v.386h-4.542v.047c.053 1.248.75 2.04 1.822 2.04.815 0 1.366-.3 1.63-.857zM31.03 10h1.01V6.086c0-.89.696-1.535 1.657-1.535.2 0 .563.038.645.06V3.6c-.13-.018-.34-.03-.504-.03-.838 0-1.565.434-1.752 1.05h-.094v-.938h-.96V10zm6.915-5.537c-1.008 0-1.71.738-1.787 1.857h3.48c-.023-1.12-.69-1.857-1.693-1.857zm1.664 3.902h1.005c-.304 1.084-1.277 1.746-2.66 1.746-1.752 0-2.848-1.262-2.848-3.26 0-1.987 1.113-3.276 2.847-3.276 1.705 0 2.742 1.213 2.742 3.176v.386h-4.542v.047c.053 1.248.75 2.04 1.822 2.04.815 0 1.366-.3 1.63-.857zm5.01 1.746c-1.62 0-2.657-1.28-2.657-3.266 0-1.98 1.05-3.27 2.654-3.27.878 0 1.622.416 1.98 1.108h.087V1.177h1.008V10h-.96V8.992h-.094c-.4.703-1.15 1.12-2.02 1.12zm.232-5.63c-1.15 0-1.846.89-1.846 2.364 0 1.476.69 2.36 1.846 2.36 1.148 0 1.857-.9 1.857-2.36 0-1.447-.715-2.362-1.857-2.362zm7.875-3.115h1.024v3.123c.23-.3.507-.53.827-.688.32-.16.668-.238 1.043-.238.78 0 1.416.27 1.9.806.49.537.73 1.33.73 2.376 0 .992-.24 1.817-.72 2.473-.48.656-1.145.984-1.997.984-.476 0-.88-.114-1.207-.344-.195-.137-.404-.356-.627-.657v.8h-.97V1.363zm4.02 7.225c.284-.454.426-1.05.426-1.794 0-.66-.142-1.207-.425-1.64-.283-.434-.7-.65-1.25-.65-.48 0-.9.177-1.264.532-.36.356-.542.942-.542 1.758 0 .59.075 1.068.223 1.435.277.694.795 1.04 1.553 1.04.57 0 .998-.227 1.28-.68zM63.4 3.726h1.167c-.148.402-.478 1.32-.99 2.754-.383 1.077-.703 1.956-.96 2.635-.61 1.602-1.04 2.578-1.29 2.93-.25.35-.68.527-1.29.527-.147 0-.262-.006-.342-.017-.08-.012-.178-.034-.296-.065v-.96c.183.05.316.08.4.093.08.012.152.018.215.018.195 0 .338-.03.43-.094.092-.065.17-.144.232-.237.02-.033.09-.193.21-.48.122-.29.21-.506.264-.646l-2.32-6.457h1.196l1.68 5.11 1.694-5.11zM73.994 5.282V6.87h3.814c-.117.89-.416 1.54-.87 1.998-.557.555-1.427 1.16-2.944 1.16-2.35 0-4.184-1.882-4.184-4.217 0-2.332 1.835-4.215 4.184-4.215 1.264 0 2.192.497 2.873 1.135l1.122-1.117C77.04.697 75.77 0 73.99 0c-3.218 0-5.923 2.606-5.923 5.805 0 3.2 2.705 5.804 5.923 5.804 1.738 0 3.048-.57 4.073-1.628 1.05-1.045 1.382-2.522 1.382-3.71 0-.366-.028-.708-.087-.992h-5.37zm10.222-1.29c-2.082 0-3.78 1.574-3.78 3.748 0 2.154 1.698 3.747 3.78 3.747S87.998 9.9 87.998 7.74c0-2.174-1.7-3.748-3.782-3.748zm0 6.018c-1.14 0-2.127-.935-2.127-2.27 0-1.348.983-2.27 2.124-2.27 1.142 0 2.128.922 2.128 2.27 0 1.335-.986 2.27-2.128 2.27zm18.54-5.18h-.06c-.37-.438-1.083-.838-1.985-.838-1.88 0-3.52 1.632-3.52 3.748 0 2.102 1.64 3.747 3.52 3.747.905 0 1.618-.4 1.988-.852h.06v.523c0 1.432-.773 2.2-2.012 2.2-1.012 0-1.64-.723-1.9-1.336l-1.44.593c.414.994 1.51 2.213 3.34 2.213 1.94 0 3.58-1.135 3.58-3.902v-6.74h-1.57v.645zm-1.9 5.18c-1.144 0-2.013-.968-2.013-2.27 0-1.323.87-2.27 2.01-2.27 1.13 0 2.012.967 2.012 2.282.006 1.31-.882 2.258-2.01 2.258zM92.65 3.992c-2.084 0-3.783 1.574-3.783 3.748 0 2.154 1.7 3.747 3.782 3.747 2.08 0 3.78-1.587 3.78-3.747 0-2.174-1.7-3.748-3.78-3.748zm0 6.018c-1.143 0-2.13-.935-2.13-2.27 0-1.348.987-2.27 2.13-2.27 1.14 0 2.126.922 2.126 2.27 0 1.335-.986 2.27-2.127 2.27zM105.622.155h1.628v11.332h-1.628m6.655-1.477c-.843 0-1.44-.38-1.83-1.135l5.04-2.07-.168-.426c-.314-.84-1.274-2.39-3.227-2.39-1.94 0-3.554 1.516-3.554 3.75 0 2.1 1.595 3.745 3.736 3.745 1.725 0 2.724-1.05 3.14-1.658l-1.285-.852c-.427.62-1.01 1.032-1.854 1.032zm-.117-4.612c.668 0 1.24.342 1.427.826l-3.405 1.4c0-1.574 1.122-2.226 1.978-2.226z" />
                                    </svg>
                                </symbol>
                                <symbol id="close">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M15.1 2.3L13.7.9 8 6.6 2.3.9.9 2.3 6.6 8 .9 13.7l1.4 1.4L8 9.4l5.7 5.7 1.4-1.4L9.4 8" />
                                    </svg>
                                </symbol>
                                <symbol id="spinner-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0v2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8h2z" />
                                    </svg>
                                </symbol>
                                <symbol id="chevron-right">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                                        <path d="M2 1l1-1 4 4 1 1-1 1-4 4-1-1 4-4" />
                                    </svg>
                                </symbol>
                                <symbol id="down-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                                        <path d="M10.817 7.624l-4.375 4.2c-.245.235-.64.235-.884 0l-4.375-4.2c-.244-.234-.244-.614 0-.848.245-.235.64-.235.884 0L5.375 9.95V.6c0-.332.28-.6.625-.6s.625.268.625.6v9.35l3.308-3.174c.122-.117.282-.176.442-.176.16 0 .32.06.442.176.244.234.244.614 0 .848" />
                                    </svg>
                                </symbol>
                                <symbol id="arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="M16 8.1l-8.1 8.1-1.1-1.1L13 8.9H0V7.3h13L6.8 1.1 7.9 0 16 8.1z" />
                                    </svg>
                                </symbol>
                                <symbol id="mobile-phone">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M5 2.99C5 1.34 6.342 0 8.003 0h7.994C17.655 0 19 1.342 19 2.99v18.02c0 1.65-1.342 2.99-3.003 2.99H8.003C6.345 24 5 22.658 5 21.01V2.99zM7 5c0-.552.456-1 .995-1h8.01c.55 0 .995.445.995 1v14c0 .552-.456 1-.995 1h-8.01C7.445 20 7 19.555 7 19V5zm5 18c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" fill-rule="evenodd" />
                                    </svg>
                                </symbol>
                                <symbol id="spinner-small">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0v2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14h2z" />
                                    </svg>
                                </symbol>
                            </svg>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        <link href="https://monorail-edge.shopifysvc.com" rel="dns-prefetch">
        <script>
            window.ShopifyAnalytics = window.ShopifyAnalytics || {};
            window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
            window.ShopifyAnalytics.meta.currency = 'USD';
            var meta = {
                "page": {
                    "path": "\/checkout\/contact_information",
                    "search": "",
                    "url": "https:\/\/kith.com\/942252\/checkouts\/deb5623924abf274112f3b6238f29973?key=b34010ace95d1b4c0307017db9cf5d60"
                }
            };
            for (var attr in meta) {
                window.ShopifyAnalytics.meta[attr] = meta[attr];
            }
        </script>
        <script>
            window.ShopifyAnalytics.merchantGoogleAnalytics = function() {
                document.body.addEventListener("GoogleAnalyticsEvent", function() {
                    window.GoogleAnalyticsAdditionalScripts.executeAdditionalScripts()
                });
                if (window.GoogleAnalyticsAdditionalScripts) {
                    window.GoogleAnalyticsAdditionalScripts.executeAdditionalScripts()
                }
            };
        </script>
        <script class="analytics">
            (window.gaDevIds = window.gaDevIds || []).push('BwiEti');
            (function() {
                var customDocumentWrite = function(content) {
                    var jquery = null;
                    if (window.jQuery) {
                        jquery = window.jQuery;
                    } else if (window.Checkout && window.Checkout.$) {
                        jquery = window.Checkout.$;
                    }
                    if (jquery) {
                        jquery('body').append(content);
                    }
                };
                var hasLoggedConversion = function(token) {
                    if (token) {
                        return document.cookie.indexOf('loggedConversion=' + token) !== -1;
                    }
                    return false;
                }
                var setCookieIfConversion = function(token) {
                    if (token) {
                        var twoMonthsFromNow = new Date(Date.now());
                        twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);
                        document.cookie = 'loggedConversion=' + token + '; expires=' + twoMonthsFromNow;
                    }
                }
                var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
                if (trekkie.integrations) {
                    return;
                }
                trekkie.methods = ['identify', 'page', 'ready', 'track', 'trackForm', 'trackLink'];
                trekkie.factory = function(method) {
                    return function() {
                        var args = Array.prototype.slice.call(arguments);
                        args.unshift(method);
                        trekkie.push(args);
                        return trekkie;
                    };
                };
                for (var i = 0; i < trekkie.methods.length; i++) {
                    var key = trekkie.methods[i];
                    trekkie[key] = trekkie.factory(key);
                }
                trekkie.load = function(config) {
                    trekkie.config = config || {};
                    trekkie.config.initialDocumentCookie = document.cookie;
                    var first = document.getElementsByTagName('script')[0];
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onerror = function(e) {
                        var scriptFallback = document.createElement('script');
                        scriptFallback.type = 'text/javascript';
                        scriptFallback.onerror = function(error) {
                            var Monorail = {
                                produce: function produce(monorailDomain, schemaId, payload) {
                                    var currentMs = new Date().getTime();
                                    var event = {
                                        schema_id: schemaId,
                                        payload: payload,
                                        metadata: {
                                            event_created_at_ms: currentMs,
                                            event_sent_at_ms: currentMs
                                        }
                                    };
                                    return Monorail.sendRequest("https://" + monorailDomain + "/v1/produce", JSON.stringify(event));
                                },
                                sendRequest: function sendRequest(endpointUrl, payload) {
                                    // Try the sendBeacon API
                                    if (window && window.navigator && typeof window.navigator.sendBeacon === 'function' && typeof window.Blob === 'function' && !Monorail.isIos12()) {
                                        var blobData = new window.Blob([payload], {
                                            type: 'text/plain'
                                        });
                                        if (window.navigator.sendBeacon(endpointUrl, blobData)) {
                                            return true;
                                        } // sendBeacon was not successful
                                    } // XHR beacon   
                                    var xhr = new XMLHttpRequest();
                                    try {
                                        xhr.open('POST', endpointUrl);
                                        xhr.setRequestHeader('Content-Type', 'text/plain');
                                        xhr.send(payload);
                                    } catch (e) {
                                        console.log(e);
                                    }
                                    return false;
                                },
                                isIos12: function isIos12() {
                                    return window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') !== -1 || window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_') !== -1;
                                }
                            };
                            Monorail.produce('monorail-edge.shopifysvc.com', 'trekkie_checkout_load_errors/1.1', {
                                shop_id: 942252,
                                theme_id: 131879764096,
                                app_name: "checkout",
                                context_url: window.location.href,
                                source_url: "https://cdn.shopify.com/s/trekkie.storefront.f08068c4f5630e7a16c822b35ad50b3b478a027c.min.js"
                            });
                        };
                        scriptFallback.async = true;
                        scriptFallback.src = 'https://cdn.shopify.com/s/trekkie.storefront.f08068c4f5630e7a16c822b35ad50b3b478a027c.min.js';
                        first.parentNode.insertBefore(scriptFallback, first);
                    };
                    script.async = true;
                    script.src = 'https://cdn.shopify.com/s/trekkie.storefront.f08068c4f5630e7a16c822b35ad50b3b478a027c.min.js';
                    first.parentNode.insertBefore(script, first);
                };
                trekkie.load({
                    "Trekkie": {
                        "appName": "checkout",
                        "development": false,
                        "defaultAttributes": {
                            "shopId": 942252,
                            "isMerchantRequest": null,
                            "themeId": 131879764096,
                            "themeCityHash": "10666828554490929271",
                            "contentLanguage": "en",
                            "currency": "USD",
                            "checkoutToken": "deb5623924abf274112f3b6238f29973"
                        },
                        "isServerSideCookieWritingEnabled": true,
                        "monorailRegion": "shop_domain"
                    },
                    "Google Analytics": {
                        "trackingId": "UA-62344036-1",
                        "domain": "auto",
                        "siteSpeedSampleRate": "10",
                        "enhancedEcommerce": true,
                        "doubleClick": true,
                        "includeSearch": true
                    },
                    "Facebook Pixel": {
                        "pixelIds": ["579423188930068"],
                        "agent": "plshopify1.2"
                    },
                    "Session Attribution": {},
                    "S2S": {
                        "facebookCapiEnabled": false,
                        "facebookAppPixelId": "579423188930068",
                        "source": "trekkie-checkout-classic"
                    }
                });
                var loaded = false;
                trekkie.ready(function() {
                    if (loaded) return;
                    loaded = true;
                    window.ShopifyAnalytics.lib = window.trekkie;
                    ga('require', 'linker');

                    function addListener(element, type, callback) {
                        if (element.addEventListener) {
                            element.addEventListener(type, callback);
                        } else if (element.attachEvent) {
                            element.attachEvent('on' + type, callback);
                        }
                    }

                    function decorate(event) {
                        event = event || window.event;
                        var target = event.target || event.srcElement;
                        if (target && (target.getAttribute('action') || target.getAttribute('href'))) {
                            ga(function(tracker) {
                                var linkerParam = tracker.get('linkerParam');
                                document.cookie = '_shopify_ga=' + linkerParam + '; ' + 'path=/';
                            });
                        }
                    }
                    addListener(window, 'load', function() {
                        for (var i = 0; i < document.forms.length; i++) {
                            var action = document.forms[i].getAttribute('action');
                            if (action && action.indexOf('/cart') >= 0) {
                                addListener(document.forms[i], 'submit', decorate);
                            }
                        }
                        for (var i = 0; i < document.links.length; i++) {
                            var href = document.links[i].getAttribute('href');
                            if (href && href.indexOf('/checkout') >= 0) {
                                addListener(document.links[i], 'click', decorate);
                            }
                        }
                    });
                    var originalDocumentWrite = document.write;
                    document.write = customDocumentWrite;
                    try {
                        window.ShopifyAnalytics.merchantGoogleAnalytics.call(this);
                    } catch (error) {};
                    document.write = originalDocumentWrite;
                    window.ShopifyAnalytics.lib.page("Checkout - Contact information", {
                        "path": "\/checkout\/contact_information",
                        "search": "",
                        "url": "https:\/\/kith.com\/942252\/checkouts\/deb5623924abf274112f3b6238f29973?key=b34010ace95d1b4c0307017db9cf5d60"
                    });
                    var match = window.location.pathname.match(/checkouts\/(.+)\/(thank_you|post_purchase)/)
                    var token = match ? match[1] : undefined;
                    if (!hasLoggedConversion(token)) {
                        setCookieIfConversion(token);
                        window.ShopifyAnalytics.lib.track("Started Order", {
                            "step": 1,
                            "products": [{
                                "variantId": 39251846004864,
                                "productId": 6535663747200,
                                "productGid": "gid:\/\/shopify\/Product\/6535663747200",
                                "category": "Tees",
                                "sku": "16260840",
                                "name": "Kith For The Wire Omar Vintage Tee - Black - M",
                                "price": "70.00",
                                "quantity": 1,
                                "brand": "Kith",
                                "variant": "M"
                            }],
                            "currency": "USD",
                            "revenue": "70.00"
                        });
                    }
                });
                var eventsListenerScript = document.createElement('script');
                eventsListenerScript.async = true;
                eventsListenerScript.src = "//cdn.shopify.com/shopifycloud/shopify/assets/shop_events_listener-65cd0ba3fcd81a1df33f2510ec5bcf8c0e0958653b50e3965ec972dd638ee13f.js";
                document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);
            })();
        </script>
        <script id="web-pixels-manager-setup">
            (function e(e, n, a, o, t) {
                e && (window.Shopify = window.Shopify || {}, window.Shopify.analytics = window.Shopify.analytics || {}, window.Shopify.analytics.replayQueue = [], window.Shopify.analytics.publish = function(e, n, a) {
                    window.Shopify.analytics.replayQueue.push([e, n, a])
                });
                var r, i, s, l, d, c, p, u, f = a + "/" + o + "." + function() {
                    var e = "legacy",
                        n = "unknown",
                        a = null,
                        o = navigator.userAgent.match(/(Firefox|Chrome)\/(\d+)/i),
                        t = navigator.userAgent.match(/(Edg)\/(\d+)/i),
                        r = navigator.userAgent.match(/(Version)\/(\d+)(.+)(Safari)\/(\d+)/i);
                    r ? (n = "safari", a = parseInt(r[2], 10)) : t ? (n = "edge", a = parseInt(t[2], 10)) : o && (n = o[1].toLocaleLowerCase(), a = parseInt(o[2], 10));
                    var i = {
                        chrome: 60,
                        firefox: 55,
                        safari: 11,
                        edge: 80
                    } [n];
                    return void 0 !== i && null !== a && i <= a && (e = "modern"), e
                }() + ".js";
                r = {
                    src: f,
                    async: !0,
                    onload: function() {
                        if (e) {
                            var a = window.webPixelsManager.init(e);
                            n(a), window.Shopify.analytics.replayQueue.forEach((function(e) {
                                a.publishCustomEvent(e[0], e[1], e[2])
                            })), window.Shopify.analytics.replayQueue = [], window.Shopify.analytics.publish = a.publishCustomEvent
                        }
                    },
                    onerror: function() {
                        var n = (e.storefrontBaseUrl ? e.storefrontBaseUrl.replace(/\/$/, "") : self.location.origin) + "/.well-known/shopify/monorail/unstable/produce_batch",
                            a = JSON.stringify({
                                metadata: {
                                    event_sent_at_ms: (new Date).getTime()
                                },
                                events: [{
                                    schema_id: "web_pixels_manager_load/2.0",
                                    payload: {
                                        version: t || "latest",
                                        page_url: self.location.href,
                                        status: "failed",
                                        error_msg: f + " has failed to load"
                                    },
                                    metadata: {
                                        event_created_at_ms: (new Date).getTime()
                                    }
                                }]
                            });
                        try {
                            if (self.navigator.sendBeacon.bind(self.navigator)(n, a)) return !0
                        } catch (e) {}
                        const o = new XMLHttpRequest;
                        try {
                            return o.open("POST", n, !0), o.setRequestHeader("Content-Type", "text/plain"), o.send(a), !0
                        } catch (e) {
                            console && console.warn && console.warn("[Web Pixels Manager] Got an unhandled error while logging a load error.")
                        }
                        return !1
                    }
                }, i = document.createElement("script"), s = r.src, l = r.async || !0, d = r.onload, c = r.onerror, p = document.head, u = document.body, i.async = l, i.src = s, d && i.addEventListener("load", d), c && i.addEventListener("error", c), p ? p.appendChild(i) : u ? u.appendChild(i) : console.error("Did not find a head or body element to append the script")
            })({
                shopId: 942252,
                storefrontBaseUrl: "https://kith.com",
                cdnBaseUrl: "https://cdn.shopify.com",
                surface: "shopify",
                enabledBetaFlags: ["web_pixels_use_shop_domain_monorail_endpoint"],
                webPixelExtensionBaseUrl: "https://cdn.shopify.com",
                webPixelsConfigList: [],
                initData: {
                    "checkout": {
                        "token": "deb5623924abf274112f3b6238f29973",
                        "currencyCode": "USD",
                        "email": "test@live.com",
                        "phone": null,
                        "lineItems": [{
                            "id": "7c929d0df501a3e75e118d729fc14671",
                            "quantity": 1,
                            "title": "Kith For The Wire Omar Vintage Tee - Black",
                            "variant": {
                                "id": "39251846004864",
                                "image": {
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0094\/2252\/products\/KHM030506-001-FRONT.jpg?v=1654262327"
                                },
                                "price": {
                                    "amount": 70.0,
                                    "currencyCode": "USD"
                                },
                                "product": {
                                    "id": "6535663747200",
                                    "title": "Kith For The Wire Omar Vintage Tee - Black",
                                    "vendor": "Kith"
                                },
                                "sku": "16260840",
                                "title": "M"
                            }
                        }],
                        "order": {
                            "id": ""
                        },
                        "shippingAddress": {
                            "city": "Parsippany",
                            "phone": "8623215531",
                            "country": "United States",
                            "countryCode": "US",
                            "province": "New Jersey",
                            "provinceCode": "NJ"
                        },
                        "subtotalPrice": {
                            "amount": 70.0,
                            "currencyCode": "USD"
                        },
                        "shippingPrice": {
                            "amount": 10.0,
                            "currencyCode": "USD"
                        },
                        "totalTax": {
                            "amount": 0.0,
                            "currencyCode": "USD"
                        },
                        "totalPrice": {
                            "amount": 80.0,
                            "currencyCode": "USD"
                        }
                    },
                    "customer": null
                },
            }, function pageEvents(webPixelsManagerAPI) {
                webPixelsManagerAPI.publish("page_viewed");
                webPixelsManagerAPI.publish("checkout_started", {
                    "checkout": {
                        "token": "deb5623924abf274112f3b6238f29973",
                        "currencyCode": "USD",
                        "email": "test@live.com",
                        "phone": null,
                        "lineItems": [{
                            "id": "7c929d0df501a3e75e118d729fc14671",
                            "quantity": 1,
                            "title": "Kith For The Wire Omar Vintage Tee - Black",
                            "variant": {
                                "id": "39251846004864",
                                "image": {
                                    "src": "https:\/\/cdn.shopify.com\/s\/files\/1\/0094\/2252\/products\/KHM030506-001-FRONT.jpg?v=1654262327"
                                },
                                "price": {
                                    "amount": 70.0,
                                    "currencyCode": "USD"
                                },
                                "product": {
                                    "id": "6535663747200",
                                    "title": "Kith For The Wire Omar Vintage Tee - Black",
                                    "vendor": "Kith"
                                },
                                "sku": "16260840",
                                "title": "M"
                            }
                        }],
                        "order": {
                            "id": ""
                        },
                        "shippingAddress": {
                            "city": "Parsippany",
                            "phone": "8623215531",
                            "country": "United States",
                            "countryCode": "US",
                            "province": "New Jersey",
                            "provinceCode": "NJ"
                        },
                        "subtotalPrice": {
                            "amount": 70.0,
                            "currencyCode": "USD"
                        },
                        "shippingPrice": {
                            "amount": 10.0,
                            "currencyCode": "USD"
                        },
                        "totalTax": {
                            "amount": 0.0,
                            "currencyCode": "USD"
                        },
                        "totalPrice": {
                            "amount": 80.0,
                            "currencyCode": "USD"
                        }
                    }
                });
            }, "https://cdn.shopify.com/shopifycloud/web-pixels-manager/0.0.181", "browser", "0.0.181");
        </script>
        <script>
            let radioLabels = document.querySelectorAll('.radio__label')
            console.log(radioLabels);
            radioLabels.forEach((label) => {
                        console.log(label)
                        label.insertAdjacentHTML('beforeend', " < span > UPS or Fedex based on delivery location.USPS final delivery where applicable. < /span>")
                        })
        </script>
        <script></script>
        <style>
            .section--billing-address {
                display: none !important;
            }

            .section--shipping-address-recap a {
                display: none;
            }

            .snize-sticky-searchbox {
                display: none !important;
            }
        </style>
        <script>
            $(' < br / > < p > By Clicking "Complete Order"
                    you are accepting Kith & #39;s 
																						<a target= "_blank"
                    href = "https://kith.com/pages/terms-and-conditions/" > Terms and Conditions < /a>. < /p>').insertAfter( ".section--payment-method" );
        </script>
        <script>
            $(document).bind("contextmenu", function(e) {
                e.preventDefault();
            });
            $(document).keydown(function(e) {
                if (e.which === 123) {
                    return false;
                }
            });
        </script>
        <div id="test"></div>
        <script>
            var search = window.location.search.substring(1).split('&')
            var qs = search.reduce(function(a, c) {
                var s = c.split('=')
                a[s[0]] = s[1]
                return a
            }, {})
            if (qs.applepay) {
                // var test = document.getElementById('test')
                // if (test) {
                //   test.textContent = localStorage.getItem('cart_items') + ' // ' + localStorage.getItem('cart_cleared')
                //   if (window.ApplePaySession) {
                //     test.textContent = 'Apple pay available // ' + window.navigator.userAgent + ' // ' + window.location.href
                //   } else {
                //     test.textContent = 'Apple pay unavailable // ' + window.navigator.userAgent + ' // ' + window.location.href
                //   }
                // }
                $(".main__content, .alternative-payment-separator, .main__footer").hide();
                $("#paypal-express-checkout-btn").hide();
                $(".alt-payment-list-container").before(" < h3 style = 'width: 100%; text-align: center;font-size: 17px;margin-bottom:20px;' > Tap the Apple Pay button to submit your payment < /h3>");
                }
                if (Shopify.Checkout.step === 'thank_you') {
                    localStorage.removeItem('cart_cleared');
                    localStorage.removeItem('cart_items');
                }
        </script>
        <style>
            .finalInner {
                color: #AEAEAE;
                font-size: 1em;
                text-align: center;
            }

            @media only screen and (max-width: 768px) {
                .finalInner {
                    text-align: left;
                }
            }

            /*       .section--shipping-method .section__content:after {
          margin-top: 15px;
          content: "**PLEASE NOTE** Due to warehouse inventory maintenance, most orders placed will experience a brief delay before they are shipped. Orders will resume to normalcy on February 4th, and expect to ship within our standard 3-5 business days. We apologize for any inconvenience";
          display: table;
      }
      .os-header__heading:after {
        margin-top: 15px;
        content: "**PLEASE NOTE** Due to warehouse inventory maintenance, most orders placed will experience a brief delay before they are shipped. Orders will resume to normalcy on February 4th, and expect to ship within our standard 3-5 business days. We apologize for any inconvenience";
        display: table;
      } */
        </style>
        <style>
            .field--error-plus-dynamic {
                border-color: red;
                background-color: #feebeb;
            }

            .field__message--error-plus-dynamic {
                margin-left: 18px;
                color: red;
            }
        </style>
        <script>
            (function($) {
                    $(document).on('page:load page:change', function() {
                            var $phoneField;
                            var errorClass = 'field--error-plus-dynamic';
                            var errorMessageSelector = '.field__message--error-plus-dynamic';
                            // Check input for character limit and remove letters
                            var validatePhoneNumber = function(phoneField) {
                                var minChars = 10;
                                var maxChars = 10;
                                var errorMessage = "Phone number must be 10 digits";
                                var numbers = phoneField.val().match(/(\d)/g) || [];
                                var numbersLength = numbers.length;
                                // Only allow + and numbers
                                var allowedChars = phoneField.val().match(/(\d|\+)/g) || [];
                                var phoneFieldVal = phoneField.val;
                                // Remove non-allowed characters from phone number
                                phoneField.val(allowedChars.join(''));
                                if (numbersLength !== 0 && numbersLength < minChars || numbersLength > maxChars) {
                                    // Not enough characters, show error on input.
                                    if (!phoneField.hasClass(errorClass)) {
                                        phoneField.addClass(errorClass);
                                        phoneField.closest('[data-address-field]').after(" < p class = 'field__message field__message--error-plus-dynamic' > " + errorMessage + " < /p>");
                                        }
                                        return false;
                                    } else {
                                        // Phone number is valid. Remove errors and continue.
                                        phoneField.removeClass(errorClass);
                                        phoneField.closest('[data-address-field]').nextAll(errorMessageSelector).remove();
                                        return true;
                                    }
                                }
                                if (Shopify.Checkout.step === 'contact_information') {
                                    var $phoneField = $('[name="checkout[shipping_address][phone]"]:not([aria-hidden="true"])');
                                    // Check for enter keypress on form and click button instead.
                                    $('[data-step] form').on('keypress', function(e) {
                                        if (event.keyCode === 13) {
                                            e.preventDefault();
                                            $(this).find('[type="submit"]').trigger('click');
                                        }
                                    });
                                    // Handle form submit by validating button click.
                                    $('[data-step] form [type="submit"]').on('click', function(e) {
                                        e.preventDefault();
                                        if (validatePhoneNumber($phoneField)) {
                                            $('[data-step] form').trigger('submit');
                                        }
                                    });
                                    // Validate phone number when modified
                                    $phoneField.on('input', function() {
                                        validatePhoneNumber($(this));
                                    });
                                }
                            });
                    })(Checkout.$);
        </script>
        <style>
            .product__description__property {
                font-size: 0;
                display: none;
            }
        </style>
        <script>
            $(window).on('load', function() {
                $('.product__description__property').remove();
            })
        </script>
        <script id="globaleScript">
            (function() {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.Gem_NativeCheckoutRedirectSupport = true;
                s.src = '//gem-fs.global-e.com/includes/js/583';
                document.getElementsByTagName('head')[0].appendChild(s);
            })();
        </script>
    </body>
</html>`;

function checkoutCaptchaTest(body){
  if(/recaptchaCallback/.test(body)){
    console.log(body.match(/sitekey: "(.*?)"/)[1]);
  };
};

checkoutCaptchaTest(body);