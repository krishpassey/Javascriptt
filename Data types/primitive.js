// data types
// primitive and reference datatypes

// primitive -> these datatypes gives real copy of the value when copied 
// string, number, boolean, null, undefined, symbol, bigint


let a = 12;
let b = a;   // real value is being copied 



// null -> we havent gave its value by ourself 
// undefined -> we have made a variable but did not gave it a value, then by default value is given to it 
// symbol -> unique immutable value 
let obj = {
    uid: 1,
    name: "krish",
    age: 20,
    email: "test@kk.com"
};

let u1 = Symbol("uid");
obj[u1] = "001";
