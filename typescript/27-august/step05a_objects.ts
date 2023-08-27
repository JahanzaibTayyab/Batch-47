let teacher = {
  name: "Zeeshan Khan",
  experience: "10",
};

console.log(teacher.name);
console.log(teacher["experience"]);

let abc: string;

abc = "ABC";

//Type Declaration
let student: {
  name: string;
  age: number;
};

student = {
  name: "Hira",
  age: 30,
};

console.log(student["name"]);
console.log(student.age);
