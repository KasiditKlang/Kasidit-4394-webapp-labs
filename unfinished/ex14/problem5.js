const calculateAverage = function(scores) {
    let sum = scores.reduce((total, score) => total + score, 0);
    return parseInt(sum / scores.length); // Convert the average to an integer and return it
};

const getLetterGrade = (average) => {
    if (average >= 90) return 'A';
    else if (average >= 80) return 'B';
    else if (average >= 70) return 'C';
    else if (average >= 60) return 'D';
    else return 'F';
};

const calculateFinalGrade = (scores, calculateAverageCallback, getLetterGradeCallback) => {
    const average = calculateAverageCallback(scores);
    const letterGrade = getLetterGradeCallback(average);
    return ` Final Grade: ${average} (${letterGrade})`;
};

const student1Scores = [85, 90, 80, 95, 75];
const student2Scores = [70, 65, 80, 75, 70];

console.log("Student 1" + calculateFinalGrade(student1Scores, calculateAverage, getLetterGrade));  
console.log("Student 2" + calculateFinalGrade(student2Scores, calculateAverage, getLetterGrade));  
