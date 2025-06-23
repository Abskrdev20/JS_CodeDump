 // Truthy and Falsy value Concept in Control flow

 /*
# Falsy values : false , 0 , -0 ,BigInt 0n , "" , null , undefined , NaN
# expt these are truthy values
# notable truthy values :  "0" , 'false'," ", [] , {} ,funtion(){}
 */

// check empty array
const emptyArr = []
// if(emptyArr.length === 0) 
//     {
//         console.log(`recieved an empty array`)
//     }

// check empty obj
let emptyObj = {}
// if (Object.keys(emptyObj).length === 0)
//  {
//     console.log(`Recived an Empty object`);
// }

// Nullish Coalescing Operator (??) : null , undefined safety check (fallback mechanism)
 
let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 23 //23
// val1 = undefined ?? 24 //24
// val1 = null ?? 32 ?? 23 // first come 32

// console.log(val1);

// Ternary Operator : (condition check) ? true : false
 
const iceCreamPrice = 200

// iceCreamPrice <= 100 ? 
// console.log(`Less than 100`) : 
// console.log(`Greater than 100`);

