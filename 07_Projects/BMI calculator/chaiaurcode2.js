const form = document.querySelector('form')
// we cannot write this value outside , kyki hame submit karneke baad wali values chahiye jo ki user input dega
//if we write this outside , it will executed as soon as program starts and empty value will be stored in height.
// const height = parseInt(document.querySelector('#height').value) (WRONG WAY!!)


form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)   //form this we will get the value of height when user will give input.
    //the value we get will be in string , hence we convert it to int by using (parseInt)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === "" || height < 0 || isNaN(height)) {  //isNAN checks that given height is convertable into number or not.
        result.innerHTML = `please give a valid height ${height}` 
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {  
        result.innerHTML = `please give a valid weight ${weight}` 
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)  //this toFixed method will show decimal points only two by rounding off
        // if (bmi<18.6) { (try it later....)
        //     result.innerHTML = `<span>${bmi} you are under weight </span>`;
         
        // }
        // else if(24.9>bmi>18.6){
        //     result.innerHTML = `<span>${bmi} you are normal weight </span>`;
        // }
        // else if(bmi>24.9){
        //     result.innerHTML = `<span>${bmi} you are over weight </span>`;
        // }
        //to display bmi in result
        // result.innerHTML = `<span>${bmi}</span>`;
        
    }

    // if (bmi<'18.6') {
    //     result.innerHTML = `<span>You are Underweight</span>`;
    // }


})