
function dance (v1) {
    console.log(`${v1} is dancing`);
}

dance("I");
dance("Dev");
dance("ishant");
dance("dhruv");



function add(v1,v2){  // Parameters
    console.log(v1+v2);
}
// Arguments
add(1,2);  
add(11,22);
add(111,22);


// default parameter =. Giving a default value
function add(v1 = 0, v2 = 0) {
    console.log(v1 + v2);  
}
add();


// Rest parameter => When there are many arguments, then we have to make multiple operators, 
// in order to escape from this we use rest operator if ... is used in function's parameter space then it is a rest operator 

function abcd(...val) {
    console.log(val);
}
abcd(1,2,3,4,5);


function abcd(a, b, c, ...val) {
console.log(a, b, c, ...val);
}
abcd(1,2,3,4,5,6);