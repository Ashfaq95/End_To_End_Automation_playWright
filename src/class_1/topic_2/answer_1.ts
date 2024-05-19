const title: string = "Muhammad";
const firstName: string = "   Ashfaqur     ";
const middleName: string | null = "  Rahman   ";
const lastName: string = "   Amul khondokar  ";

// to Remove extra spaces used .trim() 
const trimmedTitle: string = title.trim();
const trimmedFirstName: string = firstName.trim();
const trimmedMiddleName: string | null = middleName && middleName.trim() || null;

const trimmedLastName: string = lastName.trim();

// join the whole name 
//Here .filter(Boolean) filters the string array if there's any unwanted values(ex: null, undefined etc)
//.join(' ') takes the filtered array and  joins all the elements in a single array
const joinFullName: string = [trimmedTitle, trimmedFirstName, trimmedMiddleName, trimmedLastName].filter(Boolean).join(' ');

console.log(joinFullName);

// Validation
const maxLength: number = 35;
//to measure extra char above 35
const extraChars: number = joinFullName.length - maxLength;
//defined exeedMessage
//used Math.abs() to visualize the value of n. Math.abs will show the absolute value of extra numbers
const exceedMsg: string = `Your input exceeds the character limit of ${maxLength} by ${Math.abs(extraChars)} characters.`;
//defined not exceed mesage
const noExceedMsg: string = `The length of the full name is within the character limit of ${maxLength}.`;

// if 35>0 then it will print the exceed message will the exeed number , else it will print the not exceed message   
console.log(extraChars > 0 ? exceedMsg : noExceedMsg);
