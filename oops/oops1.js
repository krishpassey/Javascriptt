const user = {
    username: "krish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        //console.log("Got the user details from database");
        console.log(`username: ${this.username}`);
    }

}

console.log(user.username);
console.log(user.getUserDetails());

function user (username, loginCount, isLoggedIn) {
    this.username = username;
    this.LoginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

   // return this
}

const userOne = new user("krish", 12, true)
const userTwo = new user("dev", 11, false)
console.log(userOne);
console.log(userTwo);


