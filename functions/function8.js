const user = {
    username: "krish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `); // this keyword refers to current context 
        console.log(this);
    }

}
//user,welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

console.log(this) //. there is no context in global scope that's why it will give empty object




function chai() {
    let username = "krish"
    console.log(this.username); // we can not use "this" in function we can only iuse it in objects 
}
chai() 




// const chai = function () {
   // let username = "krish"
    //console.log(this);
// }


const chai = () => {
  let username = "krish"
  console.log(this);
}
chai()
// we can use "this" in arrow functions but not in normal functions 



// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "krish"})

console.log(addtwo(3,4))