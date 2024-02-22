const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
let markdown = require('./util/markdown');

//Array collecting data for README
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Enter the title of your project"
    },
    {
        type: "input",
        name: "Description",
        message: "Please enter a description of your project"
    },
    {
        type: "input",
        name: "Installation",
        message:"Enter installation instructions if applicable."
    },
    {
        type: "input",
        name: "Usage",
        message: "Please enter usage information"
    },
    {
        type: "input",
        name: "Contributions",
        message: "Please enter any contributers"
    },
    {
        type: "input",
        name: "Test",
        message: "Please enter test instructions."
    },
    {
        type: "list",
        name: "License",
        message: "What license are you using?",
        choices: ['Academic Free License v3.0',
        'Apache license 2.0',
        'Artistic license 2.0',
        'Boost Software License 1.0',
        'BSD 2-clause',
        'BSD 3-clause',
        'BSD 3-clause Clear',
        'BSD 4-clause',
        'BSD Zero-Clause',
        'Creative Commons',
        'Creative Commons Zero v1.0 Universal',
        'Creative Commons Attribution 4.0',
        'Creative Commons Attribution ShareAlike 4.0',
        'Educational Community License v2.0',
        'Eclipse Public License 1.0',
        'Eclipse Public License 2.0',
        'European Union Public License 1.1',
        'GNU Affero General Public License v3.0',
        'GNU General Public License',
        'GNU General Public License v2.0',
        'GNU General Public License v3.0',
        'GNU Lesser General Public License',
        'GNU Lesser General Public License v2.1',
        'GNU Lesser General Public License v3.0',
        'ISC',
        'LaTeX Project Public License v1.3c',
        'Microsoft Public License',
        'MIT',
        'Mozilla Public License 2.0',
        'Open Software License 3.0',
        'PostgreSQL License',
        'SIL Open Font License 1.1',
        'University of Illinois/NCSA Open Source License',
        'The Unlicense',
        'zLib License',
         ]

    },
    {
        type: "input",
        name: "Name",
        message: "Please enter your GitHub username."
    },
    {
        type: "input",
        name: "Link",
        message: "Enter the link to your GitHub."
    },
    {
        type: "input",
        name: "Deployed",
        message: "Enter the link to your deployed project."
    },
    {
        type: "input",
        name: "Email",
        message: "Enter your email address."
    }
]

//Function writing data to README file
function wrtieToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

//var inquirer = require('inquirer');
 inquirer.prompt(questions).then((answers) => {
      console.log('Creating README.md File...'); 
      wrtieToFile("./dist/README.md", markdown({...answers}))
   })
   .catch((error) => {
      if (error.isTtyError) {
     console.log('Prompt could not be rendered in the current environment') 
     } else {
       
     }
   });