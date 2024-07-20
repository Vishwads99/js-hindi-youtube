// For loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}


for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value is ${i}`);
    for (let j = 0; j < 10; j++) {
        //console.log(`Inner loop value is ${j} and inner loop ${i}`);
        //console.log( i + '*' + j + ' = ' + i*j ); //this will print tables from 0 to last value of i
    }
    
}

// loop on array

let myArr = ["Batman","Ironman","Spiderman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log(`Dectected  5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Dectected  5`);
        continue //this statement skips only next one statement. i.e here in output 5 will not be printed
    }
    console.log(`Value of i is ${index}`);
}