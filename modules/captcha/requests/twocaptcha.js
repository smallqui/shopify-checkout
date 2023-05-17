const got = require("got");

function twocaptchaPostTask(json){
    let url = "http://2captcha.com/in.php";

    let options = {
        json,
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
        },
        responseType: "json",
        followRedirect: false,
    };

    return got.post(url, options);
};

function twocaptchaGetResult(apiKey, id){
    let url = `http://2captcha.com/res.php?key=${apiKey}&action=get&id=${id}&json=1`;

    let options = {
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
        },
        responseType: "json",
        followRedirect: false,
    };

    return got(url, options);
};

module.exports = { twocaptchaPostTask, twocaptchaGetResult };