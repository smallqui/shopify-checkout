/**
 * Script utility module entry point.
 *
 * Re-exports the payment session helper used by the Shopify checkout workflow,
 * providing a single interface for shared checkout scripts.
 *
 * TODO (original): Add/export `getProperties` functionality.
 */

const { getSession } = require("./session");

module.exports = { getSession };