// let declarations
var hello = "Hello!";
console.log(hello);
// Block-scoping
function Block(input) {
    var a = 100;
    if (input) {
        // 'a'는 이곳에서 사용할 수 있다
        var b = a + 1;
        return b;
    }
    // error : 'b'는 여기 존재하지 않는다.
    // return b;
}
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}
// error :  'e'는 여기 존재하지 않는다.
// console.log(e);
// a를 선언하기 전에 사용하는 것은 불법이다.
// a++
// // let a;
// function foo(){
//     // 'a'를 캡쳐한다.
//     return a;
// }
// 잘못된 호출로 a가 선언되기 전 foo가 호출되어 런타임 오류 발생
// foo();
// let a;
// Re-declarations and Shadowing
// var를 선언하는 횟수는 중요하지 않으나 종종 버그의 원인이 된다.
// function re(x){
//     var x;
//     var x;
//     if(true){
//         var x;
//     }
// // }
// let x = 10;
// let x = 20; error : 동일한 스코프에서 'x'를 다시 선언 할 수 없다.
// function overlap(x){
//     let x = 100; error : 매개변수가 변수 선언에 간섭하고 있다.
// }
// function twice(){
//     let x = 100;
//     var x = 100; error : 'x'의 선언을 두 번 할 수 없다.
// }
function f2(condition, x) {
    if (condition) {
        //shadowing
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(f2(false, 0));
console.log(f2(true, 0));
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
// 블럭-스코프 변수 캡쳐
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
console.log(theCityThatAlwaysSleeps());
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
