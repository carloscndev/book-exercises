import LinkedList from "./LinkedList.ts";

/**
 * Write a program that uses a singly linked list to keep track of a set of
 * test grades entered interactively into the program.
 */

class Student {
  private name: string;
  private grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
}

const student1 = new Student('Carlos', 10);
const student2 = new Student('Fatima', 9);
const student3 = new Student('Pedro', 4);

let grades = new LinkedList<Student>();
grades.insert(student1);
grades.insert(student2);
grades.insert(student3);
grades.display();