const Employee = require("../lib/Employee");

test("Employee instance", () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe("object")
})

describe("Employee class", () => {
    describe("getName method", () => {
      it("retrieves Employee's name", () => {
        const newEmployee = new Employee("Andrea", 10, "andrea@andrea.com");
        newEmployee.getName();
        expect(newEmployee.name).toBe("Andrea");
      });
    });

    describe("getId method", () => {
        it("retrieves Employee's id", () => {
          const newEmployee = new Employee("Andrea", 10, "andrea@andrea.com");
          newEmployee.getId();
          expect(newEmployee.id).toBe(10);
        });
    });

    describe("getEmail method", () => {
        it("retrieves Employee's email", () => {
          const newEmployee = new Employee("Andrea", 10, "andrea@andrea.com");
          newEmployee.getEmail();
          expect(newEmployee.email).toBe("andrea@andrea.com");
        });
    });

    describe("getRole method", () => {
        it("retrieves Employee's role'", () => {
          const newEmployee = new Employee("Andrea", 10, "andrea@andrea.com");
          newEmployee.getRole();
          expect(newEmployee.getRole()).toBe("Employee");
        });
    });
  
  });