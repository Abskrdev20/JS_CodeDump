
// Note : filter method return always based on condition specified in return stat  (true false wala game )

// maps : iterate the whole array and perform operations and retrun values of all arr ele
let numbers = [1,2,3,4,5,6,7,8,9,10]

// implicit arrow fn
// const newNumbers = numbers.map( (num) => num+20 )

//using explicit arrow fn
const newNumbers = numbers.map( (num) => {
    return num + 20
})

// console.log(newNumbers);

// method CHAINING in JS

const newNums = numbers.map( (num) => num*10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >50)

console.log(newNums);
