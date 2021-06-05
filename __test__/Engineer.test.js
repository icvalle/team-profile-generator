const Engineer = require("../lib/Engineer");

test("Engineer instance", () => {
    const newEngineer = new Engineer();
    expect(typeof(newEngineer)).toBe("object")
})

describe("Engineer class", () => {
    describe("getRole method", () => {
        it("retrieves the role of Engineer", () => {
          const newEngineer = new Engineer("Ashley", 8, "ashley@gmail.com", "AshDoe");
          newEngineer.getRole();
          expect(newEngineer.getRole()).toBe("Engineer");
        });
    });

    describe("getGithub method", () => {
        it("retrieves Engineer's github", () => {
          const newEngineer = new Engineer("Ashley", 8, "ashley@gmail.com", "AshDoe");
          newEngineer.getGithub();
          expect(newEngineer.github).toBe("AshDoe");
        });
    });

});