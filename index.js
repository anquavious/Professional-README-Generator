// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {   
        message: "What is the name of the project?",
        name: "ReadME"
    },
    {   
        message: "Please provide a table of contents",
        name: "Table of Contents"
    },
    {  
        message: "Please provide a description of the project",
        name: "Description"
    },
    {   
        message: "What is the installation process?",
        name: "Installation"
    },
    {   
        message: "How will this project be used?",
        name: "Usage"
    },
    {   type: "list",
        message: "What licenses are required with this project?",
        name: "Licenses", 
        choices: ["MIT", "Apache", "Boost", "No License"]
    },
    {   
        message: "Who were the contributors to this project?",
        name: "Contributor"
    },
    {   
        message: "What is the test process for this project?",
        name: "test"
    },
    {   
        message: "What is the user github username?",
        name: "GitHub_username"
    },
    {
        message: "What is your email address for additional questions?",
        name: "User_Email"
    }
];
// TODO: Create a function to write README file
// TODO: Create a function to initialize app

// Function call to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {   
        console.log("ReadMe");
        fs.writeFileSync("README.md", markdown(data));
    })
    .catch((err) => {
        console.log(err);
    })
}

init();