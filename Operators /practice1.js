let x = 10;
let y = 20;

if (x > 5 && y <25) {
    console.log("A");
} else {
    console.log("B");
}
ans: A 


let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
    console.log("Access Granted");
} else {
    console.log("Access Denied")
}
ans: Access Granted



let temp = 35;
if (!(temp<30)) { 
    console.log("Hot");
} else {
    console.log("Pleasant");
}
ans: Hot




let a = 0;
if (a) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
ans: Falsy



let score = 78;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score => 60 ? "C" : "Fail";
console.log(grade);

ans: B



let LoggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log(access);

ans: Deny
