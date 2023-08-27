//types
//Type Aliases
// type , interface

type StudentType = {
  name: string;
  age: number;
  gender: string;
};

interface StudentInterface {
  name: string;
  age: number;
  gender: string;
  address: string;
}

//fresh object
// object type variable declare keya ha sth he es ki value assign kr dy tu ya hota ha fresh object

let student1: StudentType = { name: "sajid", age: 20, gender: "male" };
let student2: StudentInterface = {
  name: "Jahanzaib",
  age: 24,
  gender: "male",
  address: "Lahore",
};

//stale object jo object already declare keya ha on ko value assign krna or jab assign
// krty ha tu left side
// structure compare krty ha

//left side minimum keys fullfill honi chya

student1 = student2; //ok

//student2 = student1; Error

//index signature
// tab use krty ha jab key dynamically arhi ho object my or ap ki es ki
// type na pta ho object ki es case my index signature use krty ha
// in case of fresh object

// [keyname kuch bi ho skta ha : string]: any // any stands for koi bi value ajay es my

type abc = {
  id: number;
  [xcv: string]: any;
};

let x1: abc = { id: 1 };
x1 = { id: 2, fullName: "Jahanzib Tayyab" };
console.log(x1.id, x1.fullName);
x1 = {
  id: 3,
  firstName: "Jahanzaib",
  lastName: "Tayyab",
  age: 24,
  address: "Lahore",
};

console.log(x1.id, x1.fullName);

Object.keys(x1).forEach(function (key, index) {
  console.log(`Key name:${key} and value: ${x1[key]}`);
});
