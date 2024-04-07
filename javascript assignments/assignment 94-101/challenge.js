let newClass = document.querySelector(".classes-to-add");
let removeClass = document.querySelector(".classes-to-remove");
let current = document.querySelector("[title='Current']");
let prnt = document.querySelector(".classes-list div");

function addRem (){
    document.querySelectorAll("span").forEach(el => el.remove());


    for (let i = 0 ; i < this.value.trim().split(" ").length ; i++){
        if (newClass.value){
        current.classList.add(newClass.value.toLowerCase().trim().split(" ")[i]);
        }
        if (removeClass.value){
        current.classList.remove(removeClass.value.toLowerCase().trim().split(" ")[i]);
        }
    }
    this.value = "";

    if (current.classList.length){
        [...current.classList].sort().forEach(el => {
            let span = document.createElement('span');
            span.textContent = el;
            prnt.append(span);
        })
    }
    else {
        prnt.textContent = "No Classes To Show";
    }
    
}
newClass.onblur = addRem;
removeClass.onblur = addRem;
