/**
 * Tests whether the provided monitor input resembles a product URL.
 *
 * Uses a regular expression to identify URL-like input so the task can
 * distinguish direct product links from variant IDs or keyword monitors.
 *
 * @param {string} input - Raw monitor input provided by the task.
 *
 * @returns {boolean} `true` when the input matches the URL pattern.
 */
function linkTest(input){
    let regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    return regex.test(input);
};

/**
 * Tests whether the provided monitor input contains a Shopify variant ID.
 *
 * The input may contain multiple comma-separated variant IDs. Only the first
 * value is used for validation, and it must be numeric and longer than
 * 10 characters.
 *
 * @param {string} input - Raw monitor input provided by the task.
 *
 * @returns {boolean} `true` when the input appears to contain a variant ID.
 */
function variantTest(input){
    let regex = /^\d+$/;
    let split = input.split(",");
    return regex.test(split[0]) && split[0].length > 10;
};

/**
 * Determines which monitoring strategy should be used for the provided input.
 *
 * Monitor input is classified as a direct product link, one or more variant
 * IDs, or a keyword-based search.
 *
 * @param {string} input - Raw monitor input provided by the task.
 *
 * @returns {"Link"|"Variant"|"Keywords"} Selected monitor type.
 */
function getMonitorType(input){
    if(linkTest(input))
        return "Link";
    else if(variantTest(input))
        return "Variant";
    else
        return "Keywords";

};

/**
 * Parses a comma-separated keyword monitor into positive and negative rules.
 *
 * Keywords prefixed with `+` are stored as required positive keywords, while
 * all other prefixed entries are stored as negative keywords. The prefix is
 * removed and each keyword is normalized to lowercase.
 *
 * @param {string} input - Comma-separated keyword monitor input.
 *
 * @returns {Object} Parsed keyword configuration.
 * @returns {Array<string>} return.positive - Keywords that must be present.
 * @returns {Array<string>} return.negative - Keywords that must not be present.
 */
function getKeywords(input){
    let split = input.split(",");
    let keywords = { positive: [], negative: [] };
    split.forEach(word => keywords[word[0] == "+" ? "positive" : "negative"].push(word.substring(1).toLowerCase()));
    return keywords;

};

/**
 * Extracts the final path segment from a product URL.
 *
 * For Shopify product URLs, this returns the product handle used by the
 * handle-based monitoring flow.
 *
 * @param {string} input - Product URL or path.
 *
 * @returns {string} Final path segment representing the product handle.
 */
function getHandle(input){
    let split = input.split("/");
    return split[split.length - 1];
};

/**
 * Selects a random variant ID from a comma-separated list.
 *
 * @param {string} input - One or more comma-separated variant IDs.
 *
 * @returns {string} Randomly selected variant ID.
 */
function getVariant(input){
    let split = input.split(",");
    return split[Math.floor(Math.random() * split.length)];
};

module.exports = { getMonitorType, getKeywords, getHandle, getVariant };