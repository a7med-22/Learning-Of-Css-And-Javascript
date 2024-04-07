let userName = "Elzero";

console.log(userName.charAt(0).toLowerCase());
console.log(userName[0].toLowerCase());
console.log(userName.slice(0,1).toLowerCase());
console.log(userName.substr(0,1).toLowerCase());
console.log(userName.substring(0,1).toLowerCase());
console.log(userName.substring(0,1).toLowerCase().repeat(3));

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True

