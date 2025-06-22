 // declaration of an ARRAY
 let myArr = [1,3,5,"hadrdik","kunal",true]
 let myArr1 = new Array(1,2,3,4)
//  console.log(myArr);
//  console.log(myArr1);
 
 // Accessing Array elements
//  console.log(myArr[4]);

 // Array methods

// //  myArr.push(34) // adds/pushes at the end of array
//  myArr.push("rohan")

//  myArr.pop() // removes/pops from last
 
//  myArr.unshift(78) // adds at the starting of array

//  myArr.shift() //removes ele from staring
 // NOTE : unshift and shift are avoided at the index of all ele gets changed time consuming process
 
//  console.log(myArr.includes(5));
//  console.log(myArr.indexOf(3));
 
//  console.log(myArr);

let newArr = myArr.join() // returns a string of array sep by commas
// console.log(newArr);

// SPLICE AND SPICE METHODS

let myn1 = myArr.slice(1,3)
console.log(myn1);         // gets subarray from index 1-3 excludes 3
console.log("A",myArr); // no impact of modification

let myn2 = myArr.splice(1,3)
console.log(myn2);   // gets subarray from index 1-3 includes 3
console.log("B",myArr); // removes the subarray ele from org array



