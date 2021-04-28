const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const generateTeamRoster = require("./src/generateTeamRoster");
let teamMembers = [];

menu = () => {
    createManager = () => {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the manager's name",
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
            teamMembers.push(manager);
            //console.log(manager);
            nextTeamMember();
        });
        
    }
    createManager();

    nextTeamMember = () => {
        inquirer.prompt([
            {
                type: "list",
                name: "member",
                message: "Which type of team memeber would you like to add?",
                choices: ['Engineer', 'Intern', 'None']
            }
        ]).then(({member}) => {
            if (member === "Engineer") {
                createEngineer();
            } else if (member === "Intern") {
                createIntern();
            } else {
                 const teamContent = generateTeamRoster(teamMembers);
                 fs.writeFile("./dist/team-roster.html", teamContent, (err) =>
                   err ? console.log(err) : console.log("Successfully created your team roster!")
                 );
            }
        });
    }

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
                name: "github",
                message: "What is the engineer's GitHub username?",
            }
        ]).then(({name, id, email, github}) => {
            const engineer = new Engineer(name, id, email, github);
            teamMembers.push(engineer);
            //console.log(engineer);
            nextTeamMember();
        });
    }
    
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
                name: "school",
                message: "What school does the intern attend?",
            }
        ]).then(({name, id, email, school}) => {
            const intern = new Intern(name, id, email, school);
            teamMembers.push(intern);
            //console.log(intern);
            nextTeamMember();
        });
    }
}

menu();
