// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// myFriends.pop();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.length=num;
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// friends.pop();
// friends.shift();

// console.log(friends); // ["Eman", "Osama"]




// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code
// finalArr = (arrOne.concat(arrTwo)).sort().reverse();

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]



// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length][website.length-website.length].slice(website.length)); // ZERO


// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// if (haystack.includes(needle)){
//     console.log("found");
// }

// if (needle === haystack[1]){
//     console.log("found");
// }

// if (haystack.indexOf(needle)){
//     console.log("found");
// }


// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// allArrs = (arr1.concat(arr2).sort().slice(arr2.length).join("")).toLowerCase();

// // Your Code Here

// console.log(allArrs); // fxy

// let myfriends = ["osama", "ahmed", "sayed", "ali", "amira"];

// for (let i= 0 ; i<myfriends.length ; i+=2){
//     console.log(myfriends[i]);
// }

// let products = ["keyboard", "mouse", "pen", "pad", "monitor","iphone"];
// let colors = ["red", "green", "blue"];
// let showcount = 5;

// document.write(`<h1>The Products</h1>`);
// for (let i=0 ; i < showcount; i++){
//     document.write(`<div>`);
//     document.write(`<h3>[${i+1}] ${products[i]}</h3>`);
//     for (let j=0 ; j < colors.length ; j++){
//         document.write(`<p>---${colors[j]}</p>`);
//     }
//     document.write(`${colors.join(" | ")}`);
//     document.write(`</div>`);

// }

