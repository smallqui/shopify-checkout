const got = require("got");

function frontendGetCheckout(domain, cookieJar, agent){
    let url = `https://${domain}/checkout`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "sec-ch-ua": '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
        },
        responseType: "text",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

function frontendGetPayment(domain, shopId, checkoutToken, secretKey, cookieJar, agent){
    let url = `https://${domain}/${shopId}/checkouts/${checkoutToken}?key=${secretKey}`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "referer": `https://${domain}/`,
            "sec-ch-ua": '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
        },
        responseType: "text",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

function frontendGetPaymentBackup(domain, checkoutToken, cookieJar, agent){
    let url = `https://${domain}/checkouts/co/${checkoutToken}`;

    let options = {
        headers: {
            "authority": domain,
            "accept": 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            "accept-language": 'en-US,en;q=0.9',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        },
        responseType: "text",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got(url, options);
};

function frontendPostPayment(domain, shopId, checkoutToken, secretKey, form, cookieJar, agent){
    let url = `https://${domain}/${shopId}/checkouts/${checkoutToken}?key=${secretKey}`;
    
    let options = {
        form,
        headers: {
            "authority": domain,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "origin": `https://${domain}`,
            "referer": `https://${domain}/`,
            "sec-ch-ua": '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
        },
        responseType: "text",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got.post(url, options);
};

function frontendGetProcessing(domain, shopId, checkoutToken, cookieJar, agent){
    let url = `https://${domain}/${shopId}/checkouts/${checkoutToken}/processing`;

    let options = {
        headers: {
            "authority": domain,
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "referer": `https://${domain}/`,
            "sec-ch-ua": '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
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

module.exports = { frontendGetCheckout, frontendGetPayment, frontendGetPaymentBackup, frontendPostPayment, frontendGetProcessing };