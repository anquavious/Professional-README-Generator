// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(license === "Boost"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  if(license === "No License"){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ReadME}
  ## Description
  ${data.Description}

  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## Credits
  ${data.Contributor}
  ## License
  ${renderLicenseBadge (data.Licenses)}
  ## Tests
  ${data.test}

  ## Questions
  Github : ${data.GitHub_username} - [${data.GitHub_username}](https://github.com/${data.GitHub_username}) 
  You can also contact me via ${data.User_Email}
`;
}

module.exports = generateMarkdown;
