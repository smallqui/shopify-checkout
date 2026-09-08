/**
 * Product parsing and checkout utility helpers.
 *
 * NOTE (original): This module was marked as a candidate for a broader rewrite.
 * The current implementation is preserved here for documentation purposes.
 */

/**
 * Selects a random variant ID from an array of variants.
 *
 * @param {Array<Object>} array - Variant objects containing an `id` property.
 *
 * @returns {*} Randomly selected variant ID.
 */
function getVariant(array){
    return array[Math.floor(Math.random() * array.length)].id;
};

/**
 * Searches products using additional product fields beyond the product title.
 *
 * When deep search is enabled, the matcher checks the product title, handle,
 * and first image URL against the configured positive and negative keywords.
 * The first matching product is returned with its title, handle, and variants.
 *
 * NOTE (original): This helper exists to search more fields than only the
 * product name when deep search is enabled.
 *
 * @param {Array<Object>} products - Shopify product objects to search.
 * @param {Array<string>} positive - Keywords that must all be present.
 * @param {Array<string>} negative - Keywords that must not be present.
 *
 * @returns {Object|undefined} Matching product details, or `undefined` if no match is found.
 */
function deep(products, positive, negative){
    let productsFormatted = products.map(({ title, handle, images, variants }) => ({ strings: [title, handle, images.length ? images[0].src : ""], details: { title, handle, variants } }));

    for(let { strings, details } of productsFormatted){
        for(let string of strings)
            if(positive.every(word => string.toLowerCase().includes(word)) && !negative.some(word => string.toLowerCase().includes(word)))
                return details;
    };
};

/**
 * Finds a product matching the configured positive and negative keywords.
 *
 * By default, matching is performed against the product title. When
 * `deepSearch` is enabled, additional product fields are checked through
 * the `deep()` helper.
 *
 * @param {Object} body - Shopify products response.
 * @param {Array<Object>} body.products - Products returned by Shopify.
 * @param {Object} keywords - Parsed keyword configuration.
 * @param {Array<string>} keywords.positive - Keywords that must all be present.
 * @param {Array<string>} keywords.negative - Keywords that must not be present.
 * @param {boolean} deepSearch - Whether additional product fields should be searched.
 *
 * @returns {Object|undefined} First matching product, or `undefined` if no match is found.
 */
function parseProducts(body, keywords, deepSearch){
    let { products } = body;
    let { positive, negative } = keywords;

    if(deepSearch)
        return deep(products, positive, negative);
    else
        return products.find(({ title }) => positive.every(word => title.toLowerCase().includes(word)) && !negative.some(word => title.toLowerCase().includes(word)));
};

/**
 * Selects a variant ID based on the requested sizes and stock availability.
 *
 * Normalizes variant titles to lowercase, filters the available variants by
 * the requested size list unless `random` was selected, and returns a random
 * matching variant ID.
 *
 * Available variants are preferred when possible. If every matching variant
 * is unavailable, a random matching variant is still returned so the caller
 * can continue handling restock or availability logic.
 *
 * TODO (original): Rewrite this size-parsing implementation.
 *
 * @param {Object} body - Product object containing variant information.
 * @param {Array<Object>} body.variants - Product variants.
 * @param {Array<string>} sizes - Requested sizes, or `["random"]` to accept any size.
 *
 * @returns {*|false} Selected variant ID, or `false` when no requested size matches.
 */
function parseSizes(body, sizes){
    let { variants } = body;
    let all = variants.map(({ id, title, available }) =>  ({ id, title: title.toLowerCase(), available }));

    if(sizes[0] != "random")
        all = all.filter(({ title }) => sizes.some(size => size == title));
    
    if(!all.length)
        return false;
    
    let available = all.filter(({ available }) => available);

    return !available.length ? getVariant(all) : getVariant(available);
};

/**
 * Extracts normalized product details from a Shopify checkout response.
 *
 * Uses the first checkout line item to build the product information used
 * elsewhere by the task, including display name, size, image URL, and price.
 *
 * Protocol-relative image URLs are normalized to HTTPS.
 *
 * @param {Object} body - Shopify checkout response.
 * @param {Object} body.checkout - Checkout data.
 *
 * @returns {Object} Parsed product information.
 * @returns {string} return.name - Product title.
 * @returns {string} return.size - Variant title or `Default Title`.
 * @returns {string} return.image - Normalized product image URL.
 * @returns {string} return.price - Checkout payment amount formatted with `$`.
 */
function parseProduct(body){
    let { line_items, payment_due } = body.checkout;
    let { title, variant_title, image_url } = line_items[0];
    return { name: title, size: variant_title || "Default Title" , image: /http/.test(image_url) ? image_url : `https:${image_url}`, price: `$${payment_due}` };
};

/**
 * Extracts the final path segment from a URL or path.
 *
 * This is used to retrieve token-like values stored at the end of a checkout
 * or redirect URL.
 *
 * @param {string} link - URL or path containing the token.
 *
 * @returns {string} Final path segment.
 */
function parseToken(link){
    let split = link.split("/");
    return split[split.length - 1];
};

/**
 * Extracts the checkout secret key from a Shopify checkout response.
 *
 * Parses the `key` query parameter from the checkout's `web_url`.
 *
 * @param {Object} body - Shopify checkout response.
 * @param {Object} body.checkout - Checkout data.
 * @param {string} body.checkout.web_url - Checkout URL containing the secret key.
 *
 * @returns {string} Checkout secret key.
 */
function parseSecretKey(body){
    let split = body.checkout.web_url.split("?key=");
    return split[split.length - 1];
};

module.exports = { parseSizes, parseProducts, parseProduct, parseToken, parseSecretKey };