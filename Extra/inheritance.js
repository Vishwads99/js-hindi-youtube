// class Animal {
//     constructor(name){
//         this.name = name;

//     }

//     speak(){
//         console.log(`${this.name} makes Nosie`);
        
//     }

//     sing(){
//         console.log(`${this.name} sings loudly`);
        
//     }
// }

// class Dog extends Animal {
//     constructor(name){
//         super(name); //super keyword points the parent class.
//     }
// }

// let d = new Dog ('Henry'); //this henry will go to Dog class which enters inside and there is super keyword which gives henry value to animal;
// //and then finally in animal class in speak function , the vlaue goes and we get output.
// d.speak();

// class cat extends Animal {
//     constructor(name){
//         super(name);
//     }
// }

// let c = new cat ('scotiee');
// c.sing();



// Static keyword...


class Animal {
    constructor(name){
        this.name = name;

    }

    speak(){
        console.log(`${this.name} makes Nosie`);
        
    }

     static sing(){
        console.log(`${this.name} sings loudly`);
        
    }
}

let d = new Animal ("jack");
//d.sing(); //After writing word static , this will give error. as now the method will not be working for object but it is working in class and only class can access it.
//therefore;
Animal.sing();