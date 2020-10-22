// Import our required modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Choices = require("inquirer/lib/objects/choices");

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
      name: "Installation",
      message: "Describe how this application should be installed"
    },
    {
      type: "input",
      name: "usage",
      message: "How should this application should be used"
    },
    {
      type: "input",
      name: "licenses",
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
        name: "username",
        message: "Please enter GitHub username "
      },
      {
        type: "input",
        name: "github",
        message: "Please enter GitHub profile url "
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
-[Description](#description)

-[Installation](#installation)

-[Usage](#usage)

-[Licenses](#licenses)

-[Contribution](#contribution)

-[Test](#test)

-[Username](#username)

-[Profile](#profile

## Username:
  ${response.username}

## Description:             
  ${response.description}

## Installation:              
   ${response.Installation}

## Usage:              
  ${response.usage}

## Licenses:             
  ${response.licenses}

## Contribution:            
  ${response.contribution}

## Test:            
  ${response.test}

## Email:             
  ${response.email}

## Profile:             
  ${response.github}
    `;
}
module.exports = generateReadme;

promptUser()
  .then(function(response) {
    const readMe = generateReadme(response);

    // Write contents of html to index.html
    return writeFileAsync("README.md", readMe);
  })
  .then(function() {
    console.log("Successfully wrote the readme file");
  })
  .catch(function(err) {
    console.log(err);
  });