// //Note: All parameters are required
// let abc = "234";

// //Named function
// function add(x: number, y: number) {
//   let abc = "1234";
//   abc = "3ed";
//   console.log("Function console", abc);
//   return x + y;
// }
// console.log(add(3, 4));
// console.log(abc);
// function (x, y) {

// }
// //Anonymous function
// (x: number, y: number): number => {
//   return x + y;
// };

// //arrow function const add=()=>
// //Anonymous function with explict type

// let myAdd2: (x: number, y: number) => number = function (
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };

// console.log(myAdd2(23, 20));

// //type names dont matter
// let myAdd3: (baseValue: number, increment: number) => number = function (
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };
// //Lambda functions
// let myAdd4 = (a: number, b: number) => a + b;
// //output will be: var myAdd4 = function(a : number, b : number) {return a + b};

// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
//   //...."Welcome"
// }
//  function bye(fn: GreetFunction) {
//   // "bye"
//  }
