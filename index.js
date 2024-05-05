#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate randon number stage #1
// user input for guessing number stage #2
// compare user input number and computer generated number and show result. stage #3
// const randomnumber = 13;
const randomnumber = Math.floor(Math.random() * 12 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: "Please a number between 1 to 12:",
    }
]);
if (answer.userGuessednumber === randomnumber) {
    console.log("Congrulations! you guessed righ number.");
}
else {
    console.log("your guessed was wrong.");
}
// differnet types of number guessing 
