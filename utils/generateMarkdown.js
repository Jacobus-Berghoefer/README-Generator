// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license
  ?  `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-brightgreen)`
  : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

   const licenseLinks = {
    Apache: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    BSD3: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    BSD2: 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
    //Did not include any Creative Commons badges
    Eclipse: 'https://img.shields.io/badge/License-EPL%201.0-red.svg',
    //Did not include any GNU
    IBM: 'https://img.shields.io/badge/License-IPL%201.0-blue.svg',
    MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    Mozilla: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
    Attribution: 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg',
    ODbL: 'https://img.shields.io/badge/License-ODbL-brightgreen.svg',
    PDDL: 'https://img.shields.io/badge/License-PDDL-brightgreen.svg',
    Perl: 'https://img.shields.io/badge/License-Perl-0298c3.svg',
    Artistic: 'https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg',
    Zlib: 'https://img.shields.io/badge/License-Zlib-lightgrey.svg',
  };

  return licenseLinks[license] || '';

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''; // No license provided
  }

  const licenseLink = renderLicenseLink(license);

  return `
## License

This project is licensed under the [${license}](${licenseLink}) license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);


  return `# ${data.name}
  ${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${data.license ? '- [License](#license)' : ''}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

${licenseSection}

## Contributors

${data.contributors}

## Tests

${data.tests}

## Questions

If you have any questions, feel free to reach out:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

`;
}

export default generateMarkdown;
