// scope (global, block, functional)

var a = 12; // it is in global scope 
// it is functional scoped that means it can be used in a function 

{
    var b = 123;
}


{
    let a = 12;
}
// it is a blocked scope, it is only be used in this block only 


function abcd(){
    let a = 12;
}
// let can be used in whole function 

function abc(){
    if(true) {
        let b = 12;
    }
}
// in this the let only be used in those braces 

// global scope // can be accessed in whole code
// function scoped // can only be accessed in a function 
// block scope // can only be accessed inside the curly braces