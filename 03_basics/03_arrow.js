
// this keyword : current context(lines within nearest braces)

const person = {
    name : "raghav",
    welcomeGreet : function(){
        // console.log(`${this.name} , welcome to the codespace `)
        // console.log(this)
        
    }
}
person.welcomeGreet()

// NOTE : In Global scope this refers to
// 1. Node.js envt : {} empty obj
// 2. In browser context : refers to window obj
// console.log(this)

//  ************* ARROW FUNCTIONS ***************   

// Basic/classic fn delcn
// this cann't be directly used in function
function book() {
    // console.log(this) // refers to something unkn obj
    const bookname = "HC_Verma"
    // console.log(this.bookname) // undefined op
    
}
book()
 
// try with function Expression
const library = function() {
        const bookname = "HC_Verma"
        // console.log(this.bookname) // undefined op
}
library()

// Delcn using ARROW fns
const library1= () => {
        const bookname = "HC_Verma"
        // console.log(this.bookname) // undefined op
}
library1()

// Implicit Return in arrow fns(for single line fns)
// 1 . remove {} + return keyword
// 2.  add () in place of return
const addThree = (num1,num2) => ( num1+num2 )
console.log(addThree(3,5))