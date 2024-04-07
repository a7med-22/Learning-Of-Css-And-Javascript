let myRequest = new XMLHttpRequest();
myRequest.open("Get", "https://api.github.com/users/a7med-22/repos");
myRequest.send();
console.log(myRequest);
console.log(myRequest.status);

myRequest.onreadystatechange = function () {
    console.log(this.readyState); //begin from receiving the request which means from state 2
    console.log(this.status);

    if (this.readyState === 4 && this.status === 200) {
        console.log(myRequest.responseText); //the same output as using myRequest.response
        let jsData = JSON.parse(myRequest.response);
        console.log(jsData);
        for (let i = 0; i < jsData.length; i++){
            let div = document.createElement('div');
            let repoName = document.createTextNode(jsData[i].full_name);
            div.appendChild(repoName);
            document.body.appendChild(div);
        }
      
    }
};
