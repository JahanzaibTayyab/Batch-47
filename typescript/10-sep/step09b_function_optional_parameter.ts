// //Named function with optional parameters
// function buildName(firstName: string, lastName?: string): string {
//   if (lastName) return firstName + " " + lastName;
//   else return firstName;
//   // return lastName ? firstName + " " + lastName : firstName;
//   // return lastName ? `${firstName} ${lastName}` : firstName;
// }

// let result1 = buildName("Bob"); //ok
// let result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
// var result3 = buildName("Bob", "Adams"); //also ok

//anonymous function type with optional parameters
const buildName1: (firstName: string, lastName?: string) => string = function (
  firstName?: string,
  lastName?: string
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName ?? "";
};

const classTest = (firstName: string, lastName?: string) => {};

const classTest2 = (firstName: string, lastName = "Khan") => {};
