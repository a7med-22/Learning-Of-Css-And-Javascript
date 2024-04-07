let myP = document.querySelector("p");
let myDiv = document.querySelector(".our-element");
startDiv = myDiv.cloneNode();
endDiv = myDiv.cloneNode();

myP.remove();
function addElement (ele , txt){
    ele.textContent = txt;
    ele.className = txt.toLowerCase();
    ele.setAttribute("data-value", txt);
    ele.title = `${txt} Element`;
}

addElement(startDiv , "Start");
addElement(endDiv , "End");

myDiv.before(startDiv);
myDiv.after(endDiv);


let span = document.querySelector("span");

console.log(span.parentElement.lastChild.nodeValue.trim());


