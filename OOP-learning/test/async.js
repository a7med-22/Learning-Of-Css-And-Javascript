async function getData() {
    let users = [];
    if (users.length > 0) {
        return("users found");
    }
    else {
        throw Error("no users found");
    }
}

getData().then((resolvedValue) => console.log(resolvedValue),
    (rejectedValue) => console.log(rejectedValue)
);