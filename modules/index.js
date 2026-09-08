/**
 * Shopify task module entry point.
 *
 * Re-exports the Shopify task selector so it can be accessed
 * from the parent task system through a single module interface.
 */

const { selectShopifyTask } = require("./shopify");

module.exports = { selectShopifyTask };