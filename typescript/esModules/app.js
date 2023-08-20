// import always on top
import a from "./first.js";
//import multiple values in form of objects
import { b, c, sum, person } from "./second.js";
console.log("🚀 ~ file: app.ts:5 ~ person:", person);
console.log("This is sum", sum(3, 4));
console.log("🚀 ~ file: app.ts:5 ~ c:", c);
console.log("🚀 ~ file: app.ts:5 ~ b:", b);
console.log("🚀 ~ file: app.ts:3 ~ a:", a);
console.log("I am from APP.ts");
