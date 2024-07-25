const myObject =  {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    html: "Hyper text markup Language",
}
//objects are not printable by forof loop hence we use forin loop
for (const key in myObject) {
    //console.log(key); //this will give all keys
    //console.log(myObject[key]); //this will give all values of keys
    //console.log(`${key} shortcut is for ${myObject[key]}` );
}

//forin loop on array

const programming = ["js","py","cpp","java"]
// note: the keys in array is by default numbers from (0 to ...) ; but in objects we can assign keys. 
for (const key in programming) {
    //console.log(key);//this will give keys which are in form of numbers
    //console.log(programming[key]);// this will give value
}
 


//forin on maps

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")

for (const key in map) {
    console.log(key); //Maps are not iterable , hence we cannot print maps using forin loop.
}