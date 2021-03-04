const inquirer = require('inquirer')
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
let title = 'manager'
const team = []
let newEmployee = ''

const questions = () => {
    return inquirer.prompt([
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
        .then((answers) => {
            switch (title) {
                case 'manager':
                    newEmployee = new Manager(answers.name, answers.ID, answers.email)
                    return inquirer.prompt(
                        {
                            type: 'input',
                            name: 'office',
                            message: 'Office #: '
                        }
                    )

                case 'engineer':
                    newEmployee = new Engineer(answers.name, answers.ID, answers.email)
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'github',
                            message: "GitHub username: "
                        }
                    ])

                case 'intern':
                    newEmployee = new Intern(answers.name, answers.ID, answers.email)
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'school',
                            message: 'School name: '
                        }
                    ])

                default:
                    break;
            }
        })
        .then((ans) => {
            newEmployee.push(ans)
            return inquirer.prompt([
                {
                    type: 'list',
                    message: 'Would you like to add more team members?',
                    name: 'title',
                    choices: ['Add Engineer', 'Add Intern', 'No more employees to add']
                }
            ]).then(ans => {
                team.push(newEmployee)
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
        })
}

function init() {
    try {
        questions().then(() => {
            console.log(team);
            // console.log(newEmployee);
        });
        // console.log(team);
    } catch (error) {
        console.log(error);
    }
}

init();
// console.log(team);