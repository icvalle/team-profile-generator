const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNUmber){
        super(name, id, email);
        this.officeNumber = officeNUmber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;