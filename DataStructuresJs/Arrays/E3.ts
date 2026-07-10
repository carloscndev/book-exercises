/**
 * Modify the weeklyTemps object in the chapter so that is stores a mont's
 * worth of data using a two dimensional array. Create functions to display
 * the monthly average, a specific week's average, and all the week's average.
 */

class WeeklyTemps {
  private dataStore: number[][];
  private averageByMonth: number[];

  constructor() {
    this.dataStore = new Array(12).fill([]);
    this.averageByMonth = new Array(12).fill(0);
  }

  add(temp: number, month: number): void {
    this.dataStore[month].push(temp);
    this.calcAverageByMonth(month);
  }

  displayAverage(): void {
    console.log(this.averageByMonth);
  }

  displayAverageByMonth(month: number): void {
    console.log(this.averageByMonth[month]);
  }

  private calcAverageByMonth(month: number): void {
    this.averageByMonth[month] = this.dataStore[month].reduce((a,b) =>  a + b, 0) / this.dataStore[month].length;
  }
}

const student_grades = new WeeklyTemps();
student_grades.add(2, 1);
student_grades.displayAverage();
student_grades.displayAverageByMonth(1);