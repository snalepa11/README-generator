const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
let generateMarkdown = require('./assets/generateMarkdown');


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
        name: "Installastion",
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
        type: "choice",
        name: "License",
    },
    {
        type: "input",
        name: "Name",
        message: "Please enter your GitHub username, GitHub profile link and email address."
    },
    {
        type: "input",
        name: "Link",
        message: "Enter the link to your GitHub."
    },
    {
        type: "input",
        name: "Email",
        message: "Enter your email address."
    }
]

function wrtieToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

var inquirer = require('inquirer');
 inquirer.prompt(questions).then((answers) => {
      console.log('Creating README.md File...'); 
      wrtieToFile("./README.md", generateMarkdown({...answers}))
   })
   .catch((error) => {
      if (error.isTtyError) {
     console.log('Prompt could not be rendered in the current environment') 
     } else {
       
     }
   });