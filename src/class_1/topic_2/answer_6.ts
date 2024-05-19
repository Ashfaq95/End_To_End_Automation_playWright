// Desired length of the string
const length1: number = 4;

// Character to repeat
const character: string = 'a';

// Initialize an empty string to store the result
let result: string = '';

// Concatenate the character to the result string 'length' times
for (let i = 0; i < length1; i++) {
    result += character;
}

// Output should be : 'aaaa'
console.log(result); 
