// task 1

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(http(\w)?:\/\/)?(www.)?\w+.org(:\d{4}\/\w+.\w+?\w+\?\w+=\d+&\w+=\w+)?/ig; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

// ==========================================================================
// task 2 
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let reg = /\d{4}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/;
console.log(ip.match(reg));
    


// ==================================================================================
// task 3
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let reg1 = /os(\d+)?o/ig;
console.log(specialNames.match(reg1));

// Output
// ['Os10O', 'OsO', 'Os100O']
// ========================================================================================
// task4
let phone = "+(995)-123 (4567)";
let reg2 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;
console.log(phone.match(reg2));

// ==================================================================================================
// task 5
let re3 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// ==============================================================================================================
// task 6 
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re4 = /\d{2}(\/|\s-\s|\s)?\d{2}(\/|\s-\s|\s)?\d{0,4}/g; // Write Pattern Here

console.log(date1.match(re4)); // "25/10/1982"
console.log(date2.match(re4)); // "25 - 10 - 1982"
console.log(date3.match(re4)); // "25 10 1982"
console.log(date4.match(re4)); // "25 10 82"
