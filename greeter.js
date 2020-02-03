var Student = /** @class */ (function () {
    function Student(firstName, middleInital, lastName) {
        this.firstName = firstName;
        this.middleInital = middleInital;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInital + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "봉우", lastName: "이" };
document.body.innerHTML = greeter(user);
