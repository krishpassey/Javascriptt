// print numbers from 1 to 10 using for loop

for (let i = 1; i < 11; i++) {
    console.log(i)
}

// print numbers from 10 to 1 using while loop
let i = 10;
while(i>0){
     console.log(i);
     i--;
}

// print even numbers from 1 to 20 using for loop
for(let i = 1; i<21; i++) {
    if(i%2 === 0){
    console.log(i);
    }
}

// print odd numbers from 1 to 15 using while loop
let i = 1;
while(i < 16) {
    if (i%2 === 1){
        console.log(i);
    }
    i++;
}

// print the multiplication table of 5 (i.e, 5 x 1 = 5 .... 5 x 10 = 50)
for(let i = 1; i < 11; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}