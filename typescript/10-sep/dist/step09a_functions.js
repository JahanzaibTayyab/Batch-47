"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Note: All parameters are required
let abc = "234";
//Named function
function add(x, y) {
    let abc = "1234";
    abc = "3ed";
    console.log("Function console", abc);
    return x + y;
}
console.log(add(3, 4));
console.log(abc);
//Anonymous function
let myAdd1 = function (x, y) {
    return x + y;
};
//arrow function const add=()=>
//Anonymous function with explict type
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(23, 20));
//type names dont matter
let myAdd3 = function (x, y) {
    return x + y;
};
//Lambda functions
let myAdd4 = (a, b) => a + b;
function greeter(fn) {
    //....
}
