const accountId = 140903
let accountEmail = "vishwa@google.com"
var accountPassword ="0000"
accountCity = "Pune"
let accountState;

//accountId = 2 //not allowed to change as it is declared constant
accountEmail ="vmd@gmail.com"
accountPassword ="124"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //used to print more than one variable