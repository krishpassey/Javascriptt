
// write a code for BMI calculator 

function bmi(weight,height) {
    return weight / (height * height);
}

console.log(bmi(60, 1.7).toFixed(2));


// create a reusable discount calculator  
function discountCalculator(discount) {
    return function (price) {
        return price - price * (discount / 100);
    };
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);

console.log(ten(1200));
console.log(twenty(1200));



// build a counter using closures 
function counter () {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());

let d = counter();
console.log(d());

// jab bhi hum counter() chalate hai then hum ek new count ko janam dete hai which is starting from 0
// but jb hum counter se nikla hua function chlate hai to counter apni previous value kom yaad rkh paata hai



//create a pure function to transform value
function double(val) {
    return val * 2;
}
console.log(double(5));


// use IIFE to isolate variable
(function(){
    const password = "secret password";
    console.log(password)
}) ();
