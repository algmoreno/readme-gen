// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License](https://img.shields.io/badge/License-${license}%201.0-lightblue.svg)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  # Description
  ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributing
  ${data.contribute}

  # Test
  ${data.tests}

  # Questions
  Email: ${data.email}
  Github Username: ${data.username}
  
`;
}

module.exports = generateMarkdown;
