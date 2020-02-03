class Student{
    fullName : string;
    constructor(public firstName: string, public middleInital: string, public lastName: string){
        this.fullName = firstName + " " + middleInital + " " + lastName;
    }
}
interface Person{
    firstName:string;
    lastName:string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {firstName:"봉우", lastName: "이"};

document.body.innerHTML = greeter(user);