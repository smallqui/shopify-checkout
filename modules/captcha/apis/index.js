/**
 * 2Captcha module entry point.
 *
 * Re-exports the 2Captcha client implementation, providing a single
 * interface for initializing and using the captcha-solving service.
 */
const Twocaptcha = require("./twocaptcha");

module.exports = Twocaptcha;