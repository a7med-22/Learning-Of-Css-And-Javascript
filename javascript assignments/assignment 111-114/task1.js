font = document.querySelector("#font");
color = document.querySelector("#color");
size = document.querySelector("#size");

font.onchange = function(){
    window.localStorage.font = font.value;
    document.body.style.fontFamily = font.value;
}
color.onchange = function(){
    window.localStorage.color = color.value;
    document.body.style.color = color.value;
}
size.onchange = function(){
    window.localStorage.size = size.value + "px";
    document.body.style.fontSize = size.value  + "px";
}

document.body.style.fontFamily = window.localStorage.font;
document.body.style.color = window.localStorage.color;
document.body.style.fontSize = window.localStorage.size;
font.value = window.localStorage.font;
color.value = window.localStorage.color;
size.value = parseInt(window.localStorage.size);