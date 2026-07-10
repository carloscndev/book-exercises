/**
 * Create a grades class that stores a set of student grades in an object. Provide a
 * function for adding a grade and a function for displaying the student's grade average.
 */

class StudentGrades {
  private grades: number[];
  private average: number;

  constructor() {
    this.grades = [];
    this.average = 0;
  };

  add(grade: number): void {
    this.grades.push(grade);
    this.calcAverage();
  };

  displayAverage(): void {
    console.log(this.average);
  }

  private calcAverage(): void {
    this.average = this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  }; 
}

const studentGrades = new StudentGrades();
studentGrades.add(1);
studentGrades.add(2);
studentGrades.displayAverage();