const inquirer = require('inquirer')

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'Enter the name: ',
        })
    }

    getId() {
        inquirer.prompt({
            type: 'input',
            name: 'ID',
            message: 'Employee ID: ',
        })
    }

    getEmail() {
        inquirer.prompt({
            type: 'input',
            name: 'email',
            message: 'Email address: ',
        })
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;