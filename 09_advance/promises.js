const promiseOne = new Promise(function(resolve,reject){
    //Do any async task
    //DB calls , cryptography, network (these are async tasks)
    setTimeout(function(){
        console.log("Async task is completed");
        resolve() //this we have connected with .then
    }, 1000)
})
//consuming the promise;...
promiseOne.then(function(){
    console.log("promise consumed");
}) //this .then() has complete relation with (resolve)
//.catch() has relation with (reject)


new Promise(function(resolve,reject){ //in this we have not stored promise in variable
    setTimeout(function(){
        console.log("Async task 2");
        resolve()

    },1000)
}).then(function(){
    console.log("Async task 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name: "vishwa", email:"vishwa@123"})
    },1000)
})
//in this when we connect resolve with .then , we are able to access above data in resolve .
// we just simply pass parameter user in function and console it to see results , all we got is data of above.
promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Harvey", password:"123"})
        }else{
            reject('ERROR: Something Went Wrong!!!')
        }
    },1000)
})

promiseFour.then((user) => {  //in this case we only want username of above object to be printed not whole object.
    console.log(user);
    return user.username  // i.e we only want username
}).then((userna) => { //this is called "Chaining" we have used .then again .then to go to username field inside object
    console.log(userna);
}).catch((error) => {
    console.log(error); //above when we have put error = true this statement will execute
}).finally(() => console.log("Promise is either resolved or rejected"))
// this (.finally()) statement will always run.



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Javascript", password:"2003"})
        }else{
            reject('ERROR: Javascript Went Wrong!!!')
        }
    },1000)
})

async function consumePromiseFive(){   //async await has disadvantage that it do not handle errors.
    // const response = await promiseFive
    // console.log(response);

    try { //in this now error is handled properly...
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json // response will come in string format and by using json we will convert it into object.
//         //we use await keyword due to response.json takes time...   
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers() 

// OR

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {  //this is chaining , isme jo upper .then se return hoga wo hi niche aayega..
    console.log(data);
}) 
.catch((error) => {
    console.log(error);
})