// Dates

let myDate = new Date
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

//console.log(typeof myDate); //Question asked

//to create our own date

// let myCreatedDate = new Date(2024,1, 8)
// console.log(myCreatedDate.toDateString());

let myDate_time = new Date(2024, 1, 8,5,3)
let myCreatedDate = new Date("2023-01-14") // yy/mm/dd format and we can also adjust to mm/dd/yy
// console.log(myDate_time.toLocaleString());
//console.log(myCreatedDate.toLocaleString());

let mytimestamp = Date.now()

// console.log(mytimestamp);
// console.log(myCreatedDate.getTime());
// above both times are in milisecs to convert in sec we use;
//console.log(Math.floor(Date.now()/1000)); //this value we get in seconds.

let newdate = new Date()
// console.log(newdate);
// console.log(newdate.getMonth() + 1); //as default value starts from zero
// console.log(newdate.getDay());
// console.log(newdate.getTime());

newdate.toLocaleString('default' , { // by pressing control+space we get suggestions
    weekday: "long",
})




