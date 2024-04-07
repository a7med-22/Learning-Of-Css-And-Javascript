let myFirstPromise = new Promise((resolve, rej) => {
  setTimeout(() => {
    resolve("this is my first promise");
  }, 500);
});

let mySecondPromise = new Promise((resolve, rej) => {
  setTimeout(() => {
    resolve("this is my second promise");
  }, 2000);
});

let myThirdPromise = new Promise((resolve, rej) => {
  setTimeout(() => {
    rej("this is my third promise");
  }, 1000);
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => {
//     console.log(resolvedValues);
//   },
//   (rejectedValues) => {
//     console.log(rejectedValues);
//   }
// );

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => {
    console.log(resolvedValues);
  },
  (rejectedValues) => {
    console.log(rejectedValues);
  }
);
