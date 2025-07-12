
// Find the sum of numbers from 1 to 100 using a loop
let sum = 0;
for(let i = 1; i<101; i++) {
    sum = sum + i;
} // we didnt wrote sum inside loop because when the loop will run it will make sum's value as 0
console.log(sum);


// Print all the numbers between 1 to 50 that are dixisible by 3
for(i = 1; i<51; i++){
    if(i%3 === 0){
        console.log(i);
    }
}

// ask the user for a number and print whether each number from 1 to that number is even or odd
  // (eg. "1 is odd", "2 is even", ...)

let val = prompt("give an number");

for(let i = 1; i<=val; i++) {
    if(i%2 === 0) {
        console.log(`"${i} is even`);
    } else{
        console.log(`${i} is odd`);
    }
}


// count how many numbers between 1 to 100 are divisible by both 3 and 5
for(let i = 1; i<101; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log(i);
    }
}
