function loginUsermessage (username) {
    if(!username) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(userLoginMessage("krish"))
console.log(loginUserMessage())



function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,430,900));




const user = {
    username: "krish",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// andleObject(user)

handleObject({
    username: "dev",
    price: 300
})




const myNewArray = [200,400,600]

function returnSecondValue(getArray){
    return getArray [1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600]));