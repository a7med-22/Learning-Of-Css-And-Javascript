// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//         return `${zName.slice(0, zName.indexOf(" "))}${zName.substr(zName.indexOf(" "), 2).toUpperCase()}`;
//     }
  
//     function ageWithMessage(zAge) {
//         return `Your Age Is ${parseInt(zAge)}`;
//     }
  
//     function countryTwoLetters(zCountry) {
//         return `You Live In ${zCountry.substr(0, 2).toUpperCase()}`;
//     }
  
//     function fullDetails() {
//         return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
//     }
  
//     return fullDetails();
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

// //   function itsMe() {
// //     return `Iam A Normal Function`;
// //   }

//   let itsMe= ()=>`Iam A Normal Function`;
  
//   console.log(itsMe()); // Iam A Normal Function


// //   function urlCreate(protocol, web, tld) {
// //     return `${protocol}://www.${web}.${tld}`;
// //   }

//   let urlCreate=(protocol, web, tld)=>`${protocol}://www.${web}.${tld}`;
  
//   console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


//   let checker=(zName)=> (status) => (salary)=> status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

  
//   console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
//   console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble



//   function specialMix(...data) {
//     let result =0;
//     for (let i =0; i<data.length ;i++){
//         if (typeof data[i] === "number"){
//             result +=data[i];
//         }
//         else if (typeof data[i] === "string") {
//             if (isNaN(parseInt(data[i]))=== true){
//                 result+= 0;
//             }
//             else{
//                 result+= parseInt(data[i]);
//             }
//         }
//     }
//     if (result === 0){
//         return `All Is Strings`;
//     }
//     return result;
//     // Your Code Here
//   }

  
//   console.log(specialMix(10, 20, 30)); // 60
//   console.log(specialMix("10Test", "Testing", "20Cool")); // 30
//   console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
//   console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


// //   another way 

//   function specialMix(...data) {
//     let result =0;
//     for (let i =0; i<data.length ;i++){
//         if (isNaN(parseInt(data[i]))=== false){
//             result += parseInt(data[i]);
//         }

//     }
//     if (result === 0){
//         return `All Is Strings`;
//     }
//     return result;
//     // Your Code Here
//   }

  
//   console.log(specialMix(10, 20, 30)); // 60
//   console.log(specialMix("10Test", "Testing", "20Cool")); // 30
//   console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
//   console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


let ignoreNumbers ="ELZ123er4o";
let ign=ignoreNumbers.split("").filter(function(ele){
    return isNaN(parseInt(ele))
}).join("");
console.log(ign);
