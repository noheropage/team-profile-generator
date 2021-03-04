const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe("Employee class", () => {
    it("Characters that aren't digits or letters are instantly visible", () => {
      const e = new Employee()
      expect(typeof e).toBe('Object');
    });
  
    it("toString returns _ for letters", () => {
      const e = new Manager('Steve')
      expect(e.getName()).toBe("Steve");
    });
  
    describe("guess", () => {
      it("Correct guess returns true", () => {
        expect(new Letter("j").guess("j")).toBe(true);
      });
  
      it("Incorrect guess returns false", () => {
        expect(new Letter("j").guess("l")).toBe(false);
      });
    });
  
    describe("getSolution", () => {
      it("returns character", () => {
        expect(new Letter("l").getSolution()).toBe("l");
      });
    });
  });
  