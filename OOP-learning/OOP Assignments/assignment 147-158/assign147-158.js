// task 1
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car is running Now`;
  }
  stop() {
    return `car is stopped`;
  }
}

let car1 = new Car("toyota", 2022, 200000);
let car2 = new Car("isuzu", 122, 100000);
let car3 = new Car("chevrolet", 540, 300000);

console.log(
  `Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`
);
console.log(car1.run());

// Needed Output

("Car One Name Is MG And Model Is 2022 And Price Is 420000");
("Car Is Running Now");

// ==========================================================================================

// task 2

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
};

class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.s = size || "unknown";
  }
  fullDetails() {
    return `${this.name} serial is ${this.serial} and size is ${this.s}`;
  }
};
// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// ========+++++=============================================++++==========================+++==================

// task 3

// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }

  cardValidation() {
    return this.#c.toString().match(/\d{4}/g).join('-');
  }

  showData() {
    return `Hello ${this.u} your credit card number is ${this.cardValidation()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData());
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData());
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData());
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

// ==============================================================================================

// task4

// Write Your Code Here
String.prototype.addLove = function () {
  return `I love you ${this} Web School`;
}


// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School


// ====================================================================================================

// task 5

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false
  },
  country: {
    enumerable: false,
    configurable: true,
    writable: false

  }
});
console.log(delete myObj.country);
myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}