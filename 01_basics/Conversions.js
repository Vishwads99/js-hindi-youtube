result = '3'+'hello'
console.log(result);
console.log(typeof result);


result1 = '3'+2
console.log(result1);
console.log(typeof result1);

result2 = '3'+true
console.log(result2);
console.log(typeof result2);


result3 = '3'+null
console.log(result3);
console.log(typeof result3);


//When we add something with the string like(number,bool,string,null,etc..) it also gets converted into string.

result4 = '3'-1
console.log(result4);
console.log(typeof result4);
//this result we get in number type..

result5 = '3'-'hello'
console.log(result5);
console.log(typeof result5); //this we get Nan but datatype is number

result6 = '3'-true
console.log(result6);
console.log(typeof result6); //this we get number type..

result7 = '3'-null
console.log(result7);
console.log(typeof result7); // this we also get number...

//The above all was Implicit type of conversion..

//Now Explict type conversion...

data = "3";
datar = Number(data);
console.log(typeof data); //this is explict type conversion..



 


