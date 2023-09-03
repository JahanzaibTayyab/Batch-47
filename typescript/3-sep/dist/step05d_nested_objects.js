"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authuor = {
    firstName: "Jahanzaib",
    lastName: "Tayyab",
};
const myBook = {
    author: {
        firstName: "Zia",
        lastName: "Khan",
    },
    name: "My Best Book",
};
console.log("My Book name", myBook.name);
console.log(`My Book Author Name: ${myBook.author.firstName} ${myBook.author.lastName}`);
