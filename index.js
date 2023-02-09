// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "Please write a description of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "What command should be run to install?",
        name: "installation",
    },
    {
        type: "input",
        message: "How can this application be used?",
        name: "usage",
    },
    {
        type: "checkbox",
        message: "What kind of license does this application need?",
        choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
        name: "license",
    },
    {
        type: "input",
        message: "How can I contribute to this application?",
        name: "contributing",
    },
    {
        type: "input",
        message: "How can I test this application?",
        name: "tests",
    },
    {
            type: "input",
            message: "What is your E-mail where people can contact with questions?",
            name: "email",
     },
 ];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();