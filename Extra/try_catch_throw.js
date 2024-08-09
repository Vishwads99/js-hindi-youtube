// Try , catch , throw...

// function d(a,b){
//     return a/b;
// }

//console.log(d(10,0)); //here the error comes and gives on screen as infinity.
//but if we want to print error of our choice ??, 
// yes we can with the help of try,throw,catch...

function d(a,b){
    try{
        if (b==0) {
            throw new Error("cannot divide by zero")
        }
        else{
            console.log(a/b);
             
        }
    }catch(err){
        console.log(err.message);
        
    }
    
}

d(10,0);//this gives us our given error on output screen.


