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
        name: "contribution",
        message: "Please add contributors"
      },
      {
        type: "input",
        name: "test",
        message: "Please instructions on how to test this application"
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
        name: "questions",
        message: "Have any questions? Enter it here"
      }
  ]);
}

function generateReadme(response){
    return `
             # ${response.title}
             #### links and url
             ${response.github}
             ${response.email}
            ### Table of Content
            * Project Title
            * Description
            * Installation instructions
            * Usage information
            * License
            * Contribution Guidelines
            * Test Instructions
            * Questions
            ## Project Description
            ${response.description}
            ## Installation Instructions
            ${response.instruction}
            ## Usage Information
            ${response.usage}
            ## License
            ${response.license}
            ## Contribution Guidelines
            ${response.contribution}
            ## Testing Guidelines
            ${response.test}
            ## Questions
            Having questions, reach me through ${response.github} or directly send me 
            and Email to ${response.email}


    `;
}