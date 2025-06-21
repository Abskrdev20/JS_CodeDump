let name = "raghav"
let age = 29

// declaration methods
const str1 = "rita"
// str as Object
const str2 = new String("sita")
//console.log(str2);



//Old version of string print
//console.log(name+age+"years");

//Modern mtd : STRING INTERPOLATION / BACK TICKS
//console.log(`Name of user is ${name} and user age is ${age} years`);


const str = new String("welcome-students")
//console.log(str);

//console.log(str[3]);
//console.log(str.__proto__)

 console.log(str.length)
// console.log(str.charAt(5));
// console.log(str.toUpperCase());
// console.log(str.indexOf("m"));

// const newStr=str.substring(0,5)
// console.log(newStr);

// const anotherStr=str.slice(-16,4)
// console.log(anotherStr);

// trim mthd : trim the extra space
// const tstr = "   abhishek   "
// console.log(tstr);
// console.log(tstr.trim());

// replace(str to replace, new str to put in place)
let link = "https://musical-fortnight-q7p44j6xv5pxf47qr-github-dev/"
console.log(link.replace("/","_"));

console.log(link.includes("music"));

// split(separator)
console.log(link.split("-"))