lis = document.querySelectorAll("ul li");
box = document.querySelector(".experiment")

if (window.localStorage.color){
    box.style.backgroundColor= window.localStorage.color; 
    lis.forEach((li) => {
        li.classList.remove("active");  
    });

    activeElement = document.querySelector(`[data-color = ${window.localStorage.color}]`);
    activeElement.classList.add("active");
}
lis.forEach( li => {
    li.addEventListener("click",(e)=> {
        // console.log(e.target.dataset.color);
        lis.forEach((li) => {
            li.classList.remove("active");  
        });
        e.target.classList.add("active");


        window.localStorage.color = e.target.dataset.color;
        box.style.backgroundColor = window.localStorage.color
    })

    
});