// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
// document.write(`<hr>`);
// for (let i=0;i < myAdmins.length ; i++) {
//     let k=0;
//     if (myAdmins[i]==="Stop"){
//         break;
//     }
//     document.write(`<div>The Admin For Team ${i+1} is ${myAdmins[i]}</div>`);
//     document.write(`<h2>Team Members:</h2>`);
//     for (let j=0; j<myEmployees.length ;j++){
//         if (myAdmins[i][0]===myEmployees[j][0]){
//             document.write(`<p>-${++k}) ${myEmployees[j]}</p>`);
//         }
//     }
//     document.write('<hr>');
//         }

function showinfo( us="un", age="un", rt=0, show="yes", ...skills ){
    document.write(`<div>`);
    document.write(`<h2>Welcome ${us}</h2>`);
    document.write(`<p>age is ${age}</p>`);
    document.write(`<p>hour rate = $${rt}</p>`);
    if (show==="yes"){
        if (skills.length > 0){
        document.write(`<p> the skills are ${skills.join(" | ")}</p>`);
        }
        else {
            document.write(`NO skills to show`);
        }
    }
    else{ 
        document.write("<p> the skills is hidden</p>")
    }
    document.write(`</div>`);
}

showinfo("Ahmed", 22, 30, "yes", "HTML", "CSS", "JAVASCRIPT", "REACT" );

