const inquirer = require('inquirer')
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const questions = () => {
    
    // inquirer.prompt([
    //     {
    //         type: 'list',
    //         name: 'title',
    //         choices: ['Add Engineer', 'Add Intern', 'None']
    //     }
    // ])
    
}

function init() {
    try {
        const employee = new Employee;
    } catch (error) {
        console.log(error);
    }
}

init();