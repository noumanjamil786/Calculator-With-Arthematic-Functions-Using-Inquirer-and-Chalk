#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message : "Enter Your First Number", type : "number", name : "firstnumber"},
    {message : "Enter Your Second Number", type : "number", name : "secondnumber"},
    {message : "Please Select Operator to Perform",
     name : "Operator",
     type : "list",
     choices : ["Addition","Subtraction","Multiplication","Division","Exponentation","Modulus"]
}]);
    if(answer.Operator === "Addition"){
    console.log(chalk.green.bold(answer.firstnumber + answer.secondnumber));
} else  if(answer.Operator === "Subtraction"){
    console.log(chalk.red.bold(answer.firstnumber - answer.secondnumber));
} else  if(answer.Operator === "Multiplication"){
    console.log(chalk.blue.bold(answer.firstnumber * answer.secondnumber));
} else  if(answer.Operator === "Division"){
    console.log(chalk.gray.bold(answer.firstnumber / answer.secondnumber));
} else  if(answer.Operator === "Exponentation"){
    console.log(chalk.grey.bold(answer.firstnumber ** answer.secondnumber));
}else  if(answer.Operator === "Modulus"){
        console.log(chalk.bgBlue.bold(answer.firstnumber % answer.secondnumber));
}else{
    console.log(chalk.red.bold("Invalid Operator! Please Chose Valid Operator"));
}