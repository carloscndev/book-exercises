import readline from "node:readline";
import process from "node:process";
import PriorityQueue from "./E3.ts";

/**
 * Modify the ED example (Example 5-5) so the user can control the activity in the
 * ED. Create a menu system that allows the user to chose from the following activities.
 * a. Patient enters ED.
 * b. Patient is seen by doctor.
 * c. Display list of patients waiting to be seen.
 */

interface Patient {
  name: string;
  code: number;
}

const emergencyDepartment = new PriorityQueue<Patient>();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu(): void {
  console.log("\n--- EMERGENCY DEPARTMENT (ED) MENU ---");
  console.log("a. Patient enters ED");
  console.log("b. Patient is seen by doctor");
  console.log("c. Display list of patients waiting");
  console.log("d. Exit");

  rl.question("\nSelect an option: ", (input: string) => {
    const choice = input.trim().toLowerCase();

    switch (choice) {
      case "a":
        rl.question("Enter patient name: ", (name: string) => {
          rl.question("Enter priority code (e.g., 1-10): ", (codeStr: string) => {
            const priorityCode = parseInt(codeStr, 10) || 1;
            emergencyDepartment.enqueue({ name, code: priorityCode });
            console.log(`Patient '${name}' admitted with priority ${priorityCode}.`);
            displayMenu();
          });
        });
        break;

      case "b":
        if (emergencyDepartment.empty()) {
          console.log("No patients are currently waiting.");
        } else {
          const nextPatient = emergencyDepartment.dequeue();
          console.log(
            `\nDOCTOR IS NOW SEEING: ${nextPatient?.name} (Priority: ${nextPatient?.code})`
          );
        }
        displayMenu();
        break;

      case "c":
        console.log("\nCurrent waiting list:");
        if (emergencyDepartment.empty()) {
          console.log("The queue is empty.");
        } else {
          console.log(emergencyDepartment);
        }
        displayMenu();
        break;

      case "d":
        console.log("Exiting system");
        rl.close();
        break;

      default:
        console.log("Invalid option. Please try again.");
        displayMenu();
        break;
    }
  });
}

// Start the menu application
displayMenu();