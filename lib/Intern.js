// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Inherit from employee
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // getRole()—overridden to return 'Intern'
    getRole() {
        return 'Intern';
    }
}

export default Intern;