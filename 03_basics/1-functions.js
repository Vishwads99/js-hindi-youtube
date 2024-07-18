
//Declare a function

function saymyName(){ //function defination
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("W");
    console.log("A");
}

//function calling
//saymyName()

// function addtwonumbers(number1, number2){ //parameters
//     console.log(number1+number2);
// }
//Note: the values we provide while function defination are called Parameters.
// But the values which we provide while function calling are called Arguments.
function addtwonumbers(number1, number2){ 
    // let result = number1+number2
    // return result    
    // console.log("vishwa"); //this statement will not execute as return ke bad statement execute nahi hote
    //or
    return number1+number2

}

addtwonumbers(3,4) //Argument passed to function

const result = addtwonumbers(3,4)
//console.log("Result:", result);

function LoginuserMessage(username="sam"){ //by adding this in parameter we will not able to execute if statement (karan if madhe undefined jar value asel tarach true hoil) , and if undefined argument passed by default it will print sam
    if (username === undefined) {
        console.log("please enter username!!");
        return
    }
    
    return `${username} just logged in`
}

//console.log(LoginuserMessage("vishwa")); 
//here instead of vishwa if we do not pass any argument it will give by default [undefined.]
//console.log(LoginuserMessage());



function calculateCartPrice(val1,val2,...num1){  //these three dots in parameter is called rest operator. it includes all values passed in argument. after that , val1 and val2 will take initial two values and give us remaining values in array form 
    return num1
}

//console.log(calculateCartPrice(200,400,600,800));
 

// to pass an object in function

const user = {     //object declared
    username: "vishwa",
    price: 199,

}

function handleobject(anyobjectpass){ //parameter
    console.log(`Username is ${anyobjectpass.username} and price is ${anyobjectpass.price}`);
}

//handleobject(user) //function calling
// handleobject({
//     username:"sam",
//     price: 399,
// })

const newArr = [200,400,100,700]

function returnsecondvalue(getArr){
    return getArr[1]
}

console.log(returnsecondvalue(newArr))