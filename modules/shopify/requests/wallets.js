const got = require("got");
const { v4 } = require("uuid");

/**
 * Calculates shipping information for an existing Shopify wallet checkout.
 *
 * Sends checkout data to Shopify's wallet-specific `calculate_shipping`
 * endpoint while preserving the active checkout authorization, cookie jar,
 * and optional proxy session.
 *
 * NOTE: Original implementation reference — this request flow was based in
 * part on Shopify's earlier Checkout API documentation:
 * https://web.archive.org/web/20210321234951/https://shopify.dev/tutorials/sell-through-the-checkout-api
 *
 * NOTE: Original implementation discovery — the
 * `/wallets/checkouts/${checkoutToken}/calculate_shipping.json` endpoint was
 * identified in Shopify's checkout frontend JavaScript:
 * https://cdn.shopify.com/shopifycloud/shopify/assets/checkout_2021-01-25-b77c3c034d15dc2519055ceecc51dbbe4fd4196767e28a4702351899f8bd8922.js
 *
 * The endpoint was used as an alternate checkout path when the standard wallet
 * checkout endpoint returned an out-of-stock response. Some storefronts were
 * also observed returning shipping-rate and cost data directly from this
 * request, reducing the number of additional checkout requests required.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {Object} json - Checkout payload used to calculate shipping information.
 * @param {string} accessToken - Storefront API access token.
 * @param {string} secretKey - Authorization token associated with the checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the shipping calculation response.
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

/**
 * Retrieves the current state of an existing Shopify wallet checkout.
 *
 * Uses the wallet-specific checkout endpoint to inspect the active checkout
 * while authenticating with the Storefront API access token and checkout
 * authorization token.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {string} accessToken - Storefront API access token.
 * @param {string} secretKey - Authorization token associated with the checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the current wallet checkout response.
 */
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

/**
 * Updates an existing Shopify wallet checkout.
 *
 * Sends a partial checkout payload to the wallet-specific checkout endpoint.
 * The request can be used to update checkout state while retaining the same
 * checkout authorization, cookie jar, and optional proxy session.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {Object} json - Partial checkout payload containing the values to update.
 * @param {string} accessToken - Storefront API access token.
 * @param {string} secretKey - Authorization token associated with the checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the updated wallet checkout response.
 */
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

/**
 * Creates a new checkout through Shopify's wallet-specific checkout endpoint.
 *
 * Sends the initial checkout payload and generates unique Shopify visit and
 * checkout tokens for the request. The wallet caller header identifies the
 * request as part of Shopify's wallet checkout flow.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {Object} json - Checkout payload containing the initial checkout data.
 * @param {string} accessToken - Storefront API access token.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the newly created wallet checkout response.
 */
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

/**
 * Retrieves payment records associated with an active Shopify wallet checkout.
 *
 * Used to inspect payment state and payment-related response data through the
 * wallet-specific checkout API.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {string} accessToken - Storefront API access token.
 * @param {string} secretKey - Authorization token associated with the checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the wallet checkout payment records.
 */
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


/**
 * Retrieves available shipping rates for an active Shopify wallet checkout.
 *
 * Requests the wallet-specific shipping-rate endpoint after the checkout has
 * sufficient customer and shipping information to calculate delivery options.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {string} accessToken - Storefront API access token.
 * @param {string} secretKey - Authorization token associated with the checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the available wallet shipping rates.
 */
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