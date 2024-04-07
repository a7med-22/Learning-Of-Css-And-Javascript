async function fetchData() {
    try {
        let myData = await fetch("https://api.github.com/users/a7med-22/repos");
        console.log(myData)
        console.log( await myData.json())
    } catch {
        console.log(Error("data not found"))
    } finally {
        console.log('operation is ended');
    }

}

fetchData()



// function fetchData() {
//   fetch("https://api.github.com/users/a7med-22/repos")
//     .then((response) => {
//       // Check if the response is successful
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       // Parse the JSON data
//       return response.json();
//     })
//     .then((data) => {
//       // Data contains the JSON parsed response
//       console.log(data);
//     })
//     .catch((error) => {
//       // Handle any errors that occurred during the fetch
//       console.error("Error fetching data:", error);
//     });
// }

// fetchData();