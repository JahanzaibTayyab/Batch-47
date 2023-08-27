// These two interfaces are completely
// transferrable in a structural type system:

type Ball = {
  diameter: number;
};

type Sphere = {
  diameter: number;
};

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };
console.log(
  "🚀 ~ file: step05c_structural_typing_object_literals.ts:14 ~ ball:",
  ball
);
console.log(
  "🚀 ~ file: step05c_structural_typing_object_literals.ts:15 ~ sphere:",
  sphere
);

sphere = ball;
console.log(
  "🚀 ~ file: step05c_structural_typing_object_literals.ts:24 ~ sphere:",
  sphere
);
ball = sphere;
console.log(
  "🚀 ~ file: step05c_structural_typing_object_literals.ts:26 ~ ball:",
  ball
);

// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.

type Tube = {
  diameter: number;
  length: number;
};

let tube: Tube = { diameter: 12, length: 3 };

//let ball: Ball = { diameter: 10 };
//tube = ball;//Error
ball = tube;
console.log(
  "🚀 ~ file: step05c_structural_typing_object_literals.ts:47 ~ ball:",
  ball
);

// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.

// TypeScript is comparing each member in the type against
// each other to verify their equality.

//===================================================

// Now lets do it Case By Case

//Case when "FRESH"" object literal are assigned to a variable
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type,
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost.

let myType = { name: "Zia", id: 1 };

//Case 1
myType = { id: 2, name: "Tom" };
myType = { id: 3, name: "Jahanzaib" };
//Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type

//Case 2a
//myType = { id: 2, name_person: "Tom", name: "zia Khan" }; //Case 2a: Error, renamed or missing property
//myType = myType3;
//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

type IndexSignature = {
  id: number;
  [key: string]: any;
};

let x: IndexSignature; //Note now 'x' can have any name, just that the property should be of type string

x = { id: 1, fullname: "Zia khan" }; // Ok, `fullname` matched by index signature
x = { id: 2, age: 60 };
x = { id: 3, firstName: "Zia", lastName: "Khan", age: 60 };
console.log(
  "🚀 ~ file: step05c_structural_typing_object_literals.ts:91 ~ x:",
  x
);

//Case 3
// myType = { id: 2, name: "Tom", age: 22 }; //Case 3: Error, excess property

//=================================================

//Case when STALE object literal are assigned to a variable

let myType2 = { id: 2, name: "Tom" };

//Case 1
myType = myType2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

let myType3 = { id: 2, name_person: "Tom" };
//Case 2a
//myType = myType3; //Case 2: Error, renamed or missing property, rule same for stale and fresh object

//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

//var x: { id: number; [x: string]: any }; //Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: "Zia", age: 60 };
x = y; // Ok, `fullname` matched by index signature
//y = x; // Error

var myType4 = { id: 2, name: "Tom", age: 22 };

//Case 3
myType = myType4; //Case 3: Ok, excess property allowed in case of stale object which is different from fresh object
//myType4=myType // Error
let error1: { foo: number };
//error1 = { foo: 1, baz: 2 }; // Error, excess property `baz`

var error2: { foo: number; bar?: number };
//error2 = { foo: 1, baz: 2 }; // Error, excess or misspelled property `baz`

var a: { foo: number };
var a1 = { foo: 1, baz: 2 };
a = a1; //No Error

var z: { foo: number; bar?: number };
var z1 = { foo: 1, baz: 2 };
z = z1; //No Error

export {};
