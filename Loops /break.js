
// Break -> mused to stop loop on a particular condition

for(let i = 1; i<201; i++) {
    console.log(i);
    if(i === 32) {
        break;
    }
}


// Continue -> loop main next instance chalana

for(let i = 1; i<201; i++) {
    if (i === 32) {
        continue;
    }
    console.log(i);
}