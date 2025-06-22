
let myarr1 = [1,2,3,4,5]
let myarr2 = [6,7,8]

//using push method : adds myarr2 as subarray within array
myarr1.push(myarr2)
// console.log(myarr1);
myarr1.pop()

// using concat method : add all ele of arr2 individually to arr1
// return a new array
let myarr3 = myarr1.concat(myarr2)
// console.log(myarr3);

// modern approach : using Spread operator(...)
let myarr4 = [...myarr1,...myarr2]
// console.log(myarr4);

// Using flat method : to combine multidimensional subarrays within array
let cmplxArr = [1,2,3,[4,6,7],34,[35,64,[34,56]]]
let simplerArr = cmplxArr.flat(Infinity)
// console.log(simplerArr);

//isArray : checks for parameter is array or not
console.log(Array.isArray("kundan"));
 
// from and of
console.log(Array.from("ritesh"));

let m1 = 234
let m2 = 468
let m3 = 867
console.log(Array.of(m1,m2,m3));



