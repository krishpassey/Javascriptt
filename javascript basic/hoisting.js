// hoisting impact per type

// Hoisting -> when one variable is made in js then it is divided into two parts
//  the declaration part goes up and the initialisation part goes down 

console.log(a);

var a = 12; // (undefined)
// breks into two parts :: 
// var a = undefined; (goes to top)
// var a = 12; (remains there only)


let b = 13; 
// ERROR: can not access a before initialisation 
// but already declared but still in TDZ
// we accessed b in TDZ that's why we are getting this error 


// var -> hoist -> undefined 
// let -> hoist -> refference error 
// const -> hoist -> refference error 




