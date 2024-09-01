// Type definitions for User, Profile, and Contacts
type Contacts = {
    phone: string;
    fax: string;
};

type Profile = {
    username: string;
    email: string;
    contacts: Contacts;
};

type User1 = {
    id: number;
    name: string;
    age: number;
    profile: Profile;
};

// Initialize the user variable
const user: User1 = {
    id: 1,
    name: "John Doe",
    age: 30,
    profile: {
        username: "johndoe",
        email: "johndoe@example.com",
        contacts: {
            phone: "555-1234",
            fax: "555-5678"
        }
    }
};

// Function to print user information
function printUserInfo({ name, age, profile: { contacts: { phone } } }: User1): void {
    console.log(`The user of name ${name} of age ${age}, has phone number ${phone}`);
}

// Call the function with the user data
printUserInfo(user);

// Initialize another user variable
const anotherUser: User1 = {
    id: 1,
    name: "Mark Doe",
    age: 40,
    profile: {
        username: "johndoe",
        email: "johndoe@example.com",
        contacts: {
            phone: "555-1234",
            fax: "555-5678"
        }
    }
};

// Function to get the profile of the older user
function getOlderUserProfile(user1: User1, user2: User1): Profile {
    return user1.age > user2.age ? user1.profile : user2.profile; //condition to print older profile
}

// Get and print the profile of the older user
const olderUserProfile = getOlderUserProfile(user, anotherUser);
console.log('The profile of the older user:', olderUserProfile);

// Define the person object with type 'any'
const person: any = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28
};

// Function to print the person's name in all uppercase and age with 2 more years added
function printPersonInfo({ firstName, lastName, age }: any): void {
    console.log(`Name: ${firstName.toUpperCase()} ${lastName.toUpperCase()}`);
    console.log(`Age in 2 years: ${age + 2}`);
}

// Call the function with the person data
printPersonInfo(person);
