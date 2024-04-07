// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i =start ; i<=end ; i+=10){
//     if (i===exclude){
//         continue;
//     }
//     console.log(i);
    
// }

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i=start ; i>end ; i--){
//     if (i < start ){
//         console.log(`0${i}`);
//         if (i===stop){
//             break;}
//         continue;
//     }
//     else if (i === start){
//         console.log(i);
//     }
    
    
//     }

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i=start ; i<=end ; i++){
//     console.log(i);
//     console.log(`-- ${breaker}`);
//     console.log(`-- ${end-breaker}`);
// }


// let index = 10;
// let jump = 2;

// for (let i=index ; i>jump ; i-=jump) {
//     console.log(i);
// }

// Output
// 10
// 8
// 6
// 4

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let k=0;

// for (let i =0 ; i<friends.length ; i++){
//     if (friends[i].startsWith(letter.toUpperCase())){
//         continue;
//     }
//     console.log(`${++k} => ${friends[i]}`);
// }
// // Output
// // "1 => Sayed"
// // "2 => Eman"
// // "3 => Mahmoud"
// // "4 => Osama"
// // "5 => Sameh"

// let start = 0;
// let swappedName = "elZerO";
// let characters = swappedName.split();
// for (let i=start ; i < swappedName.length ; i++){
//     if (swappedName[i]===swappedName[i].toLowerCase()){
//         characters[i]=swappedName[i].toUpperCase();
//     }
//     else {
//         characters[i]=swappedName[i].toLowerCase();
//     }
// }
// console.log(characters.join(''));

// Output
// "ELzERo"

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i=start ; i<mix.length ; i++) {
    if ((typeof mix[i]) === 'number' && mix[i]>1){
        console.log(mix[i]);
    }
}

// Output
2
3
4