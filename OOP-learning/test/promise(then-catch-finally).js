let myPromise = new Promise((resolve, reject) => {
    let employees = ["ahmed", "osama", "mamdouh", "marey"];
    if (employees.length === 4) {
        resolve(employees);
    } else {
        reject(Error(`the employees are not 4`));
    }
})
    .then((resolveValue) => {
        resolveValue.length = 2;
        return resolveValue;
    })
    .then((resolveValue) => {
        resolveValue.length = 1;
        return resolveValue;
    })
    .then((resolveValue) => {
        console.log(`the hired employee is ${resolveValue}`);
    })
    .catch((rejectedValue) => {
        console.log(rejectedValue);
    })
    .finally(() => {
        console.log("the operation is done");
    });
