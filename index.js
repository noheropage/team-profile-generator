const inquirer = require('inquirer')
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
let title = 'manager'
const team = []

const everyoneQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter the ${title}'s name: `,
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Employee ID: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email address: ',
        },
    ])
}

const managerQ = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'office',
            message: 'Office #: '
        }
    ])
}

const engineerQ = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: "GitHub username: "
        }
    ])
}

const internQ = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'School name: '
        }
    ])
}

const addEmployee = () => {
    inquirer.prompt([
        // {
        //     type: 'confirm',
        //     name: 'add employee',
        //     message: 'Would you like to add more team members?',
        // },
        {
            type: 'list',
            name: 'title',
            choices: ['Add Engineer', 'Add Intern', 'No more employees to add']
        }
    ]).then(ans => {
        switch (ans.title) {
            case 'Add Engineer':
                title = 'engineer'
                return questions();
            case 'Add Intern':
                title = 'intern'
                return questions();
            default:
                // end questions
                break;
        }
    })
}

function init() {
    try {
        everyoneQuestions()
        .then(() => {
            switch (title) {
                case 'manager':
                    return managerQ();
                case 'engineer':
                    return engineerQ();
                case 'intern':
                    return internQ();
                default:
                    break;
            }
        }).then(() => {
            addEmployee();
        })
        // questionLoop(title);
        // .then() => {
        //     questionLoop(title);
        // }
        // console.log("Manager recorded")
        // addEmployee().then((inputs) => {
        //     switch (inputs.title) {
        //         case 'Add Engineer':
        //             title = 'engineer'
        //             return engineerQ()
        //         case 'Add Intern':
        //             title = 'intern'
        //             return internQ()
        //         default:
        //             break;
        //     }
        // })
    } catch (error) {
        console.log(error);
    }
}

init();