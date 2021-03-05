const Manager = require('../lib/Manager');

describe("Manager class", () => {
    const test = new Manager("Steve", 1, "steve@steve.com", "Suite A")
    it("Creating a new Manager should return an Object", () => {
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

    it("Role is Manager", () => {
        expect(test.getRole()).toBe("Manager");
    });

    it("Return manager's office location", () => {
        expect(test.getOfficeNumber()).toBe("Suite A");
    });

});
