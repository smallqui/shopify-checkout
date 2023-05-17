function linkTest(input){
    let regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    return regex.test(input);
};

function variantTest(input){
    let regex = /^\d+$/;
    let split = input.split(",");
    return regex.test(split[0]) && split[0].length > 10;
};

function getMonitorType(input){
    if(linkTest(input))
        return "Link";
    else if(variantTest(input))
        return "Variant";
    else
        return "Keywords";
};

function getKeywords(input){
    let split = input.split(",");
    let keywords = { positive: [], negative: [] };

    split.forEach(word => keywords[word[0] == "+" ? "positive" : "negative"].push(word.substring(1).toLowerCase()));
    return keywords;
};

function getHandle(input){
    let split = input.split("/");
    return split[split.length - 1];
};

function getVariant(input){
    let split = input.split(",");
    return split[Math.floor(Math.random() * split.length)];
};

module.exports = { getMonitorType, getKeywords, getHandle, getVariant };