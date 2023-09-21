const callback = (data: string) => {
  console.log("data", data);
};

function fetchData(callback: (data: string) => void) {
  console.log("this is console fetchData");
  setTimeout(() => {
    const data = "Hello, world! i am from callback";
    callback(data); // Call the callback function with the fetched data
  }, 1000);
}
console.log("Before fetch Data");
fetchData(callback);
console.log("After fetch Data");
