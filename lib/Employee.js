// TODO: Write code to define and export the Employee class
class Employee {
    // Constructor accepting the arguments name, id, email of employee
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this. email = email;
    }

    // methods asociated
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }

}    

module.exports = Employee;