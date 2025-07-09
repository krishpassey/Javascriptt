let a = 5;
a++;
console.log(a);

ans: 6


let b = 7;
++b;
console.log(b);

ans: 8


let x = 3;
let y = x++;
console.log(x,y);

ans: 4 3 


let p = 4;
let q = ++p;
console.log(p,q);

ans: 5 5



let m = 10;
console.log(m--)
console.log(m);

ans: 10
     9



let n = 5;
let result = n++ + ++n;
console.log(result);

ans: 12


let count = 5;

if (count-- === 5) {
    console.log("Matched");
} else {
    console.log("Not Matched");
}

ans: Matched