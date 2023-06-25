// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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

// module.exports = generateMarkdown;

const inquirer = require("inquirer");
const fs = require('fs');


const errCallback = (err) => {
  if (err) {
    console.error(err);
  }
};

let title = "";
let description = "";
let installation = "";
let usage = "";
let contribution = "";
let test = "";
let github = "";
let email = "";

inquirer
  .prompt([
    {
      name: "title",
      message: "Please enter the project title.",
    },
    {
      name: "description",
      message: "Enter your description",
    },
    {
      name: "installation",
      message: "Enter your installation instructions",
    },
    {
      name: "usage",
      message: "Enter your usage information",
    },
    {
      name: "contribution",
      message: "Enter your contribution guidelines",
    },
    {
      name: "test",
      message: "Enter your testing instructions",
    },
    {
      name: "github",
      message: "Enter your github username",
    },
    {
      name: "email",
      message: "Enter your email",
    },
  ])
  .then((answerObj) => {
    title = answerObj.title;
    description = answerObj.description;
    installation = answerObj.installation;
    usage = answerObj.usage;
    contribution = answerObj.contribution;
    test = answerObj.test;
    github = answerObj.github;
    email = answerObj.email;
    fs.writeFile("./README.md",
    "#Title: \n" + title + "\n\n" + 
    "##Description: \n" + description + "\n\n" + 
    "##Installation Instructions: \n" + installation + "\n\n" + 
    "##Contributions: \n" + contribution + "\n\n" + 
    "##Tests: \n" + test + "\n\n" +
    "##Github: \n" + github + "\n\n" + 
    "##Email: \n" + email
    ,errCallback);
  });
