
// an callBackHell example

setTimeout(() => {
    console.log("get image from url");
    setTimeout(() => {
        console.log("resize the image");
        setTimeout(() => {
            console.log("add logo to image");
            setTimeout(() => {
                console.log("add image to website");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
