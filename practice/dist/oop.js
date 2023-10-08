class Car {
    constructor(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
    }
    drive() {
        console.log("The Car has Started driving");
    }
    stop() {
        console.log("The car has stopped");
    }
}
const tesla = new Car("Model X", 2020, "$114,990");
tesla.drive(); // The Car has started Driving!
// inheritance
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`What's for dinner?`);
    }
    speak() {
        console.log(`My name is ${this.name}, I am ${this.age} years old`);
    }
}
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`What's for dinner?`);
    }
    speak() {
        console.log(`My name is ${this.name}, I am ${this.age} years old`);
    }
}
//overloads
// function add(x: number, y: number);
// function add(x: string, y: number);
// function add(x: number, y: number, z: number);
// function add(x: number, y: number, z: number, a: number);
// function add(x: string, y: string);
// function add(x: any, y: any, z: any, a: any) {
//   return x + y + z + a;
// }
// add(3, 5, 7, 8, 6);
class Chef extends Person {
    constructor(name, age, occupation) {
        super(name, age);
        this.occupation = occupation;
    }
    speak() {
        // super.age;
        //super.speak();
        console.log(`My name is ${this.name}, I am a ${this.occupation} `);
    }
    cook() {
        console.log(`I am cooking`);
    }
}
class Student extends Person {
    constructor(name, age, occupation) {
        super(name, age);
        this.occupation = occupation;
        this.student_status = "Enrolled";
    }
    get studentStatus() {
        return this.student_status;
    }
    set studentStatus(status) {
        this.student_status = status;
    }
    speak2() {
        console.log(`I am Student`);
    }
    cook() {
        console.log(`I am cooking`);
    }
}
//const person = new Person("Jahanzaib", 24);
const chef = new Chef("Jahanzaib", 24, "Chef");
const student = new Student("Jahanzaib", 24, "Student");
console.log("🚀 ~ file: oop.ts:112 ~ student:", student);
console.log(student.studentStatus);
student.studentStatus = "PassOut";
student.occupation = "Fail Student";
console.log("🚀 ~ file: oop.ts:112 ~ student:", student);
class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    speak2() {
        return `I am speaking`;
    }
}
class Doctor extends Person {
    constructor(name, gender) {
        super(name, 24);
        this.gender = gender;
    }
    speak2() {
        return "I am a doctor";
    }
}
class A {
    constructor() {
        this.name = "Class A";
    }
    print() {
        console.log("I am class A");
    }
}
class B extends A {
    constructor() {
        super(...arguments);
        this.name = "Class B";
    }
    print() {
        console.log("I am class B");
    }
}
const b = new B();
console.log(b.name);
export {};
