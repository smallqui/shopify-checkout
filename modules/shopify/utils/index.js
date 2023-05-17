const { sleep, calculateTimeRemaining, calculatePollAfter, calculateSpeed } = require("./time");
const { getMonitorType, getKeywords, getHandle, getVariant } = require("./input");
const { parseSizes, parseProducts, parseProduct, parseToken, parseSecretKey } = require("./parse");

module.exports = { sleep, calculateTimeRemaining, calculatePollAfter, getMonitorType, getKeywords, getHandle, getVariant, parseSizes, parseProducts, parseProduct, parseToken, calculateSpeed, parseSecretKey };