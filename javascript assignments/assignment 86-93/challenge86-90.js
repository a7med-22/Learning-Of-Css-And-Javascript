




for (let i =0 ; i<100 ; i++){
    let myProduct = document.createElement("div");
    let myHeading = document.createElement("h2");
    let myParagraph = document.createElement("p");
    let myHeadingText = document.createTextNode(`Product title ${i+1} `);
    let myParagraphText = document.createTextNode("Description Of The Product");
    
    myProduct.className ="product";
    
    myHeading.appendChild(myHeadingText);
    myParagraph.appendChild(myParagraphText);
    
    myProduct.appendChild(myHeading);
    myProduct.appendChild(myParagraph);
    
    document.body.appendChild(myProduct);
}



