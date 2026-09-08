const moment = require("moment");

/**
 * Pauses execution for the specified duration.
 *
 * Useful for introducing delays between asynchronous requests, including
 * monitoring intervals, retries, and checkout polling.
 *
 * @param {number} ms - Duration to wait in milliseconds.
 *
 * @returns {Promise<void>} Promise that resolves after the specified delay.
 */
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Calculates the estimated completion time for a duration in seconds.
 *
 * Adds the supplied number of seconds to the current time and formats the
 * resulting timestamp for display.
 *
 * @param {number} seconds - Number of seconds remaining.
 *
 * @returns {string} Estimated completion time formatted as `hh:mm:ss`.
 */
function calculateTimeRemaining(seconds){
    return moment().add(seconds, "seconds").format('hh:mm:ss');
};

/**
 * Calculates the amount of time remaining until a future polling timestamp.
 *
 * Compares the provided polling time against the current time to determine
 * how long the task should wait before making its next request.
 *
 * @param {string|number|Date|moment.Moment} pollAfter - Timestamp indicating when polling should resume.
 *
 * @returns {number} Time remaining until the polling timestamp, in milliseconds.
 */
function calculatePollAfter(pollAfter){
    return moment(pollAfter).diff(moment());
};

/**
 * Calculates and formats the elapsed time between two timestamps.
 *
 * Converts the millisecond difference between the start and end timestamps
 * into seconds and rounds the result to two decimal places.
 *
 * @param {number} end - Ending timestamp in milliseconds.
 * @param {number} start - Starting timestamp in milliseconds.
 *
 * @returns {string} Elapsed time formatted in seconds, such as `1.25s`.
 */
function calculateSpeed(end, start){
    return `${((end - start) / 1000).toFixed(2)}s`;
};

module.exports = { sleep, calculateTimeRemaining, calculatePollAfter, calculateSpeed };