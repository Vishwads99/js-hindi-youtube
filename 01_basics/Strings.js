const name="vishwa" // one way to declare string
const repoCount="3"

// console.log(name + repoCount + " value"); [not use this syntax]

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`); // use this syntax

const gameName = new String('vishwa-tnv-com')  // another way to declare string

console.log(gameName[0]); // to access key-value pair
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0 , 4) //last value not included also negative value not considered
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   vishwa   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url);
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh')) //Ask Question

console.log(gameName.split('-')) // Seprates and creates array based on seprator in [' ']

//Note all functions of string are given in s.s 129 and 130 of laptop....