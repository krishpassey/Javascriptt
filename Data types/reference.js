// reference -> these datatypes do not give the copy but gives reference of the parent  
// arrays, objects, functions 

let a= [1, 2, 3];
let b = b;   // only gives the reference value 
b.pop();


let a = {
    name: "krish"
};
let b = a;

b.name = "harsh";
// changes are made in 'b' also 
