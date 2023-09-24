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
export {};
