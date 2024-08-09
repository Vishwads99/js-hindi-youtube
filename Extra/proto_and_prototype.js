let obj = {
    fName: "harvey"
};

// let obj2 = {
//     lName: "Louis"
// };

// obj2.__proto__ = obj //reference diya , that is obj2 ko obj ka reference diya .

//console.log(obj2.fName); //means by writing (proto), obj2 can also access elements of obj.
//console.log(obj.lName); //this gives error as we have given reference to obj2.

obj2 = Object.create(obj);

obj2.lName="mike" //inserting into obj2.
console.log(obj2); //but it has reference of obj






