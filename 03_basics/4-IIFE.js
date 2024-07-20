// Immediately Invoked Function Expression (IIFE)

(function chai(){     //this is as usual function declaration.
    // when we give a name to IIFE likethis , it is called "named IIFE".
    console.log(`DB CONNECTED`);
})(); //semi colon is necessary to end IIFE. or it gives error while writing another IIFE

//Note:
//IIFE used to immediately invoked function.
//Many times problems are created due to global scope pollution. to avoid pollution;from global scope , we use IIFE. 
//Pollution means some variables declared in global scope can interfare in function or block scope.

(() => {   // Arrow function can also be used as IIFE.
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})('vishwa') // this last parenthesis is function callling...hence we pass value in this