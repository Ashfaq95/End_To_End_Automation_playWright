// Input variables
const income: number = 50000; // User's income
const age: number =28 ; // User's age

// Variable to store the calculated tax
let taxOwed: number = 0;

// Check if the user is below 20 years of age
if (age < 20) {
    taxOwed = 0;
} else {
    // Calculate tax based on income brackets
    // if (income <= 10000) {
    //     taxOwed = income * 0.10;
    // } else if (income <= 50000) {
    //     taxOwed = 
    // } else {
    //     taxOwed = 
    // }
}

// Output the result
console.log("The amount of tax owed is:", taxOwed);
