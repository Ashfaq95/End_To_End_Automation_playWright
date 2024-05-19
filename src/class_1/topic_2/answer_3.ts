// Declare the CSV string variable
const data: string = "Tom,Hank,28,USA";

// Split the CSV string into an array of values
const values: string[] = data.split(',');

// Print each value
values.forEach(value => {
    console.log(value.trim());
});