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


//// Function to create engineer object from data input
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
            // create the manager object
            const { name, id, email, github } = data;
            const engineer = new Engineer(name, id, email, github);
            employeeList.push(engineer);
            optionsTeam();
        })
}


managerData();