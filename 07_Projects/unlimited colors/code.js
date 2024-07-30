// First step: to generate a random color

const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
} // Remember this step...

// Solve through method 1 and just look method 2
let intervalId;
const startChangingColor = function(){
    if (!intervalId) {  //this is just a good way , otherway can also work (method 2)
        intervalId = setInterval(changeBGcolor,1000);
    }
    
    function changeBGcolor(){
        document.body.style.backgroundColor = randomColor();
    }
    //intervalId = setInterval(changeBGcolor,1000); this also works and is accepted...(method 1)
    
}

const stopChangingoColor = function(){
    clearInterval(intervalId);
    intervalId =  null; //this is just a good or optimized way to save space , without this also program runs.
    
}

document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingoColor);