const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(Error("this is abad promise"));
        // resolve("this is agood promise");
    },3000)
})

async function readData() {
    console.log("before promise");
    console.log( await myPromise.catch((resolvedValue) => resolvedValue));
    console.log("after promise");
}

readData();