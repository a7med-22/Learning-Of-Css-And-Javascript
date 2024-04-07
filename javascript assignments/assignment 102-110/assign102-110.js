// let prmptMsg = prompt("Print Number From - To", "Example: 5-20");
// let range = prmptMsg.split("-");
// range = range.sort();

// for (let i=Number(range[0]) ; i <= Number(range[1]) ; i++){
//     console.log(i);
// }



let myDiv = document.querySelector("div");
function countdown() {
    myDiv.textContent -= 1;
    if (myDiv.textContent === "0" ){
        window.location.assign("https://elzero.org")
    }
    if (myDiv.textContent === "5" ){
        window.open("https://elzero.org","_blank","width = 400, height = 400,");
    }

}

let counter = setInterval(countdown, 1000);