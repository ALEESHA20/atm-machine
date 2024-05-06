#! /use/bin/env node
import inquirer from "inquirer";
let myBalance = 100000; //dollars
let myPin = 2105;
let pinAnswer = await inquirer.prompt([
    { name: "pin", message: "please enter your pin number: ", type: "number" },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct PIN number!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "select one of the option",
            type: "list",
            choices: ["withdraw", "balance inquiry", "fast cash"]
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "enteredamount",
                message: "enter your amount: ",
                type: "number"
            }
        ]);
        myBalance -= amountAnswer.enteredamount;
        console.log("your remaining account balance is :" + myBalance);
        if (myBalance < amountAnswer.enteredamount)
            console.log("transaction cannot be completed due to insufficient balance");
    }
    else if (operationAnswer.operation === "balance inquiry")
        console.log("your account balance is :" + myBalance);
    else if (operationAnswer.operation === "fast cash") {
        let amountOptions = await inquirer.prompt([
            {
                name: "optionselected",
                message: "please select one of the options: ",
                type: "list",
                choices: ["30000", "20000", "10000", "5000", "1000", "500"]
            }
        ]);
        myBalance -= amountOptions.optionselected;
        console.log("your remaining account balance is: " + myBalance);
    }
}
else {
    console.log("incorrect PIN number");
}
