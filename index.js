const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// path.resolve() method resolves a sequence of paths or path segments into an absolute path.
// From working directory:
const OUTPUT_DIR = path.resolve("./", "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let employeeList = [];

// Function to create manager object from data input
function managerData() {
    inquirer.prompt([
            {
                type: 'input',
                message: "What is the team manager's name? ",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is the team manager's ID ? ",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the team manager's email address? ",
                name: 'email'
            },
            {
                type: 'input',
                message: "What is the team manager's Office number? ",
                name: 'officeNumber'
            }
        ]).then((data) => {
            // create the manager object
            const { name, id, email, officeNumber } = data;
            const manager = new Manager(name, id, email, officeNumber);
            // store data in array employeeList
            employeeList.push(manager);
            optionsTeam();
        });
}


// Function to create engineer object from data input
function engineerData() {
    inquirer.prompt([
            {
                type: 'input',
                message: "What is the engineer's name? ",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is the engineer's ID? ",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the engineer's email address: ",
                name: 'email'
            },
            {
                type: 'input',
                message: "What is the engineer's github username: ",
                name: 'github'
            }
        ]).then((data) => {
            // create the engineer object
            const { name, id, email, github } = data;
            const engineer = new Engineer(name, id, email, github);
            employeeList.push(engineer);
            optionsTeam();
        });
}


// Function to create intern object from data input
function internData() {
    inquirer.prompt([
            {
                type: 'input',
                message: "What is the Intern's name? ",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is the Intern's ID: ",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the Intern's email address? ",
                name: 'email'
            },
            {
                type: 'input',
                message: "What is the Intern's school? ",
                name: 'school'
            }
        ]).then((data) => {
            // create the intern object
            const { name, id, email, school } = data;
            const intern = new Intern(name, id, email, school);
            employeeList.push(intern);
            optionsTeam();
        })
}


// function to display the options menu
function optionsTeam() {
    inquirer.prompt([
            {
                type: 'list',
                message: 'Thanks.\nChoose what you want to do from the options given below:',
                name: 'option',
                choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
            }
        ]).then((data) => {
            if (data.option === 'Add an engineer') {
                engineerData();
            } else if (data.option === 'Add an intern') {
                internData();
            } else {
                console.log('Finish team build');
                const employeesData = render(employeeList);
                makeTeam(employeesData);
            }
        });
}


// Make html file creating folder if it doesn't exist
function makeTeam(employeesData) {
    // create the output folder if the folder doesn't exist
    // fs.existsSync() method used to synchronously check if a file already exists
    //As seen in https://www.geeksforgeeks.org/node-js-fs-existssync-method/
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdir((OUTPUT_DIR), (err) => {
            if (err) {
                return console.error(err);
            }
        });
    }


managerData();