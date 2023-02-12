// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utlis/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Can you describe your projec?",
        name: "describe",   
    },
    {
        type: "input",
        message: "How do we install your project",
        name: "install",
    },
    {
        type: "input",
        message: "How do we use your project?",
        name: "use",
    },
    {
        type: "checkbox",
        message: "Select your license",
        choices: ["Apache","MIT", "GPL", "None"],
        name: "license",
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github'
    },
    {
        type:"input",
        message:"Any contributions?",
        name:"contributions"
    },

 ];



// TODO: Create a function to write README file
function writeToFile(readMeMake, data) {
    let content = generateMarkdown(data);
    fs.writeFile(readMeMake, content, function (error) {
     if (error) {
         return console.log(error)
     }
     console.log('Good Job')
    });
 }
 // TODO: Create a function to initialize program
 function init() {
     inquirer.prompt(questions).then(function (data) {
         var readMeMake = 'README.md';
         writeToFile(readMeMake, data)
     });
 }
 // Function call to initialize app
 init();