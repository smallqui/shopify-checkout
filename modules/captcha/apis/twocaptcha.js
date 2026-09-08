const { twocaptchaPostTask, twocaptchaGetResult } = require("../requests");

/**
 * Pauses execution for the specified duration.
 *
 * Used internally to delay subsequent result requests while a captcha task
 * is still being processed or when a polling request fails.
 *
 * @param {number} ms - Duration to wait in milliseconds.
 *
 * @returns {Promise<void>} Promise that resolves after the specified delay.
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Client for submitting and retrieving captcha solutions through 2Captcha.
 *
 * Handles task creation, optional proxy configuration, and result polling
 * for reCAPTCHA challenges encountered during the checkout workflow.
 */
class Twocaptcha {

    /**
     * Creates a new 2Captcha client.
     *
     * @param {string} apiKey - API key used to authenticate 2Captcha requests.
     */
    constructor(apiKey){
        this.apiKey = apiKey;
    };

    /**
     * Converts a colon-delimited proxy into the authentication format expected
     * by the captcha-solving request.
     *
     * Converts `host:port:user:password` into `user:password@host:port`.
     *
     * @param {string} proxy - Proxy formatted as `host:port:user:password`.
     *
     * @returns {string} Proxy formatted as `user:password@host:port`.
     */
    formatProxy(proxy){
        let details = proxy.split(":");
        return `${details[2]}:${details[3]}@${details[0]}:${details[1]}`;
    };

    /**
     * Solves a reCAPTCHA challenge for the checkout workflow.
     *
     * Creates a captcha-solving task using the target page URL and site key,
     * optionally routes the solver through the supplied proxy, and polls
     * 2Captcha until a solution is returned or the task fails.
     *
     * While the captcha remains in the `CAPCHA_NOT_READY` state, polling is
     * delayed by six seconds before another result request is made. Failed
     * polling requests are also retried after the same delay.
     *
     * @param {string} url - URL of the page containing the reCAPTCHA challenge.
     * @param {string} sitekey - reCAPTCHA site key associated with the page.
     * @param {string|boolean} proxy - Optional proxy used when solving the captcha.
     *
     * @returns {Promise<Object>} Captcha-solving result.
     * @returns {string} return.status - Result state: `submitted`, `success`, or `failed`.
     * @returns {string} [return.message] - Captcha solution token or failure message.
     */
    async solveCheckoutCaptcha(url, sitekey, proxy){
        let result = new Object();
        let id = false;

        let json = {
            key: this.apiKey,
            method: "userrecaptcha",
            googlekey: sitekey,
            pageurl: url,
            userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
            ...(proxy && { proxy: this.formatProxy(proxy) }),
            ...(proxy && { proxyType: "HTTP" }),
            json: 1
        };

        await twocaptchaPostTask(json)
        .then(({ body }) => {
            if(body.status){
                result.status = "submitted";
                id = body.request;
            }
            else
                result.status = "failed";
                result.message = body.request;
        })
        .catch(({ message }) => {
            result.status = "failed";
            result.message = message;
        });
    
        if(!id)
            return result;

        while(result.status == "submitted"){
            await twocaptchaGetResult(this.apiKey, id)
            .then(async ({ body }) => {
                if(body.status){
                    result.status = "success";
                    result.message = body.request;
                }
                else if(body.request == "CAPCHA_NOT_READY")
                    await sleep(6000);
                else {
                    result.status = "failed";
                    result.message = body.request;
                };
            })
            .catch(async () => {
                await sleep(6000);
            });
        };

        return result;
    };
};

module.exports = Twocaptcha;