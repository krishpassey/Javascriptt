const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // Db calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


newPromise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved")
})



const promiseThree = new Promise(function() {
    setTimeout(function() {
        resolve({username: "krish", email: "krish@gmail.com"})

        },1000)
    })

    promiseThree.then(function(user) {
        console.log(user);
    })


    const promiseFour = new Promise(function(resolve, reject) {
        setTimeout(function() {
            let error = true 
            if(!error) {
                resolve({username: "dev", password: "22839"})
            } else{
                reject('ERROR: something went wrong')
            }

             }, 1000)
        })

        promiseFour
        .then((user) => {
            console.log(user);
            return user.username
        })
        .then ((username) => {
            console.log(username);
        })
        .catch(function(error) {
            console.log(error);
        })

   
