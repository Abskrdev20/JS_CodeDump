
let numbers = [1,2,3,4,5,6,7,8,9,10]

// for each loop : no return values
// let newnumbers = numbers.forEach( (num) => {
//     return num
// })

// filter method : return the values on conditions
let newnos = numbers.filter( (num) => (num>4))


// console.log(newnos);

// MODIFIED foreach loop : return values
let newnumbers = numbers.forEach( (num) => {
    if(num>4) {
        return 
    }
})