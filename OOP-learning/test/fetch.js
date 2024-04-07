fetch("https://api.github.com/users/a7med-22/repos").then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
}).then((myData) => {
    myData.length = 10;
    return myData;
}).then((myData) => {
    console.log(myData[9].full_name);
}).catch(() => {
    console.log(`no data found`);
}).finally(() => {
    console.log("the operation is done");
})