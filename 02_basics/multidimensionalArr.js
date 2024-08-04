//Array ke Andar array is multidimensional array
let arr = [
    ['mike',30],//0
    ['harvey',35],//1
    ['robert',45],//2
]

arr.forEach(data => { //to print inside elements
    data.forEach(val => {
        console.log(val);
        
    })
})

// using forof loop

for(let ar of arr){
    for(i of ar){
        console.log(i);
        
    }
}
