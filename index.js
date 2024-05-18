import chalk from "chalk";
import inquirer from "inquirer";
let questions = [
    "What is the largest country in the world by area?",
    "Which is the largest mammal?",
    "In what year was the first iPhone released?",
    "What type of animal is a penguin?",
    "The first search engine on the internet is:",
    "The first computer virus was known as:"
];
let answers = ["Russia", "Blue Whale", "2007", "Bird", "Archie", "Creeper Program"];
let multipleChoices = [
    "China", "United States", "Russia", "Australia",
    "Elephant", "Giraffa", "Blue Whale", "Hippo",
    "2005", "2007", "2008", "2010",
    "Mammal", "Reptile", "Insect", "Bird",
    "Archie", "Google", "Bing", "Yahoo",
    "Rabbit", "ELK Cloner", "SCA Virus", "Creeper Program",
];
let total = questions.length;
let correct = 0;
let wrong = 0;
let choiceIndex = 0;
async function startQuiz() {
    for (let q = 0; q < total; q++) {
        let userAnswer = await inquirer.prompt([
            {
                message: questions[q],
                name: "selectedOption",
                type: "list",
                choices: [
                    multipleChoices[choiceIndex],
                    multipleChoices[choiceIndex + 1],
                    multipleChoices[choiceIndex + 2],
                    multipleChoices[choiceIndex + 3],
                ],
            }
        ]);
        choiceIndex = choiceIndex + 4;
        if (userAnswer.selectedOption == answers[q]) {
            correct++;
        }
        else {
            wrong++;
        }
    }
    result();
}
function result() {
    let statement = "";
    let passingPercentage = Math.round((correct * 100) / total);
    if (passingPercentage >= 50) {
        statement = `\n${chalk.bgGreenBright(chalk.black("Congratulation, You passed the quiz"))}\n
        ${chalk.bold("Total Questions:")} ${total}
        ${chalk.bold("Correct Answers:")} ${correct}
        ${chalk.bold("Wrong Answers  :")} ${wrong}
        ${chalk.bold("Percentage %   :")} ${passingPercentage}`;
    }
    else {
        statement = `\n${chalk.bgRedBright("Sorry, You failed the quiz")}\n
        ${chalk.bold("Total Questions:")} ${total}
        ${chalk.bold("Correct Answers:")} ${correct}
        ${chalk.bold("Wrong Answers  :")} ${wrong}
        ${chalk.bold("Percentage %   :")} ${passingPercentage}`;
    }
    console.log(statement);
}
startQuiz();
