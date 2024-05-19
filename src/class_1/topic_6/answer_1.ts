//declaring the array for all the solutions
const nicknames = ["Sparky", "Shortstack", "Bookworm", "Eagle Eye", "Buzz"];


//answer of a
// const position = nicknames.indexOf("Eagle Eye"); //indexOf() can be used to check whether an element exists in an array or not(from medium blog).
// console.log(position); 

//answer of b
 const moreNicknames = ["Whizz", "Ace", "Lefty"];
 const updatedNicknames = nicknames.concat(moreNicknames); //concat() method simply merges two arrays and returns a combined result(from medium blog).
// console.log(updatedNicknames); 

//answer of c
const myName = "Ashfaq"; 
//updatedNicknames.push(myName);  //push() method pushes/adds one or more elements to the array at the last of an array.
console.log(updatedNicknames); 

//answer of d
//slice() method cuts an array, in whichever manner we want and returns the trimmed array(from medium blog)
//sort() method arranges array elements in sorting orders(from medium blog)
//reverse() method reverts the order of an array(from medium blog)
const sortedNicknames = updatedNicknames.slice().sort().reverse();
const joinedNicknames = sortedNicknames.join(" ; ");
console.log(joinedNicknames); 

//answer of e
//pop() method pops/removes the last element from an array(from medium blog).
const lastElementRemoved = sortedNicknames.pop();
console.log(lastElementRemoved); 
console.log(sortedNicknames); 

//answer of f
//shift() method removes starting(first) element from an array and returns the removed element.
const firstElementRemoved = sortedNicknames.shift();
console.log(firstElementRemoved); 
console.log(sortedNicknames); 

//answer of g 
//slice() method cuts an array, in whichever manner we want and returns the trimmed array.
const subsetNicknames = sortedNicknames.slice(1, 4);
console.log(subsetNicknames); 

//answer of h
//splice()method can be used for multiple purposes. For,
//1. Add an element to an array
//2. Replace specific elements within an array
//3. Remove specific elements from an array
const removedNames = sortedNicknames.splice(1, 3);
console.log(removedNames); 
console.log(sortedNicknames); 













