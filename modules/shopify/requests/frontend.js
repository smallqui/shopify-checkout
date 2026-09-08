const got = require("got");

/**
 * Retrieves the storefront's checkout page through the frontend checkout flow.
 *
 * Uses a shared cookie jar and optional proxy agent so the request participates
 * in the same session as the rest of the checkout task. Redirects are disabled
 * so the caller can inspect Shopify's response and location headers directly.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {Object} cookieJar - Cookie jar used to preserve session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the checkout page response.
 */
function frontendGetCheckout(domain, cookieJar, agent){
    let url = `https://${domain}/checkout`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "sec-ch-ua": '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
        },
        responseType: "text",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

/**
 * Retrieves the active checkout payment page.
 *
 * Builds the checkout URL from the Shopify shop ID, checkout token, and
 * checkout secret key. The returned HTML can be inspected for payment gateway,
 * stock, captcha, account, or redirect state before payment submission.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} shopId - Shopify shop identifier associated with the checkout.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {string} secretKey - Secret key required to access the checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the payment page response.
 */
function frontendGetPayment(domain, shopId, checkoutToken, secretKey, cookieJar, agent){
    let url = `https://${domain}/${shopId}/checkouts/${checkoutToken}?key=${secretKey}`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "referer": `https://${domain}/`,
            "sec-ch-ua": '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
        },
        responseType: "text",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

/**
 * Retrieves the checkout payment page through Shopify's alternate
 * `/checkouts/co/` checkout route.
 *
 * This serves as a backup checkout-page request path when the standard
 * shop-ID-based payment URL is not appropriate for the active checkout flow.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the backup payment page response.
 */
function frontendGetPaymentBackup(domain, checkoutToken, cookieJar, agent){
    let url = `https://${domain}/checkouts/co/${checkoutToken}`;

    let options = {
        headers: {
            "authority": domain,
            "accept": 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            "accept-language": 'en-US,en;q=0.9',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        },
        responseType: "text",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

/**
 * Submits the checkout payment form to the active Shopify checkout.
 *
 * Sends the provided form payload as `application/x-www-form-urlencoded`
 * data while preserving the same cookie and proxy session used throughout
 * checkout. Redirects remain disabled so the caller can determine whether
 * payment entered processing or moved into another checkout state.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} shopId - Shopify shop identifier associated with the checkout.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {string} secretKey - Secret key required to access the checkout.
 * @param {Object} form - Payment form payload submitted to Shopify.
 * @param {Object} cookieJar - Cookie jar used to preserve session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the payment submission response.
 */
function frontendPostPayment(domain, shopId, checkoutToken, secretKey, form, cookieJar, agent){
    let url = `https://${domain}/${shopId}/checkouts/${checkoutToken}?key=${secretKey}`;
    
    let options = {
        form,
        headers: {
            "authority": domain,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "origin": `https://${domain}`,
            "referer": `https://${domain}/`,
            "sec-ch-ua": '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
        },
        responseType: "text",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got.post(url, options);
};

/**
 * Retrieves the checkout processing page after payment submission.
 *
 * Used to inspect or continue the checkout while Shopify finalizes the payment
 * and transitions the checkout toward a completed order or failure state.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {string} shopId - Shopify shop identifier associated with the checkout.
 * @param {string} checkoutToken - Token identifying the active checkout.
 * @param {Object} cookieJar - Cookie jar used to preserve session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the processing page response.
 */
function frontendGetProcessing(domain, shopId, checkoutToken, cookieJar, agent){
    let url = `https://${domain}/${shopId}/checkouts/${checkoutToken}/processing`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "referer": `https://${domain}/`,
            "sec-ch-ua": '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
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

module.exports = { frontendGetCheckout, frontendGetPayment, frontendGetPaymentBackup, frontendPostPayment, frontendGetProcessing };