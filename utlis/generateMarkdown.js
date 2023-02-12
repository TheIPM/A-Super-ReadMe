// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '![License](https://img.shields.io/badge/license-Apache-blue)'
  } else if (license === 'MIT') {
    return '![License](https://img.shields.io/badge/license-MIT-informational)'
  } else if (license === 'GPL') {
    return '![License](https://img.shields.io/badge/license-GPL-blue)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0/'
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT/'
  } else if (license === 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html/'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license[0])}
## Table of Contents
- [Description](#describe)
- [Installation](#install)
- [Usage](#use)
- [Contribution](#contributions)
- [License](#license)
- [Github](#github)
## Description:
 ${data.describe}
## Installation:
${data.install}
## Usage:
${data.use}
## Contribution:
${data.contributions}
## License:
[${data.license[0]}](${renderLicenseLink(data.license[0])})
## GitHub:
[${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;