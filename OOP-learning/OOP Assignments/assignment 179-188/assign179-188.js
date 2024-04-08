
// function getData() {
//     let myRequest = new XMLHttpRequest();
//     myRequest.open("get", "./myjson.json");
//     myRequest.send();
//     return new Promise((resolve, reject) => {
//         myRequest.onload = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 resolve(JSON.parse(this.responseText));
//             }
//             else {
//                 reject(Error("There Is Something Wrong With The File"))
//             }
//         }
//     })
// }

// getData().then((myData) => {
//     myData.length = 5;
//     return myData;
// }).then((myData) => {
//     myData.forEach(item => {
//         appendElement("div", "h3", item.title);
//         appendElement("div", "p", item.description);
        
//     });
// }).catch((reason) =>
// console.log(`Error : ${reason}`))
// .finally(() => {
//     console.log("operation done");
// })


function appendElement(parent, tag, text) {
    let myParent = document.createElement(parent);
    myElement = document.createElement(tag);
    if (text) {
        let myText = document.createTextNode(text);
        myElement.appendChild(myText);
    }
    myParent.appendChild(myElement);
    return document.body.appendChild(myParent);
}


// ================================================================================

// task 2 (all the last with fetch)

fetch('./myjson.json').then((myPromise) => {
    myData = myPromise.json();
    return myData;
}).then((myData) => {
    myData.length = 5;
    return myData;
}).then((myData) => {
    myData.forEach(item => {
        appendElement("div", "h3", item.title);
        appendElement("div", "p", item.description);
    })
}).catch(() => {
    console.log(Error("something goes wrong"))
}).finally(() => {
    console.log("operation is done.")
})

// ================================================================================


