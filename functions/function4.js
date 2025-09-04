// IIFE => immediately invoke function expression 

(function () {
    console.log("hey");
})();


//Hoisting in function expression and statements 

abcd();


let abcd = function abcd() {
    console.log("heyyy");
}

// we can not do hoisting in function expression... but we can do hoisting in function statements
// sometimes we face problem with global scope polluction so in order to remove its declarations we use IIFE


(function chai() {
    console.log(`DB connected`);
}) ();

((name) => {
    console.log(`DB connected two ${name}`);
}) ('krish')