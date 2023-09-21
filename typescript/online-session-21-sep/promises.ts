function fetchData(url: string) {
  return new Promise((resolve, reject) => {
    if (url == "dftgyhjkfghj") {
      resolve("Resolve");
    } else {
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

//async await
async function f1() {
  return "2+3";
}
await f1();

const data = await fetchData("dtgyhjkfghj");
console.log(data);
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

let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [1, false, "Coding God was here"];
