// task 1

// let setOfNumbers = new Set([10]);
// setOfNumbers.add(20).add(2)
// console.log(setOfNumbers);
// console.log([...setOfNumbers][[setOfNumbers.size] - 1]);

// =====================================================================================

// task2

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log([...new Set(myFriends)].sort());

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// ========================================================================================

// task 3

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap = new Map(Object.entries(myInfo));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has('role'));



// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true

// ================================================================================================

// task 4

let theNumber = 100020003000;

theTargetNumber = Number([...new Set([...theNumber.toString()])].filter(el => el !== '0').join(''));
console.log(theTargetNumber);

// Needed Output
// 123

// ================================================================================================================

// task 5
let theName = "Elzero";
console.log(theName.split(''));
console.log([...theName]);
console.log(Array.from(theName));
console.log(Object.assign([], theName))
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']


// ==============================================================================================================================

// task 6

let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let newChars = [];
for (let i = 0; i < chars.length; i++) {
    if (typeof chars[i] === "number") {
        newChars.unshift(chars[i]);
    }
    else {
        newChars.push(chars[i]);
    }
}

console.log(newChars);

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// =======================================================================================================================================

// task 7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let final = [...numsOne, ...numsTwo];
console.log(final)
// Needed Output
// [1, 2, 3, 4, 5, 6]


// =================================================================================================================================================

// task 8

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Number(Math.max(...n1)) * [...n1,...n2].length);
