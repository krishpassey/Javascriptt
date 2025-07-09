
typeof -> used to sknow the type of the value 
// it is mostly used with the prim itive values 

typeof null //object 
typeof [] // object 
type of NaN // number 


instanceof -> it checks that the variable written before it is part of any particular identity or not 

let a = [];
a instanceof array // true 

let b {}
b instanceof Object // true 
b instanceof Array // false 


let a = 12;
a instanceof number // false 
// it only works with reference values not the primitive one and here 12 is a primitive value 