// Import our required modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Promisify our writeFile function
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
      name: "content",
      message: "Enter the table of content for this readme?"
    },
    {
      type: "input",
      name: "instruction",
      message: "Describe how this application should be installed"
    },
    {
      type: "input",
      name: "usage",
      message: "How should this application should be used"
    },
    {
      type: "input",
      name: "license",
      message: "Please enter license options"
    },
    {
        type: "input",
        name: "contributors",
        message: "Please add contributors"
      },
      {
        type: "input",
        name: "test",
        message: "Please provide test instructions"
      },
      {
        type: "input",
        name: "github",
        message: "Please enter GitHub username  and profile url"
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email Address"
      },
      {
        type: "input",
        name: "contact",
        message: "Please add instructions on how you want to be contacted"
      }
  ]);
}
