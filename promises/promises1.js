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


