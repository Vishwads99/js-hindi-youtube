let randomNumber = parseInt((Math.random() * 100) + 1 )

const submit = document.querySelector('#subt')
const userInput = document.querySelector('.guessField')
const GuessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const  p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if (isNaN(guess)) {
        alert(`Please Enter a valid number`)
    } else if(guess < 1){
        alert(`Please enter a number greater than one`)
    } else if(guess > 100){
        alert(`please enter a number less than 100`)
    } else{
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over , Random number was ${randomNumber}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You Guessed it Right!!!`)
        endgame()
    } else if(guess < randomNumber){
        displayMessage(`Number You Guessed is TOO Low`)
    } else if(guess > randomNumber){
        displayMessage(`Number You Guessed is TOO HIGH`)
    }

}

function displayGuess(guess){
    userInput.value = ''
    GuessSlot.innerHTML += `${guess} ,  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}` //Javascript allows this style.this shows remaining chances to guess  number
    // we can also take (10 - numGuess) but then it will last till 0


}

function displayMessage(message){
    lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled','') //this 'disabled' attribute is always in key value pair , hence we wrote an empty pair.
    // the above method i.e (setattribute) ensures that the user cannot input any value after this.
    p.classList.add('button');
    p.innerHTML = `<h2 id = "Newgame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newgame();
    


}

function newgame(){
    const NewButton = document.querySelector('#Newgame')
    NewButton.addEventListener('click' , function(e){
        randomNumber = parseInt((Math.random() * 100) + 1 );
        prevGuess = [];
        numGuess = 1;
        GuessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        displayMessage(``) //this removes the Game Over message.
        playGame = true;



    })
}
