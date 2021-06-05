const Intern = require("../lib/Intern");

test("Intern instance", () => {
    const newIntern = new Intern();
    expect(typeof(newIntern)).toBe("object")
});

describe("Intern class", () => {
    describe("getRole method", () => {
        it("retrieves the role of Intern", () => {
          const newIntern = new Intern("Adam", 6, "adam@gmail.com", "UMBC");
          newIntern.getRole();
          expect(newIntern.getRole()).toBe("Intern");
        });
    });

    describe("getSchool method", () => {
        it("retrieves Intern's School", () => {
          const newIntern = new Intern("Adam", 6, "adam@gmail.com", "UMBC");
          newIntern.getSchool();
          expect(newIntern.school).toBe("UMBC");
        });
    });
});