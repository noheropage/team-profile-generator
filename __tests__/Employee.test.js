const Employee = require('../lib/Employee');

describe("Employee class", () => {
    const test = new Employee("Steve", 1, "steve@steve.com")
    it("Creating a new Employee should return an Object", () => {
        expect(typeof test).toBe('object');
    });

    it("Passing in a name should return the name", () => {
        expect(test.getName()).toBe("Steve");
    });

    it("Email should return the email address", () => {
        expect(test.getEmail()).toBe("steve@steve.com");
    });

    it("ID should return employee's ID", () => {
        expect(test.getId()).toBe(1);
    });

    it("Role is Employee", () => {
        expect(test.getRole()).toBe("Employee");
    });

});
