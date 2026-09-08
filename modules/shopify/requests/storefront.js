const got = require("got");
const { v4 } = require("uuid");

/**
 * Creates a new checkout through Shopify's legacy Checkout API.
 *
 * Sends the initial checkout payload to the storefront and generates unique
 * Shopify visit and checkout tokens for the request. The shared cookie jar
 * and optional proxy agent are preserved for the remainder of the checkout flow.
 *
 * NOTE: Original implementation reference — this request was based on Shopify's
 * earlier Checkout API documentation:
 * https://web.archive.org/web/20210321234951/https://shopify.dev/tutorials/sell-through-the-checkout-api
 *
 * The current Shopify documentation no longer exposes much of the legacy
 * Checkout API behavior that this implementation relied on.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {Object} json - Checkout payload containing the initial checkout data.
 * @param {string} accessToken - Storefront API access token.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the newly created checkout response.
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

/**
 * Updates an existing Shopify checkout through the legacy Checkout API.
 *
 * Sends a partial checkout payload to the active checkout while authenticating
 * with both the Storefront API access token and checkout authorization token.
 * This request is used throughout the checkout flow to update checkout state
 * such as customer information, line items, discounts, or shipping selections.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {Object} json - Partial checkout payload containing the values to update.
 * @param {string} accessToken - Storefront API access token.
 * @param {string} secretKey - Authorization token associated with the checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the updated checkout response.
 */
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

/**
 * Retrieves the current state of an existing Shopify checkout.
 *
 * Used to refresh checkout information and inspect values such as totals,
 * line items, payment state, and other checkout properties before advancing
 * through the checkout controller.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {string} accessToken - Storefront API access token.
 * @param {string} secretKey - Authorization token associated with the checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the current checkout JSON response.
 */
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

/**
 * Retrieves Shopify's storefront payment configuration.
 *
 * The configuration response is used by the checkout task to discover
 * storefront-specific metadata required to initialize checkout, including
 * values such as the shop identifier and Storefront API access token.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the storefront configuration response.
 */
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

/**
 * Retrieves payment records associated with the active Shopify checkout.
 *
 * Used to inspect the checkout's payment state and payment-related response
 * data through Shopify's legacy Checkout API.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {string} accessToken - Storefront API access token.
 * @param {string} secretKey - Authorization token associated with the checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the checkout payment records.
 */
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

/**
 * Retrieves available shipping rates for the active Shopify checkout.
 *
 * Shipping rates are requested after customer and shipping information has
 * been applied to the checkout. The response is used by the task to select
 * an available shipping-rate ID before calculating totals and payment.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {string} accessToken - Storefront API access token.
 * @param {string} secretKey - Authorization token associated with the checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the available shipping rates.
 */
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

/**
 * Creates a Shopify payment vault session.
 *
 * Sends sensitive payment information to Shopify's dedicated deposit service
 * rather than directly to the storefront. The returned session identifier can
 * then be referenced during checkout payment submission.
 *
 * Unlike the storefront checkout requests, this request does not use the
 * storefront cookie jar because it communicates directly with Shopify's
 * payment-session service.
 *
 * @param {Object} json - Payment data payload used to create the session.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the payment session response.
 */
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