//void
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
//Null & Undefined
var u = undefined;
var n = null;
console.log(u);
console.log(n);
// //never
function error(message) {
    throw new Error(message);
} //never는 도달할 수 없는 끝 점을 가져야 한다.
function fail() {
    return error("Something failed");
} //리턴 타입이 never로 추정됨
function infiniteLoop() {
    while (true) {
    }
} //never는 도달할 수 없는 끝 점을 가져야 한다.
//type assertions
var someValue = "this is a string";
var strLength1 = someValue.length;
var strLength2 = someValue.length;
console.log(strLength1);
console.log(strLength2);
// var declarations
function f1() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
console.log(f1());
// Scoping rules
function t(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
console.log(t(true));
console.log(t(false));
// 스코프 규칙에 따른 대표적인 실수
// function sumMatrix(matrix : number[][]){
//     var sum = 0;
//     for(var i = 0 ; i < matrix.length; i++){
//         var currentRow = matrix[i];
//         for(var i = 0; i < currentRow.length; i++){
//             sum += currentRow[i];
//         }
//     }
//     return sum;
// }
// Variable capturing quirks
// for (var i = 0; i < 10; i++){
//     setTimeout(function(){console.log(i); }, 100 * i);
// }
// Variable capturing quirks fix
for (var i = 0; i < 10; i++) {
    //IIFE
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i);
}