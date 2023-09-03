"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.subtraction = exports.sum = exports.person = exports.rollNumber = exports.c = exports.b = void 0;
//inline export
exports.b = "I am b from second.ts";
exports.c = "I am c from second.ts";
exports.rollNumber = ["PIAIC1", "PIAIC2", "PIAIC3"];
//object notation
let person = {
    name: "Jahanzaib",
    age: 24,
    gender: "male",
};
exports.person = person;
console.log("🚀 ~ file: second.ts:13 ~ person:", person);
const sum = (num1, num2) => {
    return num1 + num2;
};
exports.sum = sum;
const subtraction = (num1, num2) => {
    return num1 - num2;
};
exports.subtraction = subtraction;
const multiply = (num1, num2) => {
    return num1 * num2;
};
exports.multiply = multiply;
