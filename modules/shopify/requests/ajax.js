const got = require("got");
const { v4 } = require("uuid");

//https://shopify.dev/docs/api/ajax/reference/product

function ajaxGetCheckout(domain, cookieJar, agent){
    let url = `https://${domain}/checkout`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "sec-ch-ua": '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        },
        responseType: "text",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};


/*
the ?options=${v4} query parameter bypasses the /products.json and /handle.js cache
there are other ways to bypass the cache but this was the method I used
you can try to find your own with the queries here https://shopify.dev/docs/themes/navigation-search/search
*/

function ajaxGetHandle(domain, handle, cookieJar, agent){
    let url = `https://${domain}/products/${handle}.js?options=${v4()}`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9",
            "sec-ch-ua": '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

function ajaxGetProducts(domain, limit, cookieJar, agent){
    let url = `https://${domain}/products.json?limit=${limit}&order=${v4()}`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9",
            "sec-ch-ua": '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

module.exports = { ajaxGetCheckout, ajaxGetHandle, ajaxGetProducts };