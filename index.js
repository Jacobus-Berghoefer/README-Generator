// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the name of this project?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please provide a description for this project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How is this application used?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license does this project use?',
        name: 'license',
        choices: ['Apache', 'BSD3', 'BSD2', 'Eclipse', 'IBM', 'MIT', 'Mozilla', 'Attribution', 'ODbL', 'PDDL', 'Perl', 'Artistic', 'Zlib'],
    },
    {
        type: 'input',
        message: 'Who can contribute to this project?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
]; 

// TODO: Create a function to write README file.
const writeToFile = (fileName, answers) => {
    fileName = 'README.md';
    fs.writeFile(fileName, answers, (err) => {
      err ? console.error(err) : console.log('README created!');
    });
  };

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
};

init();
