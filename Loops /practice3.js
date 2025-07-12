
// Stop at First Multiple of 7
// write a loop from 1 to 100 that:
// prints each Number
// stops completly when it finds the first number divisible by 7

for (let i = 1; i< 101; i++) {
     console.log(i);

    if (i % 7 === 0) {
        break;
    }
}



// Skip Multiple of 3
// write a loop from 1-20 that:
// skips numbers divisiible by 3 
// prints all others

for(let i = 1; i<21; i++) {
    if(i % 3 === 0) continue;
    console.log(i);
}



// Print first 5 odd numbers only
// write a loop from 1 to 100 that:
// prints only 5 odd numbers
// then stops the loop
// use both if, continue, and a counter + break

// expected output
// 1 3 5 7 9

let count = 0;
for (let i = 1; i<101; i++) {
    if(i % 2 === 1) {
        count++;
        console.log(i);
    }
    if (count === 5) break;
}

