"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//destructure
const array = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array4 = array.concat(array2);
let obj = {
    fisrtName: "Jhanzaib",
    lastName: "Tayyab",
    piaicClass: "Batch47",
};
console.log("🚀 ~ file: step09d_function_rest_parameter.ts:13 ~ obj:", obj);
//update object
obj = {
    ...obj,
    piaicClass: "Batch39",
};
console.log("🚀 ~ file: step09d_function_rest_parameter.ts:16 ~ obj:", obj);
const array6 = [...array];
const array5 = [...array, ...array2];
function buildName(firstName, restOfName) {
    //Named function with Rest parameters
    return firstName + " " + restOfName.join(" ");
}
const employeeName = buildName("Joseph", ["Samuel", "Lucas", "MacKinzie"]);
//anonymous function type with Rest parameters
const buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
