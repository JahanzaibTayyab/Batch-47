"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authuor = {
    firstName: "Jahanzaib",
    lastName: "Tayyab",
    address: {
        city: "Lahore",
        country: "Pakistan",
    },
};
const myBook = {
    author: {
        firstName: "Zia",
        lastName: "Khan",
        address: {
            city: "Karachi",
            country: "Pakistan",
        },
    },
    name: "My Best Book",
};
const myBook2 = {
    author: authuor,
    name: "My Best Book",
};
console.log("My Book name:", myBook.name);
console.log(`My Book Author Name: ${myBook.author.firstName} ${myBook.author.lastName}`);
console.log("Author City:", myBook.author.address.city);
