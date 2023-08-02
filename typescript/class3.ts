//array

let fruit1 = "fruit1";
let fruit2 = "fruit2";
let fruit3 = "fruit3";
let fruit4 = "fruit4";
let fruit5 = "fruit5";

//array declare square bracket []
//values separate , e.g value1,value2,value3
let fruitsArray = ["fruit1", "fruit2", "fruit3", "fruit4"];
////////////////////0           1        2          3
let numberArray = [1, 2, 3, 4, 5, 6];

//print value
console.log("fruit1", fruitsArray[0]); //fruit1
console.log("fruit3", fruitsArray[2]); //fruit3

console.log(numberArray[2]); //3

//pop
console.log("Pop Method");
const removeFruit = fruitsArray.pop();
console.log(removeFruit);
console.log("Array length", fruitsArray.length);
//push
console.log("Push method");
const arrayLength = fruitsArray.push("Fruit5");

console.log("🚀 ~ file: class3.ts:29 ~ arrayLength:", arrayLength);

console.log("🚀 ~ file: class3.ts:29 ~ fruitsArray:", fruitsArray);

//index based value
let pet = [];

pet[0] = "dog";
pet[1] = "cat";
pet[1] = "fish";

//console.log("🚀 ~ file: class3.ts:36 ~ pet:", pet);

//shift
console.log("shift method");
fruitsArray.shift();
console.log("🚀 ~ file: class3.ts:29 ~ fruitsArray:", fruitsArray);

//unshift
console.log("unshift method");
fruitsArray.unshift("1st index value");
console.log("🚀 ~ file: class3.ts:50 ~ fruitsArray:", fruitsArray);

//splice
//add new values
fruitsArray.splice(2, 0, "Lemon", "Banana");
console.log("🚀 ~ file: class3.ts:56 ~ fruitsArray:", fruitsArray);
//delete value
fruitsArray.splice(2, 2);
console.log("🚀 ~ file: class3.ts:59 ~ fruitsArray:", fruitsArray);

//for loop
//i++ equal too i=i+1

console.log("Loop section");
for (let i = 0; i < 5; i++) {
  console.log("Hello i am for panaverse");
}

// i=0 //true , i++ ,
//i=1 //true , i++,
//i=2 //true , i++,
//i=3 //true , i++,
//i=4 //true , i++
//i=5 // false break

for (let i = 0; i < 5; i++) {
  console.log("Hello i am for panaverse", i);
}

const cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "", ""];

//problem
for (let x = 0; x <= 4; x++) {
  if ("Islamabad" === cleanestCities[x]) {
    console.log("It's one of the cleanest cities");
    break;
  } else {
    console.log("No cleanest city found form problem");
  }
}

console.log("2nd Loop");
//solution
let matchFound = false;
for (let i = 0; i <= 4; i++) {
  if ("Islamabad" === cleanestCities[i]) {
    console.log("It's one of the cleanest cities");
    matchFound = true;
    break;
  }
}
if (matchFound === false) {
  console.log("No cleanest city found");
}

//qa

const data = [12, 34, 56, 78, 90, 8, 0, 1, 2, 3, 45, 6, 6, , 7];
for (let i = 0; i < data.length; i++) {
  console.log("This is umber", data[i]);
}
