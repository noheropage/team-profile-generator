const { it, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

describe("Employee class", () => {
    const test = new Engineer("Steve", 1, "steve@steve.com", "steveisme")
    it("Creating a new Employee should return an Object", () => {
        expect(typeof test).toBe('Object');
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
        expect(test.getRole()).toBe("Engineer");
    });

    it("Github should return the user's github username", () => {
        expect(test.getGithub()).toBe("steveisme");
    });

});
