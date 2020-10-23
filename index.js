// Import all required modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateReadme = require("./utils/generateReadme");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
   return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please describe the project/application"
    },
    {
      type: "input",
      name: "installation",
      message: "Describe how this application should be installed",
      default: "npm i"
    },
    {
      type: "input",
      name: "usage",
      message: "How should users use this application"
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license for your project",
      choices: [ "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None" ]
    },
    {
        type: "input",
        name: "contribution",
        message: "What do users need to know to contribute to this project?"
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to test this application?",
        default: "npm test"
      },
      {
        type: "input",
        name: "username",
        message: "Please enter GitHub username "
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email Address"
      },
  ]);
}

// // get response from prompts and write to file
promptUser()
  .then(function(response) {
    const readMe = generateReadme(response);

    // Write contents of the readme to the readme file
    console.log('Making ReadMe file')
    return writeFileAsync("README.md", readMe);
  })
  .then(function() {
    console.log("Successfully created the readme file");
  })
  .catch(function(err) {
    console.log(err);
  });
