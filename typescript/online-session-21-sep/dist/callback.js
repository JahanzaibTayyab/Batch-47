"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const callback = (data) => {
    console.log("data", data);
};
function fetchData(callback) {
    console.log("this is console fetchData");
    setTimeout(() => {
        const data = "Hello, world! i am from callback";
        callback(data); // Call the callback function with the fetched data
    }, 1000);
}
console.log("Before fetch Data");
fetchData(callback);
console.log("After fetch Data");
