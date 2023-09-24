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
class Chef extends Person {
    constructor(name, age, occupation) {
        super(name, age);
        this.occupation = occupation;
    }
    speak() {
        super.speak();
        console.log(`My name is ${this.name}, I am a ${this.occupation} `);
    }
    cook() {
        console.log(`I am cooking`);
    }
}
const chef = new Chef("Jahanzaib", 24, "Chef");
console.log(chef.speak());
export {};
