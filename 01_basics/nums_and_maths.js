const score = 400
// console.log(score);

const balance = new Number(100)
//console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // adds decimal point and zeros at last of number 

const otherNumber = 123.8967
//console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // gives commas(,) to big numbers based on usa system of numbers.
// console.log(hundreds.toLocaleString('en-IN')) // gives commas(,) to big numbers based on Indian system of numbers.

// More functions of numbers are given in s.s 131 of laptop


// *****************************MATH**************************
// Math is a library that comes by default with javascript.

// console.log(Math);
// console.log(Math.abs(-4)); // converts negative to positive
// console.log(Math.round(4.3)); // round-offs the value
// console.log(Math.ceil(4.3)); // takes upper value i.e 4 se jara bhi bada hua to direct upper value 5.
// console.log(Math.floor(4.9)); // takes lower value i.e 4.9 bhi hua to bhi lower value 4. 

// console.log(Math.min(2,5,8,4,9));
// console.log(Math.max(2,5,8,4,9));


console.log(Math.random()); //gives random value between 0 and 1.
console.log((Math.random()*10) + 1); //+1 is taken to avoid number coming zero. (as 0.014 * 10 = 0.14)
console.log(Math.floor(Math.random()*10) +1); 

// if we want values in range 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min);  // Note this formula 

// More functions  of Math are in s.s 132 & 133 of laptop