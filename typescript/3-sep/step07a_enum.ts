enum Color {
  Red,
  Green,
  Blue,
} //starts with 0
var c: Color = Color.Green;

enum Color1 {
  Red = 1,
  Green,
  Blue,
}
// const array=[1,2,3,4,5]
//console.log(array[0])
var colorName: string = Color1[2];
console.log(colorName);

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);

enum Status {
  Progress = "progress",
  passOut = "passOut",
}

console.log(Status);
