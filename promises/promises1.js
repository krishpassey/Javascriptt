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
        .finally(() => console.log("the promise is either resolved either rejected"));



        const promiseFive = ((resolve, reject) => {
            setTimeout(function() {
            let error = true 
            if(!error) {
                resolve({username: "javascript", password: "22839"})
            } else{
                reject('ERROR: javascript went wrong')
            }
             }, 1000)
        });

        async function consumePromiseFive(){
            try{
                const response = await promiseFive
                console.log(response);
            } catch(error) {
                console.log(error);
            }
        }
        consumePromiseFive();


        async function getAllUsers() {
            try {
                const response = await fetch ('https://jsonplaceholder.typicode.com/users')

                const data = await response.json ()
                console.log(DataTransfer);
            } catch(error) {
                console.log("E: ", error);
            }
        }
        getAllUsers()



        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
           return response.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.assert.og("error"))

        

   
