// Promise : which are not executed now by committed for its future completion or failure
// (OBJECT REPRESENTING EVENTUAL COMPLETION )
// USED To : ASYNC WORK
// general Syntax : fetch(url).then().catch().finally()

// creation of promises
// Method 1 :
const promiseOne = new Promise( function(resolve,reject) {
    // do an async calls
    // db calls,cryptography,network
    setTimeout(function()
    {
        console.log('aysnc is completed')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
})

// method 2 : in single flow
new Promise(function (resolve,reject){
    setTimeout(function () {
        console.log('async task 2');
        resolve()
    },1000)
}).then(function (){
    console.log("task 2 resolved");
    
})

// passing parameter to the resolve
const promiseThree = new Promise( function (resolve,reject){
    setTimeout(function () {
        resolve({username : 'jatin',email : 'chai@example.com'})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username : 'abhishek',password : 'opbro'})
        } else {
            reject('ERROR :  something went wrong')
        }
    },1000)
},1000)
promiseFour
.then((user) => {
    console.log(user);
    // return user.username //error
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log('error');
})
.finally(function() {
    console.log('promise is resolved or rejected');
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username : 'risabh',password : '4533'})
        } else {
            reject('ERROR : name error')
        }
    },1000)
})

// aync await method
async function consumePromiseFive() {
    try {
          const response = await promiseFive
          console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// Using FETCH method
// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)
)

// fetch feature : method feching a resource from the network, returning a promise