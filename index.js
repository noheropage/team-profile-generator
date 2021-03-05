const inquirer = require('inquirer')
const fs = require('fs');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const generateHTML = require('./src/generateHTML')

// user to run program will be a manager who is building a profile of the team
let title = 'manager'
const team = []
// let newEmployee = ''

const questions = () => {
    let newEmployee = ''
    // first three questions are the same regardless of role/title
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
    // different roles/titles have different input and output data
    // put current answers into the appropriate class
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
            // add the last title-special question to the current employee profile being built
            newEmployee.push(ans.special)
            return inquirer.prompt([
                {
                    type: 'list',
                    message: 'Would you like to add more team members?',
                    name: 'title',
                    choices: ['Add Engineer', 'Add Intern', 'No more employees to add']
                }
            ]).then(ans => {
                // add the finished employee profile to an array of team members
                team.push(newEmployee)

                // change title to match the next employee
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
    fs.writeFileSync('./dist/index.html', completedHTML);
    console.log('Team profiles created on webpage');
}

function init() {
    try {
        questions().then(() => {
            writeToFile()
        });
    } catch (error) {
        console.log(error);
    }
}

// start program
init();