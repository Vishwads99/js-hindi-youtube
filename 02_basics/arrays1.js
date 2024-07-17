// Arrays  [we write arrays in square brackets]

const myArr = [1,2,3,4,5]
//console.log(myArr[0]);
const heros = ["ironman","batman"]

const myArr2 = new Array(1,2,3,4)


// Array Methods

// myArr.push(6) //inserts element from last in array
// myArr.push(7)
// myArr.pop() // removes last element from array

// myArr.unshift(9) // inserts elemet to start of array
// myArr.shift() // removes element from start of array
// console.log(myArr);
// console.log(myArr.includes(9)); //checks whether particular element is present in array or not
// console.log(myArr.indexOf(4)); //tells us the index of the element if present , if element not present it gives -1

//const newArr = myArr.join() // it binds or joins the elements of array in new  created array

// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr);
// console.log(typeof newArr); // join method changes the type of element from object to string.


// Slice and Splice operations

console.log("A ",myArr);

const myn1 = myArr.slice(1,3) // prints a specified part of the given array and avoids last position from given range
console.log(myn1);

console.log("B ",myArr);
const myn2 = myArr.splice(1,3) //operates the original array i.e splice operation not only shows the specified part , but it also cuts that part from original array
console.log("C ",myArr);
console.log(myn2);

// Note : in slice when we apply slice to an array , it display the specified part (except last position) and original array remains same.
// But in Splice it {Manipulates the original array} . i.e it display the specified part (including last position) but when we again print original array 
// that part is removed from original array.









