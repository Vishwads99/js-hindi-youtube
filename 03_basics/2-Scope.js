
{} // basically this is scope . it is used in if-else , loops , functions .
// In this example , if statement ke andar jo likha hai wo hai [Block scope...] and outside 
// likha hai wo hai [global scope..] 
// global scope me jo value likahate hai wo block scope ke liye available hoti hai.
//but block scope ke andar jo value likhate hai vo bahar nahi jani cahiye.
//Example 1.
if (true) {   // these three lies in this scope , i.e inka kam is braces or scope ke bahar nahi hai.
    let a=10
    const b=20
    //var c=30
}
// Actually in three objects(a,b,c) ka kam is scope me hi hona chahiye bahar inpar koi operation perform kare to nahi hona chahiye. and if we print a and b outside as shown , 
// they will give error of "not defined". but when we print c , it shows result which is problem . hence we do not use "var" keyword.   

//console.log(a);
//console.log(b);
//console.log(c);

//Example 2.
let d=1000

if (true) {     // here the d value outside is completely independent of inside... hence we use let and const
    let d=100
    const e=200
    //console.log("Inner: ",d);
}
//console.log(d);

//Note: In windows global scope is different than Node..


//Nested Scopes
//Example 3
function one(){
    const username = "hitesh"

    function two(){  //nested function.
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);  // Note: In Javascript Line by Line execution of code is performed...

    two()
     
}

one()

// In above case , one function is greater and two function is smaller. hence for two function (which is inside one function),
// function one is global scope. hence it can access values of function one.
// But , function one cannot access the values of function two as it is considered block scope for one.
// As a result when we run both function only two runs and one gives error . 



//Example 4

if (true) {
    const username="vishwa"
    if (username === "vishwa") {
        const website="Netflix"
        console.log(username +website);
    }
    //console.log(website); //this will give error
}

//console.log(username); //this will give error


//*************************Interesting**********************
//Below two are two techniques of declaring functions
// Second one is sometimes called experssion..

//1.
console.log(addone(4))
function addone(num){ 
    return num+1
}

//addone(4)
//2.
console.log(addTwo(4));
const addTwo = function(num){
    return num + 2
}

//addTwo(4)

// In first method , we can call or access function before declaration and it still runs.
// But in second method as we declared function inside a variable , we cannot do that it gives us error.
// This whole concept is called "Hoisting.." where all object or values to be kept at right place is seen..







