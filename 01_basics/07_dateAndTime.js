
let myDate = new Date()
// console.log(myDate);
//2025-06-22T04:04:52.311Z
// console.log(myDate.toString());
// Sun Jun 22 2025 04:04:52 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());
// Sun Jun 22 2025
// console.log(myDate.toTimeString());
// 04:04:52 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString());
// 6/22/2025, 4:04:52 AM
// console.log(myDate.toLocaleDateString());
// 6/22/2025
// console.log(myDate.toLocaleTimeString());
// 4:04:52 AM
// console.log(myDate.toISOString());
// 2025-06-22T04:04:52.311Z
// console.log(myDate.toJSON());
// 2025-06-22T04:04:52.311Z

 let customDate = new Date(2022,0,23)
// let customDate = new Date(22,02,2023)
// let customDate = new Date("2020-03-23")
// let customDate = new Date("02-23-2020")

// console.log(customDate.toLocaleString());

// ********** TIMESTAMP ***********

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(customDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // ms -> s

customDate.toLocaleString("default",{
    weekday : "long"
})
console.log(customDate);
















