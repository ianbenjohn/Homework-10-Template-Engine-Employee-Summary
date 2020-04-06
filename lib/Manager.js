Employee = require("../lib/Employee.js");

class Manager extends Employee{
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole(){
    return "Manager";
  }
  getOfficeNumber(){
    return this.officeNumber;
  }
}
module.exports = Manager;

//Passes all the tests when npm run test is ran
