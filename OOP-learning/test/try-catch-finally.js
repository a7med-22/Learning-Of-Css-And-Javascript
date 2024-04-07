let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("this is agood promise");
        reject(Error("this is abad promise"))
    },3000)
})

async function getData() {
    console.log("before promise");
    try {
        console.log(await myPromise);
    } catch(reason) {
        console.log( `reason : ${reason}`);
    } finally {
        console.log("after promise");
    }
}

getData();