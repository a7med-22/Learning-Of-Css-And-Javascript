username = document.querySelector(".username");

username.onblur = function(e){
    window.sessionStorage.name = this.value;

}