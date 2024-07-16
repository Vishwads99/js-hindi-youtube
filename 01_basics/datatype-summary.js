// Primitive Datatypes (Call by value)
// 7 Types:- String , Number , Null , Boolean , Undefined , Symbol , Bigint

// JavaScript is Dynamically Typed Language , as we do not need to define type of variable. 
// like; const score=100 (Dynamic type) and const score:number=100 (static type) {which is used in typescript}

const id = Symbol('123');
const anotherid = Symbol('123');

//console.log(id === anotherid);

// by putting (n) at the end of a big number it becomes bigint datatype.
const bigNumber= 893493794137491837n



// Non-Primitive (Call by Reference type)

// Arrays , Objects , Functions 

const heros = ["Spiderman","Ironman", "Batman"];

let myObj = {name:"vishwa", age:22}   // in curley braces we write key-value Pairs

const myFunction = function(){
    //console.log("Hello World");
}


// *******************************Types Of Memory********************************

// 1. Stack (Primitive) [here we get copy] , 2. Heap (Non-Primitive) [here we get reference i.e we change directly in original value]
//1.
let myYoutubename = "HiteshChoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);
//2.
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "vishwa@google.com"

console.log(userOne.email);
console.log(userTwo.email);
