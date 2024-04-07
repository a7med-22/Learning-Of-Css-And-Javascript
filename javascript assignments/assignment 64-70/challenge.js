// let names = function (...ar){

//     return `string [${ar[0]} , [${ar[1]}] , [${ar[2]}] , [${ar[3]}]} => Done !`;
// };
// console.log(names("osama", "Mohamed", "ali", "ibrahim"));

// let names = (...ar) => `string [${ar[0]} , [${ar[1]}] , [${ar[2]}] , [${ar[3]}] => Done !`;
// console.log(names("osama", "Mohamed", "ali", "ibrahim"));


let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + nums[0];

console.log(calc(10, myNumbers[0], myNumbers[1] ));