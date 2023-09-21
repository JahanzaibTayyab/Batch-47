"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (url == "dftgyhjkfghj") {
            resolve("Resolve");
        }
        else {
            reject("Reject");
        }
    });
}
fetchData("dftgyhjkfghj")
    .then((value) => {
    console.log(value);
})
    .catch((error) => {
    console.log("error", error);
})
    .finally(() => {
    console.log("finally");
});
// return new Promise((resolve, reject) => {
//   // Simulate an asynchronous operation, e.g., making an HTTP request
//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       resolve("Data successfully fetched");
//     } else {
//       reject("Error: Unable to fetch data");
//     }
//   }, 1000); // Simulating a delay of 1 second
// });
//   fetchData("https://example.com/api/data")
//     .then((data) => {
//       console.log(data); // Successfully fetched data
//     })
//     .catch((error) => {
//       console.error(error); // Handle errors
//     });
