const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["batman","superman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  
// console.log(marvel_heros[3][1]);

// const mix_hero = marvel_heros.concat(dc_heros)
// console.log(mix_hero);
//push method pushes in existing array and concat give us new array.


//Spread Operator (works similarly to concat , but advantage is we can add as much arrays but in concat we can mix only two arrays)
// const mix_new_heros = [...marvel_heros , ...dc_heros] //now these do not remain array , as all element are spreaded or seprated.
// console.log(mix_new_heros);

// const another_array = [1,2,3, [4,5,6] , 7,[6,7,[4,5]]]
// const new_another_array = another_array.flat(Infinity) // in parenthesis we write depth or shortcut write infinity.
// console.log(new_another_array);
// The flat method combines all subarray into elements of original array . 


console.log(Array.isArray("vishwa")) //checks if any array named vishwa is present or not 
console.log(Array.from("vishwa")) //converts the given value into array.

console.log(Array.from({name: "vishwa"})) //interesting (here we have to specify that keys se array banae ya phir values se array banae .)
// and if it is not able to make , it gives result as an empty array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // makes array of combined all three values
