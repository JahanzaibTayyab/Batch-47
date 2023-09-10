"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    // else return firstName;
    //return lastName ? firstName + " " + lastName : firstName;
    return lastName ? `${firstName} ${lastName}` : firstName;
}
let result1 = buildName("Bob"); //ok
//let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName("Bob", "Adams"); //also ok
//anonymous function type with optional parameters
const buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName ?? "";
};
