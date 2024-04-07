// let theChosen = document.getElementById("elzero");
// console.log(theChosen);

// let theChosen1 = document.getElementsByClassName("element");
// console.log(theChosen1);


// let theChosen2 = document.getElementsByTagName("div");
// console.log(theChosen2);


// let theChosen3 = document.getElementsByName("js");
// console.log(theChosen3);


// let theChosen4 = document.querySelector(".element");
// console.log(theChosen4);


// let theChosen5 = document.querySelector("#elzero");
// console.log(theChosen5);


// let theChosen6 = document.querySelector("[name='js']");
// console.log(theChosen6);

// let pictures = document.images;

// for (let i = 0 ; i < pictures.length ; i++){
//     pictures[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     pictures[i].alt = "Elzero Logo";
//     pictures[i].style = "background-color: blue; padding: 40px;"
// }




let input = document.querySelector("input");
let result = document.getElementsByClassName("result")[0];

input.oninput = function(){
    
    result.innerHTML = `{${input.value}} USD Dollar = {${(input.value * 15.6).toFixed(2) }} Egyptian Pound`;
}


// let size = document.querySelectorAll("div");
// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// let three = one.getAttribute("title");
// one.setAttribute("title",two.title);
// two.setAttribute("title",three);

// let x = one.textContent;
// one.textContent = two.textContent;
// two.textContent= x + " " +size.length;



let photos = document.images;

for(let i = 0 ; i < photos.length ; i++){
    if (photos[i].hasAttribute("alt")){
        photos[i].alt = "old";
    }
    else {
        photos[i].alt = "Elzero New";
    }
}




