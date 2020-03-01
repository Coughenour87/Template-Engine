const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);

        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getOfficeNumber() {
        return this.getOfficeNumber;
    }
    getRole() {
        return this.getRole;
    }
}
module.exports = Manager;