const got = require("got");
const { v4 } = require("uuid");

/*
original shopify api documentation 
https://web.archive.org/web/20210321234951/https://shopify.dev/tutorials/sell-through-the-checkout-api
current version of the documentation doesn't include most of the stuff probably to stop people from making bots
*/

function storefrontPostCheckout(domain, json, accessToken, cookieJar, agent){
    let url = `https://${domain}/api/checkouts.json`;

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
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got.post(url, options);
};

function storefrontPatchCheckout(domain, checkoutToken, json, accessToken, secretKey, cookieJar, agent){
    let url = `https://${domain}/api/checkouts/${checkoutToken}.json`;

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
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got.patch(url, options);
};

function storefrontGetCheckout(domain, checkoutToken, accessToken, secretKey, cookieJar, agent){
    let url = `https://${domain}/api/checkouts/${checkoutToken}.json`;

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
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

function storefrontGetConfig(domain, cookieJar, agent){
    let url = `https://${domain}/payments/config`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "sec-ch-ua": '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

function storefrontGetPayments(domain, checkoutToken, accessToken, secretKey, cookieJar, agent){
    let url = `https://${domain}/api/checkouts/${checkoutToken}/payments.json`;

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
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

function storefrontGetRates(domain, checkoutToken, accessToken, secretKey, cookieJar, agent){
    let url = `https://${domain}/api/checkouts/${checkoutToken}/shipping_rates.json`;

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
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

function storefrontGetSession(json, agent){
    let url = "https://elb.deposit.shopifycs.com/sessions";

    let options = {
        json,
        headers: {
            host: "elb.deposit.shopifycs.com",
            "content-type": "application/json",
            accept: "application/json",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
        },
        responseType: "json",
        followRedirect: false,
        ...(agent && { agent })
    };

    return got.post(url, options);
};

module.exports = { storefrontPostCheckout, storefrontPatchCheckout, storefrontGetCheckout, storefrontGetConfig, storefrontGetPayments, storefrontGetRates, storefrontGetSession };