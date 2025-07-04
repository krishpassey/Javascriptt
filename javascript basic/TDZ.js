// Temporal dead zone.... the area in which js knows that variable exists but 
// it will not be able to give you its value 

console.log(a);
// ERROR: a is not defined


let a = 12;
// ERROR: can not access a before initialisation 


var b  = 13; // undefined 
// only be done in let and const but not be done in var 
