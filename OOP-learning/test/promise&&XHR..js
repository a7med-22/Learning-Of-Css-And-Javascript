function getData(apiLink) {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.open("get", apiLink);
    myRequest.send();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(myRequest.responseText));
      } else {
        reject(Error("no data found"));
      }
    };
  });
}

getData("https://api.github.com/users/a7med-22/repos")
  .then((response) => {
    response.length = 10;
    return response;
  })
  .then((response) => {
    console.log(response[9].full_name);
  })
  .catch((rej) => {
    console.log(rej); // Log the rejection error
  })
  .finally(() => {
    console.log("Its done");
  });
