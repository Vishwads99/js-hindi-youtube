// to copy elements from one array to another

let arr1= ["alex",122,true];
//let arr2 = arr1.slice(0); //this is perfect method to copy elements.
//or
let arr2 = [...arr1]; //this metod  is using spread operator

arr1.push("willams")//this will not affect arr2.

console.log(arr1);
console.log(arr2);

