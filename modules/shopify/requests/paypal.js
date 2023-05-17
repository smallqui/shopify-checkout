const got = require("got");

function paypalPostApprove(json, paypalExpressId, paypalAccessToken, cookieJar, agent){
    let url = "https://www.paypal.com/graphql?ApproveOnboardPaymentMutation";

    let options = {
        json,
        headers: {
            "authority": "www.paypal.com",
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "origin": "https://www.paypal.com",
            "paypal-client-context": paypalExpressId,
            "paypal-client-metadata-id": paypalExpressId,
            "referer": `https://www.paypal.com/checkoutweb/signup?token=${paypalExpressId}&useraction=commit&rcache=1&cookieBannerVariant=hidden&targetService4174=hermesnodeweb&country.x=US&locale.x=en_US&locale.x=en_US&country.x=US`,
            "sec-ch-ua": '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
            "x-app-name": "checkoutuinodeweb_weasley",
            "x-country": "US",
            "x-locale": "en_US",
            "x-paypal-internal-euat": paypalAccessToken
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got.post(url, options);
};

function paypalGetCallback(paypalCallbackUrl, domain, cookieJar, agent){
    let options = {
        headers: {
            "authority": domain,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "referer": "https://www.paypal.com/",
            "sec-ch-ua": '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "cross-site",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"  
        },
        responseType: "text",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(paypalCallbackUrl, options)
};

function paypalPostCreate(json, paypalExpressId, cookieJar, agent){
    let url = "https://www.paypal.com/graphql?OnboardGuestMutation";

    let options = {
        json,
        headers: {
            "authority": "www.paypal.com",
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "origin": "https://www.paypal.com",
            "paypal-client-context": paypalExpressId,
            "paypal-client-metadata-id": paypalExpressId,
            "referer": `https://www.paypal.com/checkoutweb/signup?token=${paypalExpressId}&useraction=commit&rcache=1&cookieBannerVariant=hidden&targetService4174=hermesnodeweb&country.x=US&locale.x=en_US&locale.x=en_US&country.x=US`,
            "sec-ch-ua": '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
            "x-app-name": "checkoutuinodeweb_weasley",
            "x-country": "US",
            "x-locale": "en_US"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got.post(url, options);
};

module.exports = { paypalPostApprove, paypalGetCallback, paypalPostCreate };