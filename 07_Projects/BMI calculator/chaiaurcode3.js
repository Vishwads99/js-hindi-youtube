// Digital Clock.


const clock = document.getElementById('clock')  //or we can use queryselector

// let date = new Date
// console.log(date.toLocaleTimeString());

setInterval(function(){  //IMP method Remember syntax like this only. this method is used to run a specific type of function continuously.
    let date = new Date
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000) 