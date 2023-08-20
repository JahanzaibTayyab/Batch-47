"use strict";
let myname;
myname = null;
console.log(myname);
myname = "zia";
console.log(myname);
//myname = undefined; //Error
//myname = 12; //Error
let myAge;
myAge = 16; //narrowing
console.log(myAge);
//console.log(myAge.toLowerCase());//Error
myAge = "Dont Know"; //narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types
//can be called even without narrowing
console.log(myAge.toLowerCase()); //Can be called on string
//because of narrowing
// if (){}
//else {}
// condition ? if part : else part
let newAge = Math.random() > 0.6 ? "Khan" : 60;
//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
if (typeof newAge === "string") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
let age;
age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
//age = "living";//Error
let zia;
zia = "zia";
//zia = "khan";//Error
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName.toUpperCase(); // Ok: string
}
//yourName.toUpperCase();//Error: Object is possibly 'undefined'.
yourName === null || yourName === void 0 ? void 0 : yourName.toUpperCase(); //OK
