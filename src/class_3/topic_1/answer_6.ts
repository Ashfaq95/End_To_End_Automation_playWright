type Scores = {
  [subject: string]: number; //Scores type ensures that scores is an object with keys as subject names and values as numbers.
};

class Student1 {  //name and scores properties are explicitly defined in the class.
  name: string;
  scores: Scores;

  constructor(name: string, scores: Scores) {
    this.name = name;
    this.scores = scores;
  }

  getAverageScore(): number {  //getAverageScore method calculates the average score.
    const scoresArray = Object.values(this.scores); //Object.values(this.scores) converts the scores object into an array of score values.
    const totalScore = scoresArray.reduce((sum, score) => sum + score, 0); //"reduce"  iterates over each score in the array, adding the current score to the cumulative sum. 
    //starts with an initial value of "0" for the total sum.
    //After processing all scores, "reduce" returns the total sum of all scores.


    return totalScore / scoresArray.length; //Divides the totalScore by the number of scores (scoresArray.length) to get the average score.     
  }
}

const studentScores: Student1[] = [
  new Student1("Alice", { math: 90, english: 80, science: 85 }),
  new Student1("Bob", { math: 70, english: 75, science: 80 }),
  new Student1("Charlie", { math: 85, english: 90, science: 95 })
];

console.log(studentScores.map(student => ({ name: student.name, averageScore: student.getAverageScore() })));
