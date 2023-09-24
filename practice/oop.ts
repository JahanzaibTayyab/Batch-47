class Car {
  model: string;
  year: number;
  price: string;
  constructor(model: string, year: number, price: string) {
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
  name: string;
  protected age: number;
  constructor(name: string, age: number) {
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
  occupation: string;
  constructor(name: string, age: number, occupation: string) {
    super(name, age);
    this.occupation = occupation;
  }
  speak(): void {
    super.age
    super.speak();
    console.log(`My name is ${this.name}, I am a ${this.occupation} `);
  }
  cook() {
    console.log(`I am cooking`);
  }
}

const person = new Person("Jahanzaib", 24);

const chef = new Chef("Jahanzaib", 24, "Chef");
console.log(chef.);

class Human {
  name: string;
  gender: string;
  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }
  speak2() {
    return `I am speaking`;
  }
}
class Doctor extends Person implements Human {
  gender: string;
  constructor(name: string, gender: string) {
    super(name, 24);
    this.gender = gender;
  }
  speak2() {
    return "I am a doctor";
  }
}
