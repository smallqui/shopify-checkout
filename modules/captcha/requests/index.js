/**
 * 2Captcha API request module entry point.
 *
 * Re-exports the request helpers used by the captcha-solving workflow,
 * providing a single interface for creating captcha tasks and retrieving
 * their results.
 *
 * Request helpers:
 *
 * - twocaptchaPostTask - Submits a new captcha-solving task.
 * - twocaptchaGetResult - Retrieves the result of a submitted captcha task.
 */

const { twocaptchaPostTask, twocaptchaGetResult } = require("./twocaptcha");

module.exports = { twocaptchaPostTask, twocaptchaGetResult };