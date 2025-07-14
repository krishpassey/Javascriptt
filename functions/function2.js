
// Return => jaha se aye ho vahi dal denge 
function abcd() {
    return 12;
}


let val = abcd();
console.log(val);


// First class functions => we can treat functions like values
function abcd(val) {
    val();
}
abcd(function() {
    console.log("hey");
});

// Higher Order Function => a function which returns a function or accepts a function within its parameters
function abcd() {
    return function() {
    console.log("hello");
    }
}
abcd();