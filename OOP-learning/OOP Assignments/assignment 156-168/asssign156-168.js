// task1
let currentDate = new Date();

let BirthdayDate = new Date("12 22 2001");

let yearsDifference = currentDate - BirthdayDate;

let myBirthday = currentDate - yearsDifference;

console.log(myBirthday / 1000);
console.log(myBirthday / (1000 * 60));
console.log(myBirthday / (1000 * 60 * 60));
console.log(myBirthday / (1000 * 60 * 60 * 24));
console.log(myBirthday / (1000 * 60 * 60 * 24 * 365));

console.log(myBirthday);

// ================================================================================================

// task2

let specificDate = new Date();
specificDate.setFullYear(1980);
specificDate.setHours(0, 0, 1);
specificDate.setMonth(0, 1);
console.log(specificDate);

// ============================================================================================================

// task 3

let currentDate1 = new Date();

currentDate1.setDate(0);

console.log(currentDate1);

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthName = months[currentDate1.getMonth()];

console.log(
  `Previous Month Is ${monthName} And Last Day Is ${currentDate1.getDate()}`
);

// ============================================================================================

// task4

// 1st Way
let myBirthday1 = new Date("12 22 2001");

console.log(myBirthday1);

// 2nd way

let date = new Date("0");
date.setFullYear(2001, 11, 22);
console.log(date);

// 3rd way
let myBirthday2 = new Date("12/22/2001");

console.log(myBirthday2);

// ============================================================================================================

// task 5

// let start = new Date();

// for (let i = 1; i < 100000; i++) {
//   document.write(`<div>${i}</div>`);
// }

// let end = new Date();

// let duration = end - start;

// console.log(`Loop Took ${duration}`);

// // another way

// let start1 = performance.now();

// for (let i = 1; i < 100000; i++) {
//   document.write(`<div>${i}</div>`);
// }

// let end1 = performance.now();

// let duration1 = end1 - start1;

// console.log(`Loop Took ${duration1}`);

// ==========================================================================================================================

// task 6

// Write Your Generator Function Here
function* gen() {
    let index = 0;
    while (true) {
        yield index++
    }
}
let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

console.log("=".repeat(70));
// task 7 


function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
    let set = new Set(genNumbers());
    let set1 = new Set(genLetters());
    yield* set;
    yield* set1;
}

let generator1 = genAll();

console.log(generator1.next()); // {value: 1, done: false}
console.log(generator1.next()); // {value: 2, done: false}
console.log(generator1.next()); // {value: 3, done: false}
console.log(generator1.next()); // {value: 4, done: false}
console.log(generator1.next()); // {value: 5, done: false}
console.log(generator1.next()); // {value: "A", done: false}
console.log(generator1.next()); // {value: "B", done: false}
console.log(generator1.next()); // {value: "C", done: false}
console.log(generator1.next()); // {value: "D", done: false}

// =======================================================================================================


