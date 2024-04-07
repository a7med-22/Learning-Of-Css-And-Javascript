// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let string = mix.map(function(ele){
//     return isNaN(parseInt(ele))=== true ? ele:"";
// }).reduce(function(acc, current){
//     return acc+current;
// });
// console.log(string);
// // Elzero


let myString = "EElllzzzzzzzeroo";

let filtered = myString.split("").filter(function(ele,index,arr){
    return arr[index]!== arr[index + 1];
}).reduce (function(acc,current){
    return acc + current; 
})
console.log(filtered);
// Elzero


let myArray = ["E", "l", "z", ["e", "r"], "o"];

let indexed_array= myArray.reduce(function(acc, current){
    return acc + current;
}).replace(",","");
console.log(indexed_array);

// Elzero


let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let num_only= numsAndStrings.filter(function(ele){
    return !isNaN(parseInt(ele));
}).map(function(ele){
    return -ele;
});

console.log(num_only);
// [-1, -10, 10, 20, -5, -3]



let nums = [2, 12, 11, 5, 10, 1, 99];
let new_array= nums.reduce(function(acc, current ){
    return current % 2===0 ? current * acc : current + acc;
},1)

console.log(new_array);

// 500