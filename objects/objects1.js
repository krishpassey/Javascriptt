// singleton 
// object.create


// object literals 

const mySym = Symbol("key1")


const jsUser = {
    name:"krish",
    "full name": "krish passey",
    [mySym]: "mykey1", // to refer symbol we have to use square brackets
    age: 21,
    location: "jaipur",
    email: "krish@google.com",
    isLoggedIn: "false",
    lastLoggedIn: ["monday", "saturday"] 
}

console.log(jsUser.email);
console.log(jsUser[email]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);


jsUser.email = "krish@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "krish@microsoft.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js User");
}
jsUser.greetingTwo = function(){
    console.log(`hello js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo  ());
