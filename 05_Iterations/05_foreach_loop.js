
// for each loop (HIGHER ORDER FN)

const items = ["chaat","golgappe","chowmein","burger"]

// items.forEach( function (item){
//     console.log(item);
    
// })

// using arrow fn
// items.forEach( (item) => {
//     console.log(item)
// })


// function printMe(item) {
//     console.log(item);   
// }
// items.forEach(printMe)

// other parameters in forEach method
// items.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })

// access subobjs inside array [ {} , {} , {}]
const myCoding =[
    {
        language : "javascript",
        extension : "js"
    },
    {
        language : "java",
        extension : "java"
    },
    {
        language : "python",
        extension : "py"
    }
]
myCoding.forEach( (item) => {
    // console.log(item.extension);
    
})