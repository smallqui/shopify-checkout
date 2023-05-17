const moment = require("moment");

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};

function calculateTimeRemaining(seconds){
    return moment().add(seconds, "seconds").format('hh:mm:ss');
};

function calculatePollAfter(pollAfter){
    return moment(pollAfter).diff(moment());
};

function calculateSpeed(end, start){
    return `${((end - start) / 1000).toFixed(2)}s`;
};

module.exports = { sleep, calculateTimeRemaining, calculatePollAfter, calculateSpeed };