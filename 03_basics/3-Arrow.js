const user = {
    username: "vishwa",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} welcome to website`);
        // console.log(this) // this will give result of current values or context
    }
}
// (this) keyword is used for reference of current context. if we print this keyword it gives us current context or current values
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this); //this gives us result as empty curley braces. as there is no context in global scope.
// empty braces is result only in Node . In windows it is different...


// function chai(){
//     //console.log(this); // when we console (this) keyword inside a function in node environment , we get many values. (check by running)  
//     let username = "vishwa"
//     console.log(this.username); //output will be undefined. this type of context will only work with object not in function
// }
// chai()

// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()






// To declare function specially through Arrow functions
const chai = () => {   //Syntax of Arrow function
    let username = "hitesh"
    console.log(this.username); //this will also not work in arrow function as it will only work in objects.
}
chai();

//Arrow Functions
() =>{ //Basic Syntax
}
// Or 
// const addTwo = (num1,num2) =>{  //we can also hold arrow functions in variable likethis.
//     return num1 + num2
// }

//const addTwo = (num1,num2) => num1+num2 // this type is implicit return. in this return keyword is assumed and no need to write.
// const addTwo = (num1,num2) => (num1+num2) //in implicit type we can use round bracket but no curley braces as with curley braces , return is compulsory.
const addTwo = (num1,num2) => ({username:"vishwa"}) //also is we want to return a object in this type we need to write object in parenthesis.
console.log(addTwo(3,4));
