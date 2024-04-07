// function sayHello(theName, theGender) {
//     if (theGender === "Male"){
//         console.log(`Hello Mr ${theName}`);
//     }
//     else if (theGender === "Female"){
//         console.log(`Hello Miss ${theName}`);
//     }
//     else {
//         console.log(`Hello ${theName}`);
//     }
// }
    
  
//   // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"

//   function calculate(firstNum, secondNum, operation) {
//     let result=0;
//     if (firstNum === undefined || secondNum === undefined){
//         console.log(`one of numbers not found`);
//         return ;
//     }
//     else if (operation === "subtract"){
//         result = firstNum - secondNum;
//     }
//     else if (operation === "multiply"){
//         result = firstNum * secondNum;
//     } 
//     else {
//         result = firstNum + secondNum;
        
//     }
//     console.log(`the result is ${result}`);
//   }
  
//   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600


// function createSelectBox(startYear, endYear) {
// document.write(`<select>`);
// for (let i = startYear; i <= endYear; i++) {
//     document.write(`<option value="${i}">${i}</option>`);
// }

// document.write(`</select>`);
//   }


//   createSelectBox(2000, 2021);


function multiply(...numbers){
    let result=1;
    for (let i=0;i<numbers.length;i++){
        if (typeof numbers[i]=== "string"){
            continue;
        }
        result *= Math.trunc(numbers[i]);
    }
    console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000