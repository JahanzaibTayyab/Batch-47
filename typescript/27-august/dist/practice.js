//types
//Type Aliases
// type , interface
//fresh object
// object type variable declare keya ha sth he es ki value assign kr dy tu ya hota ha fresh object
let student1 = { name: "sajid", age: 20, gender: "male" };
let student2 = {
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
let x1 = { id: 1 };
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
export {};
