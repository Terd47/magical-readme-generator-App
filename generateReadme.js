
function showLicenseBadge(license) {
    if (license !== "None") {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ''
  }
  
  // Readme Markup structure 
function generateReadme(response){
    return `
# ${response.title}

## Profile and Email

${response.username}

${response.email}

${showLicenseBadge(response.license)}

## Table of Content
-[Description](#description)

-[Installation](#installation)

-[Usage](#usage)

-[Licenses](#licenses)

-[Contribution](#contribution)

-[Test](#test)

-[Profile](#profile)

-[Questions](#profile)

## Username:
  ${response.username}

## Description:             
  ${response.description}

## Installation:   
The following command should be run to install necessary dependencies  
   \`\`\`         
   ${response.installation}
   \`\`\`

## Usage:              
  ${response.usage}

## Licenses:          
This application is licensed under the  ${response.license} License
${showLicenseBadge(response.license)}
 
## Contribution:            
  ${response.contribution}

## Test:      
  To test this appliaction, run the following command
  \`\`\`      
  ${response.test}
  \`\`\`

## Profile:             
  [${response.username}](https://github.com/${response.username}/)

## Questions:
  For any questions or inquiries, you can you can open an issue or reach me directly through at ${response.email}
   to see my other works, checkout my github at [${response.username}](https://github.com/${response.username}/).
    `;
}

module.exports = generateReadme;