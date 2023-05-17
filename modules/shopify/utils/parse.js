//honestly everything here can be rewritten

function getVariant(array){
    return array[Math.floor(Math.random() * array.length)].id;
};

//if enabled it will check more fields others than just the products name
function deep(products, positive, negative){
    let productsFormatted = products.map(({ title, handle, images, variants }) => ({ strings: [title, handle, images.length ? images[0].src : ""], details: { title, handle, variants } }));

    for(let { strings, details } of productsFormatted){
        for(let string of strings)
            if(positive.every(word => string.toLowerCase().includes(word)) && !negative.some(word => string.toLowerCase().includes(word)))
                return details;
    };
};

function parseProducts(body, keywords, deepSearch){
    let { products } = body;
    let { positive, negative } = keywords;

    if(deepSearch)
        return deep(products, positive, negative);
    else
        return products.find(({ title }) => positive.every(word => title.toLowerCase().includes(word)) && !negative.some(word => title.toLowerCase().includes(word)));
};

//todo - rewrite this
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

function parseProduct(body){
    let { line_items, payment_due } = body.checkout;
    let { title, variant_title, image_url } = line_items[0];
    return { name: title, size: variant_title || "Default Title" , image: /http/.test(image_url) ? image_url : `https:${image_url}`, price: `$${payment_due}` };
};

function parseToken(link){
    let split = link.split("/");
    return split[split.length - 1];
};

function parseSecretKey(body){
    let split = body.checkout.web_url.split("?key=");
    return split[split.length - 1];
};

module.exports = { parseSizes, parseProducts, parseProduct, parseToken, parseSecretKey };