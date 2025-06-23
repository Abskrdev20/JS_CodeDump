 // Desc about let , const and var

// GLOBAL SCOPE
var c = 40
if(true){
    // BLOCK SCOPE
    let a = 10
    const b = 20
    // var c = 30
    // console.log(`Inner ${a}`);
    
}
// console.log(a); // error can't accessed outside block scope
// console.log(b);  // this also can be accessed
// console.log(c); // this can be accessed

// Nested Scope : Scope in a Nested Fns (CLOSURE)
function one() {
    const username = "rishab"
    function two() {
        const website = "youtube.com"
        // console.log(username);
    }
    two()
    // console.log(website); // var is not defined err
}
one()

if(true){
    const username= "rohit"
    if(username==="rohit") {
        const website = "youtube.com"
        // console.log(username+website);
    }
}

// Different methods of function declaration

// Basic function
console.log(addOne(5));

function addOne(num){
    return num + 1 
}


// Expression fn : fn store in variable (HOISTING)

// Intersting : Get an err cann't be accessed w/o initialisation in Expression fn
// console.log(addTwo(6))
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(6))



