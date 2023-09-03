let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string>myname).length);

let myValue: string = "345";
console.log(Math.floor(myValue as unknown as number));
