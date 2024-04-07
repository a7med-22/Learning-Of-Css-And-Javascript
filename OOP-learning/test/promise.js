// let myPromise = new Promise((resolve, reject) => {
//     let connect = false;
//     if (connect) {
//         resolve("connection established");
//     }
//     else {
//         reject(Error("connection failed"));
//     }
// }
// ).then(
//     (establishedValue) => {
//         console.log(`${ establishedValue }`);
//     },
//     (failureValue) => {
//         console.log(`bad ${failureValue}`)
//     }
// )
// console.log(myPromise);


let myPromise = new Promise((resolve, reject) => {
    let connect = false;
    if (connect) {
        resolve("connection established");
    }
    else {
        reject(Error("connection failed"));
    }
}
)

console.log(myPromise);

myPromise.then(
    (establishedValue) => {
        console.log(`${ establishedValue }`);
    },
    (failureValue) => {
        console.log(`bad ${failureValue}`)
    }
)