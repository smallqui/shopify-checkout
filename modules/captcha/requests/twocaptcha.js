const got = require("got");

/**
 * Submits a captcha-solving task to the 2Captcha API.
 *
 * Sends the provided task payload to 2Captcha and returns the request promise
 * so the calling workflow can retrieve the generated captcha task ID.
 *
 * @param {Object} json - Captcha task payload containing the API key,
 * captcha type, site key, page URL, and other required task parameters.
 *
 * @returns {Promise} HTTP response containing the submitted captcha task result.
 */
function twocaptchaPostTask(json){
    let url = "http://2captcha.com/in.php";

    let options = {
        json,
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
        },
        responseType: "json",
        followRedirect: false,
    };

    return got.post(url, options);
};

/**
 * Retrieves the result of a previously submitted 2Captcha task.
 *
 * Polls the 2Captcha result endpoint using the API key and task ID returned
 * when the captcha-solving request was originally submitted.
 *
 * @param {string} apiKey - 2Captcha API key used to authenticate the request.
 * @param {string|number} id - ID of the previously submitted captcha task.
 *
 * @returns {Promise} HTTP response containing the captcha solution or its
 * current processing status.
 */
function twocaptchaGetResult(apiKey, id){
    let url = `http://2captcha.com/res.php?key=${apiKey}&action=get&id=${id}&json=1`;

    let options = {
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
        },
        responseType: "json",
        followRedirect: false,
    };

    return got(url, options);
};

module.exports = { twocaptchaPostTask, twocaptchaGetResult };