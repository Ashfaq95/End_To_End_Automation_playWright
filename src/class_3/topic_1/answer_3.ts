type User3 = {
  name: string;
  age: number;
};

const userList: User3[] = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 20 }
];

function areAllUsersAdults(userList: User3[]): boolean {
  return userList.every(user => user.age > 18);  //every Method: It checks each user in the array to see if their age is greater than 18.
}

const allAdults = areAllUsersAdults(userList);
console.log(allAdults); // This will print false because Bob is 17
