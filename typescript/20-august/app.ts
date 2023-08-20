//imports always on top of the file
import a from "./first";
//relative path to import
import { b, c, sum, subtraction, person } from "./second";
console.log("🚀 ~ file: app.ts:5 ~ subtraction:", subtraction(9, 5));
console.log("🚀 ~ file: app.ts:5 ~ person:", person);
console.log("🚀 ~ file: app.ts:5 ~ sum:", sum(3, 4));
console.log("🚀 ~ file: app.ts:5 ~ c:", c);
console.log("🚀 ~ file: app.ts:5 ~ b:", b);
//empty object is used for side effects only, no value returned.
console.log("🚀 ~ file: app.ts:3 ~ a:", a);

console.log("i am from app.ts");
