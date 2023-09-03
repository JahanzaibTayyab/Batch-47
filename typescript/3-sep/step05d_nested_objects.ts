type Address = {
  city: string;
  country: string;
};

type Author = {
  firstName: string;
  lastName: string;
  address: Address;
};

const authuor: Author = {
  firstName: "Jahanzaib",
  lastName: "Tayyab",
  address: {
    city: "Lahore",
    country: "Pakistan",
  },
};

type Book = {
  author: Author;
  name: string;
};

const myBook: Book = {
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

const myBook2: Book = {
  author: authuor,
  name: "My Best Book",
};

console.log("My Book name:", myBook.name);
console.log(
  `My Book Author Name: ${myBook.author.firstName} ${myBook.author.lastName}`
);
console.log("Author City:", myBook.author.address.city);
