const got = require("got");

function graphqlPostQueue(domain, json, cookieJar, agent){
    let url = `https://${domain}/queue/poll`;

    let options = {
        json,
        headers: {
            "authority": domain,
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "origin": `https://${domain}`,
            "referer": `https://${domain}/throttle/queue`,
            "sec-ch-ua": '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        },
        responseType: "json",
        followRedirect: false,
        cookieJar,
        ...(agent && { agent })
    };

    return got.post(url, options);
};

module.exports = { graphqlPostQueue };