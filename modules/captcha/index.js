/**
 * 2Captcha integration module entry point.
 *
 * Re-exports the 2Captcha API implementation used by the task system
 * to handle captcha-solving requests through a single module interface.
 */

const Twocaptcha = require("./apis");

module.exports = Twocaptcha;