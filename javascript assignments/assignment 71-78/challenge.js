let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z";

let solution = myString.split(",").filter(function(ele){
    return isNaN(parseInt(ele));
}).map(function(ele){
    return (ele).length > 1 ? ele[0]: ele;
}).map(function( ele ,index){
    return index <17 ? ele: "";
}).reduce(function(acc,current){
    return `${acc}${current}`;
}).replaceAll("_"," ");


console.log(solution); // Elzero web school