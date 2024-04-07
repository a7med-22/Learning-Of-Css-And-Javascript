// let num = 110;

// if (num < 10){
//     console.log(`00${num}`);
// }
// else if (num < 100){
//     console.log(`0${num}`);

// }
// else if (num >= 100){
//     console.log(num);
// }

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 === str){
//     console.log(`${num1} is the same value as ${str}`);
// }
// else if (num1 == str ){
//     console.log(`${num1} is the same value as ${str} but not the same type`);
// }
// else if (num1 != str2){
//     console.log(`${num1} is not the same value or the same type as ${str2}`);
// }
// else if (typeof str === typeof str2){
//     console.log(`${str} is the same type as ${str2} but the same value`);
// }

// // Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"


// Edit What You Want Here

let num1 = 22.5;
let num2 = 6;
let num3 = 22.5;
let num4 = 60;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}