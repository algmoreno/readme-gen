const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
    type: "text",
    name: "title",
    message: "Title of your project"
    },
    {
    type: "text",
    name: "username",
    message: "What is your GitHub username?"
    },
    {
    type: "text",
    name: "description",
    message: "Give a 3-5 sentence description of what inspired this project"
    },
    
    {
    type: "text",
    name: "installation",
    message: "Please describe the installation process"
    },
    {
    type: "text",
    name: "usage",
    message: "How can we use your program?"
    },
    {
    type: "list",
    name: "license",
    message: "Please select a license for this project.",
    choices: [
        "BSD",
        "Apache",
        "Boost",
        "MIT",
        "Mozilla",
        ],
    },
    {
    type: "text",
    name: "contribute",
    message: "How can we contribute to your project?",
    },
    {
    type: "input",
    name: "tests",
    message: "Please enter any necessary testing instructions for the project.",
    },
    {
    type: "text",
    name: "email",
    message: "What is your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data,null, " "));
        writeToFile("../Readme.md", data);
    })
}

// Function call to initialize app
init();
