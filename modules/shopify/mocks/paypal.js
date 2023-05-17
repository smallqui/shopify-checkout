let sessionFailed = {
    "errors": [
        {
            "message": "ISSUER_DECLINE",
            "path": [
                "onboardAccount"
            ],
            "checkpoints": [
                "addCard"
            ],
            "meta": {},
            "errorData": {
                "0": {
                    "field": "cardNumber",
                    "code": "CARD_GENERIC_ERROR"
                },
                "accessToken": "xdxdxdxd"
            },
            "contingency": true,
            "statusCode": 200
        }
    ],
    "data": {
        "onboardAccount": null
    },
    "extensions": {
        "tracing": {
            "version": 1,
            "startTime": "2022-12-14T01:08:21.468Z",
            "endTime": "2022-12-14T01:08:24.080Z",
            "duration": 2612457727,
            "execution": {
                "resolvers": [
                    {
                        "path": [
                            "onboardAccount"
                        ],
                        "parentType": "Mutation",
                        "fieldName": "onboardGuest",
                        "returnType": "CheckoutSession",
                        "startOffset": 2870035,
                        "duration": 2608418729
                    }
                ]
            }
        },
        "correlationId": "f794181aea882"
    }
};

let sessionSuccess = {
    "data": {
        "onboardAccount": {
            "buyer": {
                "auth": {
                    "accessToken": "xdxdxdxd",
                    "__typename": "Auth"
                },
                "userId": "xdxdxdxd",
                "__typename": "User"
            },
            "flags": {
                "is3DSecureRequired": false,
                "__typename": "CheckoutSessionFlags"
            },
            "fundingOptions": [
                {
                    "allPlans": [
                        {
                            "fundingSources": [
                                {
                                    "fundingInstrument": {
                                        "id": "xdxdxdxd",
                                        "__typename": "FundingInstrument"
                                    },
                                    "amount": {
                                        "currencyCode": "USD",
                                        "currencyValue": "143.00",
                                        "__typename": "Amount"
                                    },
                                    "__typename": "FundingSource"
                                }
                            ],
                            "__typename": "Plan"
                        }
                    ],
                    "__typename": "FundingOption"
                }
            ],
            "__typename": "CheckoutSession",
            "paymentContingencies": {
                "threeDomainSecure": null,
                "threeDSContingencyData": null,
                "__typename": "PaymentContingencies"
            }
        }
    },
    "extensions": {
        "tracing": {
            "version": 1,
            "startTime": "2022-12-14T01:19:25.317Z",
            "endTime": "2022-12-14T01:19:28.295Z",
            "duration": 2978394125,
            "execution": {
                "resolvers": [
                    {
                        "path": [
                            "onboardAccount"
                        ],
                        "parentType": "Mutation",
                        "fieldName": "onboardGuest",
                        "returnType": "CheckoutSession",
                        "startOffset": 1634057,
                        "duration": 2976445842
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "buyer"
                        ],
                        "parentType": "CheckoutSession",
                        "fieldName": "buyer",
                        "returnType": "User",
                        "startOffset": 2978119914,
                        "duration": 17412
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "buyer",
                            "auth"
                        ],
                        "parentType": "User",
                        "fieldName": "auth",
                        "returnType": "Auth",
                        "startOffset": 2978150241,
                        "duration": 2423
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "buyer",
                            "auth",
                            "accessToken"
                        ],
                        "parentType": "Auth",
                        "fieldName": "accessToken",
                        "returnType": "String",
                        "startOffset": 2978165195,
                        "duration": 4346
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "buyer",
                            "userId"
                        ],
                        "parentType": "User",
                        "fieldName": "userId",
                        "returnType": "String",
                        "startOffset": 2978176870,
                        "duration": 1943
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "flags"
                        ],
                        "parentType": "CheckoutSession",
                        "fieldName": "flags",
                        "returnType": "CheckoutSessionFlags",
                        "startOffset": 2978184480,
                        "duration": 2293
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "flags",
                            "is3DSecureRequired"
                        ],
                        "parentType": "CheckoutSessionFlags",
                        "fieldName": "is3DSecureRequired",
                        "returnType": "Boolean",
                        "startOffset": 2978196958,
                        "duration": 1775
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "fundingOptions"
                        ],
                        "parentType": "CheckoutSession",
                        "fieldName": "fundingOptions",
                        "returnType": "[FundingOption]",
                        "startOffset": 2978221076,
                        "duration": 3429
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "fundingOptions",
                            0,
                            "allPlans"
                        ],
                        "parentType": "FundingOption",
                        "fieldName": "allPlans",
                        "returnType": "[Plan]",
                        "startOffset": 2978239254,
                        "duration": 2848
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "fundingOptions",
                            0,
                            "allPlans",
                            0,
                            "fundingSources"
                        ],
                        "parentType": "Plan",
                        "fieldName": "fundingSources",
                        "returnType": "[FundingSource]",
                        "startOffset": 2978255177,
                        "duration": 2244
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "fundingOptions",
                            0,
                            "allPlans",
                            0,
                            "fundingSources",
                            0,
                            "fundingInstrument"
                        ],
                        "parentType": "FundingSource",
                        "fieldName": "fundingInstrument",
                        "returnType": "FundingInstrument",
                        "startOffset": 2978270659,
                        "duration": 1753
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "fundingOptions",
                            0,
                            "allPlans",
                            0,
                            "fundingSources",
                            0,
                            "fundingInstrument",
                            "id"
                        ],
                        "parentType": "FundingInstrument",
                        "fieldName": "id",
                        "returnType": "ID",
                        "startOffset": 2978282945,
                        "duration": 1916
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "fundingOptions",
                            0,
                            "allPlans",
                            0,
                            "fundingSources",
                            0,
                            "amount"
                        ],
                        "parentType": "FundingSource",
                        "fieldName": "amount",
                        "returnType": "Amount",
                        "startOffset": 2978293554,
                        "duration": 1690
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "fundingOptions",
                            0,
                            "allPlans",
                            0,
                            "fundingSources",
                            0,
                            "amount",
                            "currencyCode"
                        ],
                        "parentType": "Amount",
                        "fieldName": "currencyCode",
                        "returnType": "SupportedCountryCurrencies",
                        "startOffset": 2978308901,
                        "duration": 2198
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "fundingOptions",
                            0,
                            "allPlans",
                            0,
                            "fundingSources",
                            0,
                            "amount",
                            "currencyValue"
                        ],
                        "parentType": "Amount",
                        "fieldName": "currencyValue",
                        "returnType": "String",
                        "startOffset": 2978319486,
                        "duration": 1732
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "paymentContingencies"
                        ],
                        "parentType": "CheckoutSession",
                        "fieldName": "paymentContingencies",
                        "returnType": "PaymentContingencies",
                        "startOffset": 2978332598,
                        "duration": 1734
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "paymentContingencies",
                            "threeDomainSecure"
                        ],
                        "parentType": "PaymentContingencies",
                        "fieldName": "threeDomainSecure",
                        "returnType": "ThreeDomainSecureContingency",
                        "startOffset": 2978347718,
                        "duration": 1725
                    },
                    {
                        "path": [
                            "onboardAccount",
                            "paymentContingencies",
                            "threeDSContingencyData"
                        ],
                        "parentType": "PaymentContingencies",
                        "fieldName": "threeDSContingencyData",
                        "returnType": "ThreeDomainSecureResolutionContingency",
                        "startOffset": 2978354606,
                        "duration": 2072
                    }
                ]
            }
        },
        "correlationId": "f1689777dbaf3"
    }
};

function sessionTest(body){
    let { errors, data } = body;
    
    // if(errors)
    //     return reject({ message: "Failed Creating Paypal Session!" });
    
    let { buyer, fundingOptions } = data.onboardAccount;
    let { auth, userId } = buyer;
    let paypalAccessToken = auth.accessToken;
    let paypalPayerId = userId;
    console.log(paypalAccessToken);
    console.log(paypalPayerId);
    console.log(paypalInstrumentId);
};

sessionTest(sessionSuccess);