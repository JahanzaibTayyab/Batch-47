//inline export
export let b = "I am b from second.ts";
export let c = "I am c from second.ts";

export let rollNumber = ["PIAIC1", "PIAIC2", "PIAIC3"];

//object notation
let person = {
  name: "Jahanzaib",
  age: 24,
  gender: "male",
};
console.log("🚀 ~ file: second.ts:13 ~ person:", person);

const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

const subtraction = (num1: number, num2: number) => {
  return num1 - num2;
};

const multiply = (num1: number, num2: number) => {
  return num1 * num2;
};

export { person, sum, subtraction, multiply };
