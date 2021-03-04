const inquirer = require('inquirer')
const fs = require('fs');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const generateHTML = require('./src/generateHTML')
const generateCard = require('./src/generateHTML')

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
                            name: 'special',
                            message: 'Office #: '
                        }
                    )

                case 'engineer':
                    newEmployee = new Engineer(answers.name, answers.ID, answers.email)
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'special',
                            message: "GitHub username: "
                        }
                    ])

                case 'intern':
                    newEmployee = new Intern(answers.name, answers.ID, answers.email)
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'special',
                            message: 'School name: '
                        }
                    ])

                default:
                    break;
            }
        })
        .then((ans) => {
            newEmployee.push(ans.special)
            return inquirer.prompt([
                {
                    type: 'list',
                    message: 'Would you like to add more team members?',
                    name: 'title',
                    choices: ['Add Engineer', 'Add Intern', 'No more employees to add']
                }
            ]).then(ans => {
                team.push(newEmployee)
                // fs.appendFileSync('./dist/test.html', generateCard(newEmployee))
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

function writeToFile() {
    const completedHTML = generateHTML(team)
    fs.writeFileSync('./dist/test.html', completedHTML);
    console.log('Team profiles created on webpage');
}

function init() {
    try {
        questions().then(() => {
            console.log(team);
            writeToFile()
            // console.log(newEmployee);
        });
        // console.log(team);
    } catch (error) {
        console.log(error);
    }
}

init();
// console.log(team);