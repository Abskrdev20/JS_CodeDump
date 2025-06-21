/*
console.log(Math.abs(-4)); //convert the -ve val to positive
console.log(Math.round(433.343)); //round to the integer val
console.log(Math.ceil(34.3)); //get +1 val
console.log(Math.floor(34.9)); //get same val
console.log(Math.sqrt(49)); // results the square root
console.log(Math.min(4,6,7,3)); // min val out of an array
console.log(Math.max(4,6,7,3)); // max val out of an array
*/

// generate the random numbers
// console.log(Math.random());
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

// generalised approach
const min = 10
const max = 30
console.log(Math.floor( Math.random() * (max-min+1) ) + min );




