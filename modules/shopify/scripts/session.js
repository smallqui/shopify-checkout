const { storefrontGetSession } = require("../requests");

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