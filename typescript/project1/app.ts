console.log("Hello i am from node project");

//objects

let variable = "ede";

const carObject = {
  name: "BMW",
  model: "X5",
  yearOfProduction: 2018,
  isOk: false,
};
console.log("🚀 ~ file: app.ts:13 ~ carObject:", carObject);
console.log(`Car Name:${carObject.name}`);
console.log(`Car Modal:${carObject.model}`);

//bracketing method
console.log(carObject["yearOfProduction"]);

//array of objects

const person = {
  name: "Jahanzaib Tayyab",
  age: 24,
  gender: "male",
  batch: "Batch 47",
};

const students = [
  {
    name: "Jahanzaib Tayyab",
    age: 24,
    gender: "male",
    batch: "Batch 47",
  },
  {
    name: "Jahanzaib Tayyab1",
    age: 24,
    gender: "male",
    batch: "Batch 47",
  },
  {
    name: "Jahanzaib Tayyab2",
    age: 24,
    gender: "male",
    batch: "Batch 45",
  },
  {
    name: "Jahanzaib Tayyab3",
    age: 24,
    gender: "male",
    batch: "Batch 48",
  },
];

for (let s = 0; s < students.length; s++) {
  console.log(
    `Hello i am from batch ${students[s].batch} and my name is ${students[s].name}`
  );
}
