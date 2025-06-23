
// for loop

//  for (let i = 0; i <= 10; i++) {
//     if (i==5) console.log("Entered no 5");
    
//     console.log(`printed val ${i}`);
//  }

// Nested Loops  

// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer loop ${i}`);
//     console.log(`Printing table of ${i}`);
//     for (let j = 1; j <= 5 ; j++) {
//         // console.log(`Inner loop ${j} & Outer loop ${i}`); 
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// for loop for an array
const myArr = ["yana","adarsh","utkarsh","kanika"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);    
}

//JUMP STATEMENTS : Break and Continue
for (let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log(`Detected favourite no 5`);
        // break; // completely exit the loop 
        continue; //execution ctrl stat and restarts the loop
    }

    console.log(`value of i is ${i}`);    
}
