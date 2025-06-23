
// for of loop
 
let numbers = [2,4,6,8,10] 
//for iterating arrays
for (const num of numbers) {
    // console.log(num);
}

let word = "welcome_Folks"
//for iterating strings
for (const letter of word) {
    // console.log(letter);
    
}

// MAPS : similiar to obj but have unique key-value pairs and order maintain

const map = new Map()

map.set('ds',"data structure")
map.set('cs',"communication skills")
map.set("cns","circuits and systems")
map.set('ds',"data structure")

// console.log(map);

for (const [key ,value] of map) {
    // console.log(key,"->",value);  
}

// const basket = {
//     fruit : "banana",
//     vegetable : "patato"
// }
// for (const [key ,value] of basket) {
//     console.log(key,"->",value);  
// }
// Conclusion : Object are non iterable using forof but map are iterable
