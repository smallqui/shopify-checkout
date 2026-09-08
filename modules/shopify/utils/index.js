/**
 * Shopify utility module entry point.
 *
 * Aggregates and re-exports shared helper functions used throughout the
 * Shopify task system, providing a single interface for timing, monitor-input
 * parsing, product parsing, and checkout parsing utilities.
 *
 * Utility helpers are organized by purpose:
 *
 * - Time  - Delays, queue timing, estimated completion times, and checkout speed.
 * - Input - Monitor-type detection and parsing for links, variants, and keywords.
 * - Parse - Product, size, checkout token, and checkout secret parsing.
 */

const { sleep, calculateTimeRemaining, calculatePollAfter, calculateSpeed } = require("./time");
const { getMonitorType, getKeywords, getHandle, getVariant } = require("./input");
const { parseSizes, parseProducts, parseProduct, parseToken, parseSecretKey } = require("./parse");

module.exports = { sleep, calculateTimeRemaining, calculatePollAfter, getMonitorType, getKeywords, getHandle, getVariant, parseSizes, parseProducts, parseProduct, parseToken, calculateSpeed, parseSecretKey };