// let myRequest = new XMLHttpRequest();
// myRequest.open("get", "articles.json", true);
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         let myDataResponse = myRequest.responseText;
//         console.log(myDataResponse);
//         this.onloadend = function () {
//             console.log(`Data Loaded`);
//         };

//         let mainData = JSON.parse(myDataResponse);
//         let parentDiv = document.createElement("div");
//         parentDiv.id = "data";
//         document.body.appendChild(parentDiv);

//         for (let i = 0; i < mainData.length; i++) {
//             let div = document.createElement("div");
//             let h2 = document.createElement("h2");
//             let textH = document.createTextNode(mainData[i]["full_name"]);
//             h2.appendChild(textH);
//             div.appendChild(h2);
//             let p1 = document.createElement("p");
//             let textP1 = document.createTextNode(mainData[i].address);
//             p1.appendChild(textP1);
//             div.appendChild(p1);
//             let p2 = document.createElement("p");
//             let textP2 = document.createTextNode(mainData[i].content);
//             p2.appendChild(textP2);
//             div.appendChild(p2);
//             let p3 = document.createElement("p");
//             let textP3 = document.createTextNode(mainData[i].department);
//             p3.appendChild(textP3);
//             div.appendChild(p3);

//             parentDiv.appendChild(div);
//         }

//         console.log(mainData);
//         updatedData = JSON.stringify(mainData);
//         console.log(updatedData);
//     }
// };




// the same code with reducing the repeat

let myRequest = new XMLHttpRequest();
myRequest.open("get", "articles.json", true);
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let myDataResponse = myRequest.responseText;
        console.log(myDataResponse);
        this.onloadend = function () {
            console.log(`Data Loaded`);
        };

        let mainData = JSON.parse(myDataResponse);

        let parentDiv = document.createElement("div");
        parentDiv.id = "data";
        document.body.appendChild(parentDiv);

        // Function to create and append elements
        function appendElement(parent, tag, text) {
            let element = document.createElement(tag);
            if (text) {
                let textNode = document.createTextNode(text);
                element.appendChild(textNode);
            }
            parent.appendChild(element);
            return element;
        }

        // Loop through mainData and create elements
        mainData.forEach((item) => {
            let div = appendElement(parentDiv, "div");
            appendElement(div, "h2", item.full_name);
            appendElement(div, "p", item.address);
            appendElement(div, "p", item.content);
            appendElement(div, "p", item.department);
        });

        console.log(mainData);
        updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
};
