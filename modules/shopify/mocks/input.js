const { getMonitorType } = require("../utils");
const chalk = require("chalk");

function inputTest(input, desiredResult){
    let result = getMonitorType(input);

    if(result == desiredResult)
        console.log(chalk.green(`Test Passed | Result: ${result} | Desired Result: ${desiredResult}`));
    else
        console.log(chalk.red(`Test Failed | Result: ${result} | Desired Result: ${desiredResult}`));
};

// inputTest("19438712848512,19438712848512,19438712848512","variant");
// inputTest("+air,+jordan,+1,-low","variant");
// inputTest("https://kith.com/products/nkcv1363-001","link");
