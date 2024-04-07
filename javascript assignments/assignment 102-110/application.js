// counter1 = setTimeout(function(){
//     console.log(`ahmed osama marey is one only`);
// },3000);


// counter2 = setTimeout(sayHello, 3000 , "mohamed");

// function sayHello(user){
//     console.log(`my name is ${user}`);
// }
// console.log(counter1);

let myDiv = document.querySelector("div");
function countdown() {
    myDiv.textContent -= 1;
    if (myDiv.textContent === "0" ){
    clearInterval(counter);
    }
}

let counter = setInterval(countdown, 1000);


window.scrollTo({
     top: 1000,
     left: 500,
     behavior: "smooth" 
})


