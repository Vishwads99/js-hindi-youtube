// Singleton
//Object.create

// Object literals

const mySym = Symbol("key1") //Symbol declared
// Question: take a symbol , add it to object keys and print karke dikhao....


const Jsuser = {     //object is created , Object has keys and values pairs
    name:"vishwa",
    "full name": "vishwa deshpande", //this type of object is accessed with second method
    age:21,
    [mySym]: "mykey1", // we can use symbol in object by using square bracket.
    location: "pune",
    email: "vishwa@google.com",
    isLoggedIn: false,
} 

//to access objects
//these are two ways to access objects 
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]); //the symbol can be accessed by square bracket method only

//to change object values
Jsuser.email = "vishwa@gmail.com"

//Object.freeze(Jsuser) //this is used to freeze objects so that no values can be changed

Jsuser.email = "vishwa23@gmail.com"
//console.log(Jsuser);

// To create functions

Jsuser.greeting = function(){
    console.log("Hello Js User");
}

Jsuser.greetingtwo= function(){
    console.log(`Hello Js User, ${this.name} `); // in this method the properties of the object are accessed by (this) keyword
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());
 

