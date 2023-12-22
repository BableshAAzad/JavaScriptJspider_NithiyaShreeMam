function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Employee.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

let emp1 = new Employee("Bablesh", "AAzad");
let emp2 = new Employee("Sharad", "Sahu");

console.log(emp1.fullName());
console.log(emp2.fullName());