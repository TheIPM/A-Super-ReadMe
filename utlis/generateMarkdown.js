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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;