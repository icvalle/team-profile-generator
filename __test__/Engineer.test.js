const Engineer = require("../lib/Engineer");

test("Engineer instance", () => {
    const newEmployee = new Engineer();
    expect(typeof(newEmployee)).toBe("object")
})