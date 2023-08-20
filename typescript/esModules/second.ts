// declare and export
export let b = "I am b from second.ts";
export let c = "I am c form second.ts";
export const array = ["a", "b", "c"];
export const person = {
  name: "Jahanzaib",
  age: 24,
  gender: "male",
};

export const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

const subtraction = (num1: number, num2: number) => {
  return num1 - num2;
};

const multiple = (num1: number, num2: number) => {
  return num1 - num2;
};

// export from end
export { subtraction, multiple };
//object export
