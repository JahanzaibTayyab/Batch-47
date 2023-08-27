// anonymous

let teacher: { name: string; exp: number };

teacher = {
  name: "Zeeshan",
  exp: 10,
};

let teacher2: { name: string; exp: number };

teacher2 = {
  name: "Zia Khan",
  exp: 10,
};

// Aliased Object Type
type Student = {
  name: string;
  age?: number;
};

let student: Student = {
  name: "Hira",
  age: 30,
};

let student2: Student = {
  name: "Hira",
  age: 30,
};
let student3: Student = {
  name: "Hira",
  age: 30,
};

console.log(student["name"]);
console.log(student.age);

// Interfaces

interface Manager {
  name: string;
  subordiates?: number;
}

let storeManager: Manager = {
  name: "Bilal",
};
console.log(
  "🚀 ~ file: step05b_object_aliased.ts:50 ~ storeManager:",
  storeManager
);

let storeManager2: Manager = {
  name: "Jahanzaib",
  subordiates: 4,
};
console.log(
  "🚀 ~ file: step05b_object_aliased.ts:56 ~ storeManager2:",
  storeManager2
);
