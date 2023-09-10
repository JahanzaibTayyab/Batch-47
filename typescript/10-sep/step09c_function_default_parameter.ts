//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName3(firstName: string, lastName = "Khan"): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

// let result1 = buildName3("Bob"); //works correctly because last parameter is optional
// // let result2 = buildName3("Bob", "Adams", "Sr."); //error, too many parameters
// let result3 = buildName3("Bob", "Adams"); //correct
// console.log(result1);
// console.log(result3);

//anonymous function type with defult parameters
//(Note that the parameter type will be optional when used with defult value)
// let buildName4: (
//   firstName: string,
//   lastName?: string,
//   middleName: string
// ) => string = function (
//   firstName: string,
//   lastName = "Khan",
//   middleName: string
// ): string {
//   if (middleName) return firstName + " " + middleName + " " + lastName;
//   else return firstName + " " + lastName;
// };

// let result4 = buildName4("Bob"); //works correctly because last parameter is optional
//let result2 = buildName4("Bob", undefined, "Adams"); //error, too many parameters
// let result5 = buildName4("Bob", "Adams"); //correct
//console.log(result2);
// console.log(result5);
// console.log("type of buildName4", typeof buildName4);
