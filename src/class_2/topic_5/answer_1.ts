//part 2
// 1. LogMessage
type LogMessage = (message: string) => void;

// 2. ReverseString
type ReverseString = (input: string) => string;

// 3. Negate
type Negate = (value: boolean) => boolean;

// 4. Double
type Double = (value: number) => number;

// 5. GetFirstPerson
interface Person {
    name: string;
    age: number;
   }   
type GetFirstPerson = (people: Person[]) => Person;

// 6. Greet
type Greet = (name?: string) => string;

// 7. Increment
type Increment = (value: number, step?: number) => number;



///part 2:
// Initialize with anonymous function expressions
const anonymousLogMessage: LogMessage = function(message: string): void {
    console.log(message);
};

const anonymousReverseString: ReverseString = function(input: string): string {
    return input.split('').reverse().join('');
};

const anonymousNegate: Negate = function(value: boolean): boolean {
    return !value;
};

const anonymousDouble: Double = function(value: number): number {
    return value * 2;
};

const anonymousGetFirstPerson: GetFirstPerson = function(people: Person[]): Person {
    return people[0];
};

const anonymousGreet: Greet = function(name?: string): string {
    return name ? `Hello, ${name}!` : "Hello, stranger!";
};

const anonymousIncrement: Increment = function(value: number, step: number = 1): number {
    return value + step;
};

// Initialize with arrow function expressions
const arrowLogMessage: LogMessage = (message: string): void => {
    console.log(message);
};

const arrowReverseString: ReverseString = (input: string): string => {
    return input.split('').reverse().join('');
};

const arrowNegate: Negate = (value: boolean): boolean => {
    return !value;
};

const arrowDouble: Double = (value: number): number => {
    return value * 2;
};

const arrowGetFirstPerson: GetFirstPerson = (people: Person[]): Person => {
    return people[0];
};

const arrowGreet: Greet = (name?: string): string => {
    return name ? `Hello, ${name}!` : "Hello, stranger!";
};

const arrowIncrement: Increment = (value: number, step: number = 1): number => {
    return value + step;
};

// Demonstrate calling each function through their variables and print the results

// LogMessage
anonymousLogMessage("This is an anonymous function log.");
arrowLogMessage("This is an arrow function log.");

// ReverseString
console.log(anonymousReverseString("hello")); // Output: "olleh"
console.log(arrowReverseString("world"));     // Output: "dlrow"

// Negate
console.log(anonymousNegate(true));  // Output: false
console.log(arrowNegate(false));     // Output: true

// Double
console.log(anonymousDouble(10));    // Output: 20
console.log(arrowDouble(20));        // Output: 40

// GetFirstPerson
const people: Person[] = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }];
console.log(anonymousGetFirstPerson(people)); // Output: { name: "Alice", age: 30 }
console.log(arrowGetFirstPerson(people));     // Output: { name: "Alice", age: 30 }

// Greet
console.log(anonymousGreet("Alice")); // Output: "Hello, Alice!"
console.log(anonymousGreet());        // Output: "Hello, stranger!"
console.log(arrowGreet("Bob"));       // Output: "Hello, Bob!"
console.log(arrowGreet());            // Output: "Hello, stranger!"

// Increment
console.log(anonymousIncrement(5));   // Output: 6
console.log(anonymousIncrement(5, 2));// Output: 7
console.log(arrowIncrement(10));      // Output: 11
console.log(arrowIncrement(10, 3));   // Output: 13