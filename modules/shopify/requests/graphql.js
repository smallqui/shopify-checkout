const got = require("got");

/**
 * Polls Shopify's checkout queue through its GraphQL queue endpoint.
 *
 * Sends the provided GraphQL payload to `/queue/poll` while preserving the
 * task's existing cookie and proxy session. The response contains queue state
 * such as updated queue tokens, polling intervals, estimated wait time, and
 * product availability information used by the checkout controller.
 *
 * Redirects are disabled so queue-related responses can be handled directly
 * by the calling workflow.
 *
 * @param {string} domain - Shopify storefront domain.
 * @param {Object} json - GraphQL request payload containing the queue polling query and variables.
 * @param {Object} cookieJar - Cookie jar used to preserve storefront session state.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise} GOT request promise containing the queue polling JSON response.
 */
function graphqlPostQueue(domain, json, cookieJar, agent){
    let url = `https://${domain}/queue/poll`;

    let options = {
        json,
        headers: {
            "authority": domain,
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "origin": `https://${domain}`,
            "referer": `https://${domain}/throttle/queue`,
            "sec-ch-ua": '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got.post(url, options);
};

module.exports = { graphqlPostQueue };