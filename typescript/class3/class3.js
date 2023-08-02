"use strict";
// let x;
// console.log(x);
Object.defineProperty(exports, "__esModule", { value: true });
// //null value
// let specialValue = null;
// console.log(specialValue);
//template literal
// let firstName = "Jahanzaib";
// let lastName = "Tayyab";
// let fullName = "Hello" + firstName;
// console.log(fullName, lastName);
// //backtick
// //q3
// //console.log(`${firstName}`);
// console.log(
//   `FirstName:${firstName} , lastName:${lastName} , FullName: ${fullName}`
// );
// //q3
// let personName = "Jahanzaib Tayayb";
// console.log(`Hello ${personName} i am from panaverse`);
// //typeOff
// let num = 123;
// let condition = true;
// console.log("typeOf", typeof firstName);
// console.log("typeOf", typeof num);
// console.log("typeOf", typeof condition);
//arithmetic operator
//Sum Addition +
//Subtraction -
//Multiplication *
//Division /
//Modulus %
// //write a program to add Numbers
// let n1 = 5;
// let n2 = 6;
// console.log(n1 + n2);
// //write a program to subtract Numbers
// console.log(n1 - n2);
// //write a program to multiple Numbers
// console.log(n1 * n2);
// //write a program to divide Numbers
// console.log(n1 / n2);
// //write a program to modules Numbers
// console.log(n1 % n2);
// let n5 = 2;
// let n6 = 6;
// n6 += 6; // n6=n6+6 // 6+6=12
// n6 -= 6; // n6=n6-6 // 12-6=6
// let nl = n5 + "3";
// console.log(3 + "3");
// console.log("typeOf", typeof nl);
//compare ope.
//
let n3 = "2";
//console.log(n1 === n2);
//!= not equal
let n = 5;
console.log(n == 5); //value compare//true
console.log(n === 5); // value compare+ type//true
console.log(n != 5); //false
console.log(n > 8); //false
console.log(n < 8); //true
console.log(n >= 8); //false
console.log(n <= 8); //true
//logical operator
/* && (AND) || (OR),! (NOT) */
console.log(n == 5 && n >= 7); //false
// T T T
// T F F
// F T F
// F F F
console.log(n == 5 || n >= 7); //true
// T T T
// T F T
// F T T
// F F F
console.log(!(n > 6)); //true
//if else
// if (n == 6) {
//   console.log("n", n);
// } else {
//   console.log("Else", n);
// }
//if else if
n = 4;
if (n == 4) {
    console.log("4th");
}
else if (n == 5) {
    console.log("5th");
}
else if (n == 6) {
    console.log("6th");
}
else {
    console.log("Allah ka hukam");
}
let age = 16;
if (age >= 0 && age < 18) {
    console.log("Teenagers");
}
else if (age >= 18 && age < 40) {
    console.log("Younger");
}
else {
    console.log("Old");
}
let num = 337;
if (num % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
//
let alph = "a";
