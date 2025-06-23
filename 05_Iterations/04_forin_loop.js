
// for-in loop 

const languages ={
    js : "javascript",
    cpp : "C++",
    py : "python",
    rb : "ruby"
}
//for in loop for accessig obj
for (const key in languages) {
    // console.log(`${key} is short form for ${languages[key]}`);
    
}

// for accessing arrays
let fruits = ["mango","apple","oranges","grapes"]
for (const key in fruits) {
    // console.log(`${fruits[key]} is at index ${key}`);
}

// const map1 = new Map()
// map1.set("IN","India")
// map1.set("NZ","New Zealand")
// map1.set("FR","France")

// for (const key in map1) {
//     console.log(key);  
// }
// Note : map cann't be accessed using for-in loop]
