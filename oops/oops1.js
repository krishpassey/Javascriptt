const user = {
    username: "krish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got the user details from database");
    }
}

console.log(user.username);
console.log(user.getUserDetails());