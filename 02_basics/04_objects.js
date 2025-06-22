
// Object chaining
const user = {
    email : "roshan@gmail.com",
    username : {
        fullusername : {
            firstname : "roshan",
            lastname : "rajput"
        }
    }
}
// console.log(user.username.fullusername.firstname);
//methods
// console.log(Object.keys(user)); // return array of keys
// console.log(Object.values(user)); // ... values
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("email"));


// Mutiple Objects merging into single
const obj1 = { 1 : "a",2 : "b"}
const obj2 = { 3 : "c",4 : "d"}
const obj3 = { 5 : "e",6 : "f"}

// const obj4 = {obj1,obj2,obj3} // get multi dim objects
// individually add
// const obj4 = Object.assign({},obj1,obj2,obj3) 
// Most used approach
// const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4);

// Destructuring Of obj
const course = {
    coursename : "Learn JS",
    price : 3433,
    courseInstructor : "abhijeet malhan"
}
// course.courseInstructor
const {courseInstructor : teacher} = course
console.log(teacher);

// Understanding APIs
// API CALLS => return the code in JSON FORMAT earlier in xml format
// json : javascript object notation
// {
//     "fruit": "Apple",
//     "size": "Large",
//     "color": "Red"
// }