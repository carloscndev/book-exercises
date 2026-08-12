import readline from "node:readline";
import Dictionary from "./Dictionary.ts";

/**
 * Write a program that takes a set of names and phone numbers from a text file and
 * stores them in a Dictionary object. Include in your program tha ability to display one phone number,
 * display all phone numbers, add a new phone numbers. remove phone numbers, and clear the list of numbers.
 */

// Simulated file content
const FILE = `Carlos-553445
Pedro-345423
Abraham-340932`;

const directory = new Dictionary<number>();

const lines = FILE.split("\n");
for (const line of lines) {
  const [name, phone] = line.split("-");
  if (name && phone) {
    directory.add(name.trim(), Number(phone.trim()));
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu(): void {
  console.log("\n--- PHONE DIRECTORY MENU ---");
  console.log("1. Display one phone number");
  console.log("2. Display all phone numbers");
  console.log("3. Add a new phone number");
  console.log("4. Remove a phone number");
  console.log("5. Clear all phone numbers");
  console.log("6. Exit");

  rl.question("\nSelect an option: ", (choice: string) => {
    switch (choice.trim()) {
      case "1":
        rl.question("Enter name to search: ", (name: string) => {
          const number = directory.find(name.trim());
          if (number !== undefined && number !== null) {
            console.log(`${name}'s phone number is: ${number}`);
          } else {
            console.log(`Contact '${name}' not found.`);
          }
          displayMenu();
        });
        break;

      case "2":
        console.log("\n--- ALL CONTACTS ---");
        directory.showAll();
        displayMenu();
        break;

      case "3":
        rl.question("Enter name: ", (name: string) => {
          rl.question("Enter phone number: ", (phoneStr: string) => {
            const phone = Number(phoneStr);
            if (isNaN(phone)) {
              console.log("Invalid phone number.");
            } else {
              directory.add(name.trim(), phone);
              console.log(`Contact '${name}' added successfully.`);
            }
            displayMenu();
          });
        });
        break;

      case "4":
        rl.question("Enter name to remove: ", (name: string) => {
          directory.remove(name.trim());
          console.log(`Contact '${name}' removed (if existed).`);
          displayMenu();
        });
        break;

      case "5":
        directory.clear();
        console.log("All numbers cleared from directory.");
        displayMenu();
        break;

      case "6":
        console.log("Goodbye!");
        rl.close();
        break;

      default:
        console.log("Invalid choice. Try again.");
        displayMenu();
        break;
    }
  });
}

// Start the interactive program
displayMenu();