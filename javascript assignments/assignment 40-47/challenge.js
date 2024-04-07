let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "osama", "Gamal", "Ameer"];
my =my.reverse();
first=my.shift();
second=my.shift();
console.log(my);  // ["osama", "Elham", "Mazero", "Ahmed"]

first1=my.shift();
last1=my.pop();
console.log(my.slice(zero));  //["Elham", "Mazero"]


first_word=my.shift();
console.log(first_word);
first_word=first_word.split("");
console.log(first_word);
first_ch = first_word.shift();
second_ch =first_word.shift();
console.log(first_ch);
console.log(second_ch);
two_ch=first_ch.concat(second_ch);
console.log(two_ch);
console.log(my);
second_word=my.shift();
second_word=second_word.split("");
console.log(second_word);
first_ch1=second_word.shift();
first_ch1=second_word.shift();
console.log(second_word);
the_final_word=two_ch.concat(second_word.join(""));
console.log(the_final_word);    // "Elzero"


the_final_word=the_final_word.split("");
c1 = the_final_word.pop();
c2 = the_final_word.pop();
word=c1 + c2;
console.log(word);
// console.log();  //  "ro"