//Recursion

// 1 to 10

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

//now using recursion

// function NumbersRecursive(n){
//     if (n<=10) {
//         console.log(n);
//         NumbersRecursive(n+1);
        
//     }
// }

// NumbersRecursive(1);

//to get factorial of number using recursion

function Factorial(n){
if (n==0) {
    return 1;
}
else{
    return n*Factorial(n-1);
}
}

console.log(Factorial(5));

//this will work following:
// n*Factorial(n-1)
// 5*Factorial(5-1)*Factorial(4-1)*Factorial(3-1)
// *Factorial(2-1)*Factorial(1-1) then finally 0.

