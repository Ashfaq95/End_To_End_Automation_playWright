//defining type for the students parameter
type Student = {
  name: string;
  scores: {
    math: number;
    english: number;
  };
};

const students: Student[] = [
  { name: "Alice", scores: { math: 90, english: 80 } },
  { name: "Bob", scores: { math: 75, english: 85 } },
  { name: "Charlie", scores: { math: 88, english: 89 } },
  { name: "David", scores: { math: 92, english: 81 } }
];

function printTopMathStudents(students: Student[]): void {
  students.filter(student => student.scores.math > 85).forEach(student => console.log(student.name));
  //The "filter" method in TypeScript creates a new array by selecting elements from the original array that satisfy a specified condition provided by a callback function.
  //The "forEach" method in TypeScript iterates over each element of an array and executes a provided function for each element, without creating a new array.
}

printTopMathStudents(students);
