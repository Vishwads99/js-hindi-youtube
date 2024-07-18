//const tinderUser = new Object() //this is singelton object
//console.log(tinderUser);
const tinderuser = {} //this is non-singelton object

tinderuser.id = "20003tnv" 
tinderuser.name = "Rachel"
tinderuser.isLoggedIn = false
//onsole.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: { //this is object(fullname) inside object(regularUser).
        userfullname:{
            firstname: "vishwa",
            lastname: "deshpande",
        }

    }
}

//console.log(regularUser.fullname.userfullname.firstname);

// Combining two objects.

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

//const obj4 = Object.assign({} , obj1, obj2) //assign method copies all elements or properties from one or more source objects to target object.
// also it is good practice to write an empty braces before which acts as target object and other act as source


//Otherwise we use spread method...
// const obj4 = {...obj1, ...obj2 , ...obj3}
// console.log(obj4);

const users = [    //this is array of  objects
    {
        id:1,
        email: "vishwa@google.com",
    },
    {
        id:1,
        email: "vishwa@google.com",
    },
    {
        id:1,
        email: "vishwa@google.com",
    },
    {
        id:1,
        email: "vishwa@google.com",
    },
]

users[1].email

// console.log(tinderuser);

// console.log(Object.keys(tinderuser)); // result is all keys are in array now by this (Object.keys) Method.
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('name')); //checks whether a property is present in object or not

//More properties of objects are in s.s 134 of laptop



// ********************Destructure of objects****************************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

//course.courseInstructor  //every time we cannot write this so;

const {courseInstructor: instructor} = course //destructuring of object (we can now directly call courseinstructor by using word instructor and also we not have to use dot operator)
 
console.log(instructor);

//this is called the destructure of object.

// NOTE: object jiska koi name na ho , vo hai JSON  format Api....
// Json is a format for object.
