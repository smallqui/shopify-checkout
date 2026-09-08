const FastTask = require("./fast");

/**
 * Selects and initializes the appropriate Shopify task implementation.
 *
 * Acts as the entry point for Shopify tasks, using the task's configured mode
 * to determine which checkout workflow should be started.
 *
 * @param {Object} site - Store-specific configuration and API metadata.
 * @param {Object} profile - Customer profile containing contact, shipping, and payment data.
 * @param {Object} task - Runtime task configuration.
 * @param {string} task.mode - Shopify task mode used to select the task implementation.
 *
 * @returns {void}
 */
function selectShopifyTask(site, profile, task){
    switch(task.mode){
        case "fast":
            new FastTask(site, profile, task);
            break;
        default:
            new FastTask(site, profile, task);
    };
};

module.exports = { selectShopifyTask };