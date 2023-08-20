"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//imports always on top of the file
const first_1 = __importDefault(require("./first"));
//relative path to import
const second_1 = require("./second");
console.log("🚀 ~ file: app.ts:5 ~ subtraction:", (0, second_1.subtraction)(9, 5));
console.log("🚀 ~ file: app.ts:5 ~ person:", second_1.person);
console.log("🚀 ~ file: app.ts:5 ~ sum:", (0, second_1.sum)(3, 4));
console.log("🚀 ~ file: app.ts:5 ~ c:", second_1.c);
console.log("🚀 ~ file: app.ts:5 ~ b:", second_1.b);
//empty object is used for side effects only, no value returned.
console.log("🚀 ~ file: app.ts:3 ~ a:", first_1.default);
console.log("i am from app.ts");
