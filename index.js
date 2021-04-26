const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");


menu = () => {
    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the manager's name",
                // validate: function (value) {
                //     if (typeof value !== 'name') {
                //     done('You need to provide a name');
                //     return;
                //     }
                // }
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
            },
            {
                type: "input",
                name: "office",
                message: "What is the manager's office number?",
            }
        ]).then(({name, id, email, office}) => {
            const manager = new Manager(name, id, email, office);
            console.log(manager);
        });
    }
    createManager();
    createEngineer = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the engineer's name",
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?",
            },
            {
                type: "input",
                name: "office",
                message: "What is the engineer's GitHub username?",
            }
        ]).then(({name, id, email, github}) => {
            const engineer = new Engineer(name, id, email, github);
            console.log(engineer);
        });
    }
    createEngineer();
    createIntern = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the intern's name",
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
            },
            {
                type: "input",
                name: "office",
                message: "What school does the intern attend?",
            }
        ]).then(({name, id, email, school}) => {
            const intern = new Intern(name, id, email, school);
            console.log(intern);
        });
    }
    createIntern();
}

menu();
