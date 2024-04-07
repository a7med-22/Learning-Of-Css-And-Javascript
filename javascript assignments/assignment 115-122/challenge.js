let chosen = 3;


let myFriends = [
    { title: 'Osama', age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: 'Ahmed', age: 25, available: false, skills: ["Python", "Django"] },
    { title: 'Sayed', age: 33, available: true, skills: ["PHP", "Laravel"] },

];

if (chosen === 1) {
    member1(myFriends);
}

else if (chosen === 2) {
    member2(myFriends);
}

else if (chosen === 3) {
    member3(myFriends);
}

function member1([{ title: t, age: a, available: avail, skills: [, cs] }] = myFriends) {
    console.log(t);
    console.log(a);
    if (avail === true) {
        console.log("available");
    }
    else {
        console.log("not available");
    }
    console.log(cs);

}
function member2([, { title: t, age: a, available: avail, skills: [, cs] }] = myFriends) {
    console.log(t);
    console.log(a);
    if (avail === true) {
        console.log("available");
    }
    else {
        console.log("not available");
    }
    console.log(cs);

}
function member3([, , { title: t, age: a, available: avail, skills: [, cs] }] = myFriends) {
    console.log(t);
    console.log(a);
    if (avail === true) {
        console.log("available");
    }
    else {
        console.log("not available");
    }
    console.log(cs);

}
