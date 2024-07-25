//[{},{},{}]
//["","",""]

const arr=[1,2,3,4,5]

for (const num of arr) {  //for of loop
    //console.log(num);  
}

const greetings ="hello world!"

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

//Maps (note: Map is an object, It also has key value pair like objects)

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA") //map will not print this value as map is known to print only unique values.
//Also map prints value in given order.

//console.log(map);

for (const key of map) {  //forof loop on map
    //console.log(key);// this will print key and value in array format.
}
//if we want key and value seprate ;
for (const [key,value] of map) {
    //console.log(key, ':-', value);
}


const myobject ={
    game1: 'NFS',
    game2: 'bus simulator',
}

for (const [key,value] of myobject) { 
    //console.log(key, ':-', value);//this will give error , as objects are not iterable using this forof loop
}