/**
 * Shopify mode module entry point.
 *
 * Re-exports the Shopify task selector from the available task modes,
 * providing a single interface for initializing Shopify tasks.
 */

const { selectShopifyTask } = require("./modes");

module.exports = { selectShopifyTask };