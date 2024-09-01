let magicData : any ={ //using 'let' for reassigning purpose

    userName: "Dr. Strange",
    age: 300
};

console.log(magicData.userPower)
//output: undefined
//The 'magicData' object does not have a property called 'userPower', so it's showing undefined
//The compiler didn't show any error because 'magicData' is type 'any'


type user1 = {
    userName: string;
    age: number;
};

let notMagicData: user1 = {
    userName: "Dr. Strange",
    age: 300
};

console.log(notMagicData.userPower);
//compiler is showing error because 'userPower' does not exist on type 'user1'.

//assiging 'magicData' to a string 
magicData= "is magicData showing any error?"
//No compiler error because 'magicData' data type is any

//assigning 'notMagicData' to a string 
notMagicData = "is notMagicData showing any error?";
//notMagicData is showing error because notMagicData's data type is data and it's not data type 'any' 

//differences
//any
/*The 'any' type in TypeScript allows any value to be assigned and any properties to be accessed without type checking,
making it very flexible but also eliminating the benefits of TypeScript's type checking.

//other specific data types
Using a specific type (like 'User') enforces type safety, ensuring that only properties defined on the type can be accessed
and preventing reassignment to a value of a different type. This helps catch errors at compile time and makes the code
more predictable and maintainable.

*/