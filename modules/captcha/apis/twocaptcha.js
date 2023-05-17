const { twocaptchaPostTask, twocaptchaGetResult } = require("../requests");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

class Twocaptcha {
    constructor(apiKey){
        this.apiKey = apiKey;
    };

    formatProxy(proxy){
        let details = proxy.split(":");
        return `${details[2]}:${details[3]}@${details[0]}:${details[1]}`;
    };

    async solveCheckoutCaptcha(url, sitekey, proxy){
        let result = new Object();
        let id = false;

        let json = {
            key: this.apiKey,
            method: "userrecaptcha",
            googlekey: sitekey,
            pageurl: url,
            userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
            ...(proxy && { proxy: this.formatProxy(proxy) }),
            ...(proxy && { proxyType: "HTTP" }),
            json: 1
        };

        await twocaptchaPostTask(json)
        .then(({ body }) => {
            if(body.status){
                result.status = "submitted";
                id = body.request;
            }
            else
                result.status = "failed";
                result.message = body.request;
        })
        .catch(({ message }) => {
            result.status = "failed";
            result.message = message;
        });
    
        if(!id)
            return result;

        while(result.status == "submitted"){
            await twocaptchaGetResult(this.apiKey, id)
            .then(async ({ body }) => {
                if(body.status){
                    result.status = "success";
                    result.message = body.request;
                }
                else if(body.request == "CAPCHA_NOT_READY")
                    await sleep(6000);
                else {
                    result.status = "failed";
                    result.message = body.request;
                };
            })
            .catch(async () => {
                await sleep(6000);
            });
        };

        return result;
    };
};

module.exports = Twocaptcha;