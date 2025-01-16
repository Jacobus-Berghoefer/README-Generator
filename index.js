// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';


// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'Who is the creator of this README?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the name of this project?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'motive',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'why',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'prob',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn',
    },
    {
        type: 'input',
        message: 'What makes your project stand out?',
        name: 'unique',
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
        const readmeContent = `
#${answers.project}

##Motivation
${answers.motive}

##Why this project was built
${answers.why}

##Problem this project solves
${answers.prob}

##What was learned
${answers.learn}

##What makes this project unique
${answers.unique}
        `;

        writeToFile('README.md', readmeContent);
    });
};

init();




    
    
    
    