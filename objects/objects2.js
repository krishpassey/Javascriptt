//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser ={
    email: "some@gmai.com",
    fullname: {
        userfullname: {
        firstname: "krish",
        lastname: "passey"
    }
    }
}

//console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2)


const obj3 = {...obj1, ...obj2}
//console.log(obj3);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.enteries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
