const arr = [10,20,30,40,50,30];
console.log(arr);
console.log(arr.length);


const s = new Set([10,20,30,40,50,30]);
s.add(60);
s.add("hello");

console.log(s);
length=0;
for(element of s){
    length++;
}
console.log(length);



//Main difference is in sets duplicate elements are not allowed and in array 
// it is allowed.