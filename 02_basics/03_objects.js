
// declaration of Objects in js

//1. using constructor => singolton created
// Object.create()

// 2. Using Object literals
let user = {
    name : "Abhishek",
    age : 23,
    email : "akdev@gmail.com",
    isLoggedIn : true
}
// Accessing key-val pairs

// 1. using dot operator
// console.log(user.email);
// 2. using brackets[] having keys as string : BETTER APPROACH
// console.log(user["email"]);

// some Trick Example

let mySym = Symbol("key1")

let empInfo = {
    "full name " : "abhishek kumar",
    // if write  mySym : "key1val" don't get key1 as symbol treated as String
    // correct Approach :
    [mySym] : "keyval1",
    age : 23,
    location : "Delhi",
    lastLoggedIn : ["mon","wed","sat"]   
}
// console.log(empInfo["full name "]); //Cann't use dot operator
// console.log(empInfo["location"]);
// console.log(empInfo[mySym]);
// console.log(empInfo);


//overwrite values
user.email="khushi@google.com"
// console.log(user["email"]);
// no changes in object if freeze
// Object.freeze(user)

// add fn to Object
user.greeting = function(){
    console.log(`Hello User ${this.name} to JS`);
}
console.log(user.greeting);
console.log(user.greeting());






