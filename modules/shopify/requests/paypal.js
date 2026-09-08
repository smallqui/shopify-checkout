const got = require("got");

/**
 * Approves an onboarded PayPal guest payment session through PayPal's
 * GraphQL checkout API.
 *
 * Sends the approval mutation using the PayPal Express checkout ID as the
 * client context and the temporary access token returned during guest
 * onboarding for authorization.
 *
 * The existing cookie jar and optional proxy agent are reused to preserve
 * the PayPal checkout session established during the previous request.
 *
 * @param {Object} json - GraphQL payload containing the payment approval mutation.
 * @param {string} paypalExpressId - PayPal Express token identifying the checkout session.
 * @param {string} paypalAccessToken - Temporary PayPal guest-session access token.
 * @param {Object} cookieJar - Cookie jar used to preserve session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the PayPal approval JSON response.
 */
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

/**
 * Follows PayPal's merchant callback URL after payment approval.
 *
 * Returns control from PayPal to the Shopify storefront using the callback
 * URL supplied by the approved PayPal checkout session. The request preserves
 * the existing cookies and proxy session so the calling checkout workflow can
 * inspect the resulting redirect or processing state.
 *
 * @param {string} paypalCallbackUrl - Merchant callback URL returned by PayPal.
 * @param {string} domain - Shopify storefront domain receiving the callback.
 * @param {Object} cookieJar - Cookie jar used to preserve session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the merchant callback response.
 */
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

/**
 * Creates and onboards a PayPal guest checkout session through PayPal's
 * GraphQL checkout API.
 *
 * Sends the guest onboarding mutation using the PayPal Express checkout ID
 * as the client context. The response is used by the checkout workflow to
 * retrieve the temporary buyer access token, funding information, and payment
 * contingencies required for the subsequent approval request.
 *
 * The existing cookie jar and optional proxy agent are reused so the PayPal
 * session remains consistent throughout the payment flow.
 *
 * @param {Object} json - GraphQL payload containing guest, billing, shipping, and payment data.
 * @param {string} paypalExpressId - PayPal Express token identifying the checkout session.
 * @param {Object} cookieJar - Cookie jar used to preserve session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the PayPal onboarding JSON response.
 */
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