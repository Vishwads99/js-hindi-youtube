// call bind apply

// let obj1={
//     name:"robert",
//     fun: function(){
//         console.log(this.name);
        
//     }
// }

// let obj2={
//     name:"harvey",
// }

// //obj1.fun() //prints robert

// obj1.fun.call(obj2) //now result is harvey as we used call keyword.


function fun(){ //like this we write function outside and use call keyword to go for selected object
    console.log(this.name);
    
}
let obj1={
    name:"harvey",
}

let obj2={
    name:"mike",
}

fun.call(obj1);

//bind keyword object ko function bana deta hai

