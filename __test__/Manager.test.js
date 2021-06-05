const Manager = require("../lib/Manager");

describe("Manager class", () => {

    describe("getRole method", () => {
        it("retrieves the role of Manager", () => {
          const newManager = new Manager("John", 2, "john@gmail.com", 150);
          newManager.getRole();
          expect(newManager.getRole()).toBe("Manager");
        });
    });

    describe("getOfficeNumber method", () => {
        it("retrieves Manager's office number", () => {
          const newManager = new Manager("John", 2, "john@gmail.com", 150);
          newManager.getOfficeNumber();
          expect(newManager.officeNumber).toBe(150);
        });
    });
  
});