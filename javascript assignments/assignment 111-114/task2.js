one = document.querySelector("#one");
two = document.querySelector("#two");
three = document.querySelector("#three");
select = document.querySelector("#select");

one.onblur = function(){
    window.sessionStorage.firstName = one.value;
}
two.onblur = function(){
    window.sessionStorage.lastName = two.value;
}
three.onblur = function(){
    window.sessionStorage.phoneNumber = three.value;
}

select.onchange = function(){
    window.sessionStorage.option = select.value;
}

one.value = window.sessionStorage.firstName;
two.value = window.sessionStorage.lastName;
three.value = window.sessionStorage.phoneNumber;
select.value = window.sessionStorage.option;

console.log(select[select.selectedIndex].textContent);