// Q. what's the diffrence between function declaration and function expression
// and. function declaration are hoisted but not function expression


// Q. use rest parameter to accept any number of scores and return the total 
 function getScore (...scores) {
    let total = 0;
     scores.foreach(function(val {
        total = total + val;

     }))
     return total;
 }

console.log(getScore(10,20,30,40))


// Q. can you assign a function to a variable and then call it? show how 
let a = function() {

}
a();


// Q. pass a function inside another function and execute it
function abcd(val) {
    val();
}

abcd(function () {
    console.log("hey");
});


// Q. what will be the output here and why 
greet();

var greet = function () {
    console.log("hi");
};
// it will give type error coz this is a function expression

// right way --
greet();

function greet () {
    console.log("hiu");
};
