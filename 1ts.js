//boolean
var isDone = false;
console.log(isDone);
//number
var decimal = 10;
var hex = 0xa;
var binary = 10;
var octal = 10;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
//string
var color = "blue";
console.log(color);
color = 'red';
console.log(color);
var fullname = "bob bobbington";
var age = 37;
//+ template
var sentence1 = "Hello, my name is " + fullname + ".\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence1);
var sentence2 = "\nHello, my name is " + fullname + "\n" + "I'll be " + (age + 1) + " years old next month.";
console.log(sentence2);
//+ same result
//array
var list1 = [1, 2, 3];
//+ generic
var list2 = [1, 2, 3];
console.log(list1[0], list1[1], list1[2]);
console.log(list2[0], list2[1], list2[2]);
//tuple
var x;
x = ["hello", 10];
// error x = [10, "hello"]; 
console.log(x[0], x[1]);
//enum(Enumeration)
//+ enum palette {Red, Green, Bule}; //default start 0 
var palette;
(function (palette) {
    palette[palette["Red"] = 1] = "Red";
    palette[palette["Green"] = 2] = "Green";
    palette[palette["Bule"] = 4] = "Bule";
})(palette || (palette = {}));
;
var c = palette.Red;
console.log(c);
c = palette.Green;
console.log(c);
c = palette.Bule;
console.log(c);
var colorname = palette[2];
console.log(colorname);
//any
var notSure = 4;
console.log(notSure);
notSure = "It could be string";
console.log(notSure);
notSure = false;
console.log(notSure);
var list = [1, true, "free"];
list[1] = 100;
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
