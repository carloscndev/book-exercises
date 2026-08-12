import CircularlyLinkedList from './CircularlyLinkedList.ts'

/**
 * According to legend, the first-century Jewish historian Flavius Josephus was about to be
 * captured along with a band of 40 compatriots by Roman soldiers during the Jewish-Roman War.
 * The Jewish soldiers decided that they preferred suicide to being captured and devised a plan for their demise.
 * They were to form a circle and kill every third soldier until they were all dead. Josephus and one other
 * decided they wanted no part of this and quickly calculated where they needed to place themselves
 * so they would be last survivors. Write a program that allows you to place n people in a circle and specify that every
 * mth person will be killed. The program should determine the number of the last two people left in the circle.
 * Use a circularly linked list to solve the problem.
 */

function solveJosephus(totalPeople: number, countStep: number): void {
  const circle = new CircularlyLinkedList<number>();

  for (let i = 1; i <= totalPeople; i++) {
    circle.insert(i);
  }
  circle.display()

  let current = circle.getFirstNode();

  while (circle.length > 2) {
    for (let i = 1; i < countStep; i++) {
      if (current.next !== null && current.next !== circle.getHeadNode()) {
        current = current.next;
      } else {
        current = current.next.next;
      }
    }


    const soldierToRemove = current.element;

    current = current.next;
    if (current === circle.getHeadNode()) {
      current = current.next;
    }

    if (soldierToRemove !== null) {
      console.log(`Eliminating Soldier: ${soldierToRemove}`);
      circle.remove(soldierToRemove);
    }
  }

  console.log("\n--- SURVIVORS ---");
  console.log("The last two remaining soldiers are:");
  circle.display();
}

solveJosephus(9, 5);