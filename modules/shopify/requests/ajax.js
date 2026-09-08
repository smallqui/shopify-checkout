const got = require("got");
const { v4 } = require("uuid");

/**
 * Retrieves the storefront's checkout page through Shopify's AJAX/frontend flow.
 *
 * Uses a shared cookie jar and optional proxy agent to maintain the same
 * session used throughout the task. Redirects are intentionally disabled
 * so the caller can inspect Shopify's response and location headers.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {Object} cookieJar - Cookie jar used to preserve session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the checkout response.
 *
 * @see https://shopify.dev/docs/api/ajax/reference/product
 */
function ajaxGetCheckout(domain, cookieJar, agent){
    let url = `https://${domain}/checkout`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
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
        responseType: "text",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};


/**
 * Retrieves product data for a specific Shopify product handle.
 *
 * Requests the product's `.js` endpoint and returns its product and variant
 * information as JSON.
 *
 * NOTE: Original implementation note — the `?options=${v4()}` query parameter
 * was used to bypass caching on the `/products.json` and `/handle.js` endpoints.
 * Other cache-bypass approaches may also be possible through Shopify's
 * navigation and search query parameters.
 *
 * Original reference:
 * https://shopify.dev/docs/themes/navigation-search/search
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} handle - Shopify product handle to retrieve.
 * @param {Object} cookieJar - Cookie jar used to preserve session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the product JSON response.
 */
function ajaxGetHandle(domain, handle, cookieJar, agent){
    let url = `https://${domain}/products/${handle}.js?options=${v4()}`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9",
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
 * Retrieves a collection of products from Shopify's products JSON endpoint.
 *
 * The returned product data is used by the monitoring system to search for
 * products matching the task's configured keywords and sizes.
 *
 * NOTE: A generated UUID is appended to the request as the `order` query
 * parameter, following the same cache-bypass approach used by `ajaxGetHandle()`.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {number} limit - Maximum number of products requested.
 * @param {Object} cookieJar - Cookie jar used to preserve session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the products JSON response.
 */
function ajaxGetProducts(domain, limit, cookieJar, agent){
    let url = `https://${domain}/products.json?limit=${limit}&order=${v4()}`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9",
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

module.exports = { ajaxGetCheckout, ajaxGetHandle, ajaxGetProducts };