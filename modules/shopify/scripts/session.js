const { storefrontGetSession } = require("../requests");

/**
 * Creates a Shopify payment session for the provided credit card.
 *
 * Formats the card information into the payload expected by Shopify's payment
 * session service and scopes the resulting session to the target storefront.
 * The returned session ID can then be referenced during checkout payment
 * submission instead of sending the raw card information to the storefront.
 *
 * If session creation fails, the function returns `false` so the calling
 * checkout workflow can handle the failure without propagating the request error.
 *
 * @param {Object} card - Credit card information used to create the payment session.
 * @param {string} card.number - Credit card number.
 * @param {string} card.holder - Cardholder name.
 * @param {string|number} card.month - Card expiration month.
 * @param {string|number} card.year - Card expiration year.
 * @param {string} card.cvv - Card verification value.
 * @param {string} domain - Shopify storefront domain used to scope the payment session.
 * @param {Object} agent - Optional HTTP/HTTPS proxy agent.
 *
 * @returns {Promise<string|false>} Shopify payment session ID when successful,
 * or `false` if the session request fails.
 */
async function getSession(card, domain, agent){
    let json = {
        credit_card: {
            number: card.number,
            name: card.holder,
            month: parseInt(card.month),
            year: parseInt(card.year),
            verification_value: card.cvv
        },
        payment_session_scope: domain
    };

    try {
        let { body } = await storefrontGetSession(json, agent);
        return body.id;
    }
    catch(error){
        return false;
    };
};

module.exports = { getSession };