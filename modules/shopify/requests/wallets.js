const got = require("got");
const { v4 } = require("uuid");

/*
original shopify api documentation 
https://web.archive.org/web/20210321234951/https://shopify.dev/tutorials/sell-through-the-checkout-api
current version of the documentation doesn't include most of the stuff probably to stop people from making bots
*/

/* 
https://${domain}/wallets/checkouts/${checkoutToken}/calculate_shipping.json
found this endpoint on one the checkout scripts that load https://cdn.shopify.com/shopifycloud/shopify/assets/checkout_2021-01-25-b77c3c034d15dc2519055ceecc51dbbe4fd4196767e28a4702351899f8bd8922.js
it allows you to bypass the out of stock message on the storefront api (https://${domain}/wallets/checkouts/${checkoutToken}.json endpoint)
some sites will also include the shipping rate and cost with the response (example: https://shop-us.doverstreetmarket.com/) shaving off a few seconds from checkout.
*/
function walletsPostCalculate(domain, checkoutToken, json, accessToken, secretKey, cookieJar, agent){
    let url = `https://${domain}/wallets/checkouts/${checkoutToken}/calculate_shipping.json`;

    let options = {
        json,
        headers: {
            authority: domain,
            accept: "application/json",
            authorization: `Basic ${btoa(accessToken)}`,
            "content-type": "application/json",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
            "x-shopify-checkout-authorization-token": secretKey,
            "x-shopify-checkout-version": "2018-03-05",
            "x-shopify-uniquetoken": v4(),
            "x-shopify-visittoken": v4(),
            "x-shopify-wallets-caller": "costanza"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got.post(url, options);
};

function walletsGetCheckout(domain, checkoutToken, accessToken, secretKey, cookieJar, agent){
    let url = `https://${domain}/wallets/checkouts/${checkoutToken}.json`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "application/json",
            "authorization": `Basic ${btoa(accessToken)}`,
            "content-type": "application/json",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
            "x-shopify-checkout-authorization-token": secretKey,
            "x-shopify-checkout-version": "2018-03-05",
            "x-shopify-uniquetoken": v4(),
            "x-shopify-visittoken": v4(),
            "x-shopify-wallets-caller": "costanza"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

function walletsPatchCheckout(domain, checkoutToken, json, accessToken, secretKey, cookieJar, agent){
    let url = `https://${domain}/wallets/checkouts/${checkoutToken}.json`;

    let options = {
        json,
        headers: {
            "authority": domain,
            "accept": "application/json",
            "authorization": `Basic ${btoa(accessToken)}`,
            "content-type": "application/json",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
            "x-shopify-checkout-authorization-token": secretKey,
            "x-shopify-checkout-version": "2018-03-05",
            "x-shopify-uniquetoken": v4(),
            "x-shopify-visittoken": v4(),
            "x-shopify-wallets-caller": "costanza"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got.patch(url, options);
};

function walletsPostCheckout(domain, json, accessToken, cookieJar, agent){
    let url = `https://${domain}/wallets/checkouts.json`;
    
    let options = {
        json,
        headers: {
            "authority": domain,
            "accept": "application/json",
            "authorization": `Basic ${btoa(accessToken)}`,
            "content-type": "application/json",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
            "x-shopify-checkout-version": "2018-03-05",
            "x-shopify-uniquetoken": v4(),
            "x-shopify-visittoken": v4(),
            "x-shopify-wallets-caller": "costanza"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got.post(url, options);
};

function walletsGetPayments(domain, checkoutToken, accessToken, secretKey, cookieJar, agent){
    let url = `https://${domain}/wallets/checkouts/${checkoutToken}/payments.json`;

    let options = {
        headers: {
            authority: domain,
            accept: "application/json",
            authorization: `Basic ${btoa(accessToken)}`,
            "content-type": "application/json",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
            "x-shopify-checkout-authorization-token": secretKey,
            "x-shopify-checkout-version": "2018-03-05",
            "x-shopify-uniquetoken": v4(),
            "x-shopify-visittoken": v4(),
            "x-shopify-wallets-caller": "costanza"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};


function walletsGetRates(domain, checkoutToken, accessToken, secretKey, cookieJar, agent){
    let url = `https://${domain}/wallets/checkouts/${checkoutToken}/shipping_rates.json`;

    let options = {
        headers: {
            authority: domain,
            accept: "application/json",
            authorization: `Basic ${btoa(accessToken)}`,
            "content-type": "application/json",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
            "x-shopify-checkout-authorization-token": secretKey,
            "x-shopify-checkout-version": "2018-03-05",
            "x-shopify-uniquetoken": v4(),
            "x-shopify-visittoken": v4(),
            "x-shopify-wallets-caller": "costanza"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

module.exports = { walletsPostCalculate, walletsGetCheckout, walletsPatchCheckout, walletsPostCheckout, walletsGetPayments, walletsGetRates };