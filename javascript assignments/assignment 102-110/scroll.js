btn = document.querySelector("button");

window.onscroll = function(){
    if (scrollY >= 800 ){
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}

btn.onclick = function(){
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
}