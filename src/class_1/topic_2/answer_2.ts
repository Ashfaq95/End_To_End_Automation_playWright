// Declare the message
// used let for reassiging purpose
let message: string = "TypeScript is a superset of Javascript.";

// print uppercase if "TypeScript" is found, else print the message
message = message.includes("TypeScript") && message.toUpperCase() || message;

// Redact "Javascript" with "!@#$"
//Here the i flag makes the search case-insensitive.
message = message.split(/javascript/i).join("!@#$");

// Output the final message
console.log(message);
