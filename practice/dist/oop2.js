class Car {
    constructor(model1, year, price) {
        this.model = model1;
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
const car1 = new Car("Tesla", 2020, "2000000$");
console.log("🚀 ~ file: oop2.ts:20 ~ car1:", car1);
console.log(car1.drive());
export {};
