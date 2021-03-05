const Intern = require('../lib/Intern');

describe("Intern class", () => {
    const test = new Intern("Steve", 1, "steve@steve.com", "UW")
    it("Creating a new Intern should return an Object", () => {
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

    it("Role is Intern", () => {
        expect(test.getRole()).toBe("Intern");
    });

    it("Should be able to access intern's school name", () => {
        expect(test.getSchool()).toBe("UW");
    });

});
