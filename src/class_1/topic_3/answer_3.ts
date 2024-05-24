// Program 1

// // Declare variables
//used let to because of reusability 
// let startValue: number = 0;
// let endValue: number = 5;
// let stepSize: number = 1;
// let countFromZero: number = 0;
// let count: number = 0;

// // Loop from startValue to endValue with stepSize
// for (let i = startValue; i <= endValue; i += stepSize) {
//     count++; // Increment count on each loop
//     console.log(count); //we don't need to subtract any number as the count starts from 0
// }

// // Output the total number of loops executed
// console.log("Total loops executed:", count);


//2nd part 

//Declare variables
//used let to because of reusability  
let startValue: number = 0;
let endValue: number = 5;
let stepSize: number = 1;
let countFromOne: number = 1; // Initialized to 1
let count: number = 0;

// Loop from startValue to endValue with stepSize
for (let i = startValue; i <= endValue; i += stepSize) {
    countFromOne++; // Increment countFromOne on each loop
    console.log(countFromOne - 1); //This is done to adjust the output because countFromOne starts counting from 1, but we want to print the loop numbers starting from 0.
                                   // This is typically done where counting often starts from 0
}                                   

// Output the total number of loops executed
console.log("Total loops executed:", countFromOne - 1);
