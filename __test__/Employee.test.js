const employee = require("../lib/Employee");

test("Employee instance", () => {
    const e = new employee();
    expect(typeof(e)).toBe("object")
})