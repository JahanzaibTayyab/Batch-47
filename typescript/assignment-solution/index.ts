//q2
// Personal Message: Store a person’s name in a variable,
// and print a message to that person. Your message should be simple,
// such as, “Hello Eric, would you like to learn some Python today?”

let name: string = "Eric";
console.log(`Hello ${name}, would you like to learn some Python today?`);

//q3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let q3: string = "ErIc";
console.log(
  `Hello ${q3.toLowerCase()}, would you like to learn some Python today?`
);
console.log(
  `Hello ${q3.toUpperCase()}, would you like to learn some Python today?`
);

const titleCase = q3
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(`Hello ${titleCase}, would you like to learn some Python today?`);

//q4 , q5
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log(
  `Albert Einstein once said, “A person who never made a mistake never tried anything new.”`
);

let famous_person: string = "Albert Einstein";
let message: string =
  "A person who never made a mistake never tried anything new.";
console.log(`${famous_person},  ${message}`);

//q6
/*
Stripping Names: Store a person’s name, and include 
some whitespace characters at the beginning and end of the 
name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
Then print the name after striping the white spaces. */

let q6: string = "   Jahanzaib \n  Tayayb  \t Hy \t developer ";

console.log(name);

//after trim
console.log(name.trim());

//q7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(16 - 8);
console.log(4 * 2);
console.log(64 / 8);

//q8
console.log("-------------------------------------");
console.log(5 + 3);
console.log("-------------------------------------");
console.log(16 - 8);
console.log("-------------------------------------");
console.log(4 * 2);
console.log("-------------------------------------");
console.log(64 / 8);
console.log("-------------------------------------");

//q9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
const fav_number: number = 42;
let fav_number_message: string = `My favorite number is ,  ${fav_number} `;
console.log(fav_number_message);

//q10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//Jahanzaib Tayyab
//This program take two number and return their sum
const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(sum(5, 9));
export {};
