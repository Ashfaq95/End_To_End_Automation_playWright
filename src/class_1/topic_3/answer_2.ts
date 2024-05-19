// Input variables
const totalPizzas: number = 8;
const slicesPerPizza: number = 12;
const guests: number = 20;

// Calculate total number of slices
const totalSlices: number = totalPizzas * slicesPerPizza;

// Calculate slices per guest
const slicesPerGuest: number = totalSlices / guests;

//if we want to floor the amount of slices per guest
// const slicesPerGuest: number = Math.floor(totalSlices / guests);

// Calculate leftover slices
const leftoverSlices: number = totalSlices % guests;

// Output results
console.log("Total slices of pizza available:", totalSlices);
console.log("Slices per guest:", slicesPerGuest);
console.log("Leftover slices:", leftoverSlices);
