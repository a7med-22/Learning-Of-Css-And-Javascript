
function createPopUp(){
    myDiv = document.createElement("div");
    myH3 = document.createElement("h2");
    myH3.innerHTML = "welcome";
    myP = document.createElement("p");
    myP.innerHTML = "Welcome To Elzero Web School";

    myDiv.className = "pop-up";
    myDiv.appendChild(myH3);
    myDiv.appendChild(myP);

    myDiv.style = "width: 500px; padding:20px; margin: 50px auto; background-color: #eee;text-align: center; font-family: sans-serif; position: relative";
    myP.style = "padding: 5px; font-family: sans-serif";
    myH3.style = "padding: 5px; color: black";
    document.body.appendChild(myDiv);

    mySpan = document.createElement("span");
    mySpan.innerHTML="X";
    mySpan.id ="closeBtn";
    myDiv.appendChild(mySpan);
    mySpan.style = "width: 30px; height: 30px; border-radius: 50%; background-color: red; padding: 5px; position: absolute; right: 0; top: 0; transform: translate(50%,-50%); line-height: 2; cursor: pointer;font-family: sans-serif"
    
    mySpan.onclick = function () {
        this.parentElement.remove();
    };
    
}

setTimeout(createPopUp , 5000);
