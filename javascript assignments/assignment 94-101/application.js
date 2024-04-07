// let element = document.querySelector(".close");
// element.onclick = function(){
//     element.parentElement.remove();
// }

// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");

// myDiv.appendChild(myP);
// myP.id = `${myP.id}-clone`;

let myP = document.querySelector("p");

myP.onclick = function(){
    let newP = myP.cloneNode(true);
    newP.className = "clone";
    document.body.appendChild(newP);
}

document.onclick = function(e){
    if(e.target){
        console.log(e.target);
    }
};

