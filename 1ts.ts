
//boolean
var isDone : boolean = false;
console.log(isDone);

//number
var decimal: number = 10;
var hex: number = 0xa;
var binary: number = 0b1010;
var octal: number = 0o12;

console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

//string
var color: string = "blue";
console.log(color);
color = 'red';
console.log(color);

var fullname: string = `bob bobbington`;
var age: number = 37;
//+ template
var sentence1: string = `Hello, my name is ${fullname}.
I'll be ${age + 1} years old next month.`;
console.log(sentence1);
var sentence2: string = "\nHello, my name is " + fullname + "\n" + "I'll be " + (age + 1) + " years old next month.";
console.log(sentence2);
//+ same result

//array
var list1: number[] = [1, 2, 3];
//+ generic
var list2: Array<number> = [1, 2, 3];
console.log(list1[0],list1[1],list1[2]);
console.log(list2[0],list2[1],list2[2]);

//tuple
var x: [string, number];
x = ["hello", 10];
// error x = [10, "hello"]; 
console.log(x[0],x[1]);

//enum(Enumeration)
//+ enum palette {Red, Green, Bule}; //default start 0 
enum palette {Red = 1, Green = 2, Bule = 4};
var c : palette = palette.Red;
console.log(c);
c = palette.Green;
console.log(c);
c = palette.Bule
console.log(c);

let colorname: string = palette[2];

console.log(colorname);


//any
let notSure: any = 4;
console.log(notSure);
notSure = "It could be string";
console.log(notSure);
notSure = false;
console.log(notSure);

let list: any[] = [1, true, "free"];
list[1] = 100;
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);