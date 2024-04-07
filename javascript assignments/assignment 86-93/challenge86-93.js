let form = document.forms;
let elNum = document.getElementsByName("elements")[0];
let eText = document.getElementsByName("texts")[0];
let input = document.querySelector("select");
let submit = document.querySelector("[type= 'submit']");
let results = document.getElementsByClassName("results")[0];

form[0].onsubmit = function(event){
    event.preventDefault();
    document.querySelectorAll(".box").forEach(event => event.remove());

    for (let i = 1 ; i <= elNum.value ; i++){
        let myEl = document.createElement(input.value);
        let myText = document.createTextNode(eText.value);
        myEl.appendChild(myText);

        myEl.className = "box";
        myEl.title = "element";
        myEl.id = `id-${i}`;

        myEl.style = "color: white ; background-color: #fc5008; text-align: center; border-radius: .5rem ; display: inline-block; margin: 10px 20px; width: 100px; padding: 10px 20px; ";
        results.appendChild(myEl);   
    }
    
};
let inputBoxes = document.querySelectorAll(".input");
for (let i = 0 ; i < inputBoxes.length ; i++){
inputBoxes[i].style = " background-color:#0075ff; color: white; display: block; width: 200px; border: 1px solid black; padding: 10px 20px; margin: 10px auto;";
}
zc 
submit.style = " background-color:#0075ff; color: white; display: block; width: 150px; border: 1px solid black; padding: 10px 20px; margin: 10px auto;"
