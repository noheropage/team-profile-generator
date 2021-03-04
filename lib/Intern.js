const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;

    }

    push(schools) {
        if (!this.school) {
            this.school = schools;
        }
    }

    getSpecial() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;