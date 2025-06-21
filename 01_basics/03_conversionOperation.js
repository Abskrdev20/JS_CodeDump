// ************** CONVERSION *************

let data = "sample_val"
// show dt of var data
//console.log(typeof data);

// Val To Number
let num=Number(data) 
// 77 => 77
// "77" => 77
// "77abhi" => NaN
// "" => 0
// true => 1 , false => 0
// null => 0
// undefined => NaN
//console.log(num);

// Val to Boolean
let str =Boolean(data)
// 77 => true , 1 => true , 0 => false
// "77abc" => true
// "" => false
// null => false
// undefined => false
//console.log(str);

// *********** OPERATIONS *************

// tip : negation store
let val = 3
let negNum = -val
//console.log(negNum); // -3 prints

/* 1 ARITHMETIC OPS
console.log(4+4);
console.log(4-4);
console.log(4*4);
console.log(4/4);
console.log(4**4);
console.log(4%4);
*/

// tricy ones : to pehle aayega uske hisab se
//console.log("2"+2+2); //222
//console.log(2+2+"2"); //42
// console.log(true); //true
// console.log(+true); //1
// console.log(+""); //0
// let n1,n2
//n1=n2=2+4
// let counterVal=10
// console.log(++counterVal); //prefix
// console.log(counterVal++); //postfix

//NOTE : we don't prefer messy codingc just uses () for simplicity.ex
//console.log((2+2)**3);