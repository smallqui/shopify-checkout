const FastTask = require("./fast");

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