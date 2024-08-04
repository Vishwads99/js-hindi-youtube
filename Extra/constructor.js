// Constructor functions are like regular functions, there are two convections though.
//1. They are named with capital letter first.
//2. They should be operated only with "new" operator.

function User(name){ //constructor function
    this.name=name;

}
console.log(new User("vishwa")); // operated with "new".

let person = new User("vishwa");
console.log(person.name);

