//void
function warnUser(): void{
    console.log("This is my warning message");
}
warnUser();

//Null & Undefined
let u : undefined = undefined;
let n : null = null;
console.log(u);
console.log(n);

// //never
function error(message: string): never{
    throw new Error(message);
}//never는 도달할 수 없는 끝 점을 가져야 한다.
function fail(){
    return error("Something failed");
}//리턴 타입이 never로 추정됨
function infiniteLoop(): never{
    while(true){
    }
}//never는 도달할 수 없는 끝 점을 가져야 한다.

//type assertions
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
console.log(strLength1);
console.log(strLength2);

function f1(){    
    var a = 1;

    a = 2;
    var b = g();
    a = 3

    return b;

    function g(){
        return a;
    }
}
console.log(f1());


function t(shouldInitialize: boolean){
    if (shouldInitialize){
        var x = 10;
    }

    return x;
}
console.log(t(true));
console.log(t(false));


for(var i = 0; i < 10; i++){
    //IIFE
    (function(i){
    setTimeout(function(){console.log(i); }, 100 * i);
    })(i);
}

