import List from './List.ts'
/**
 * 3. Create a Person class that stores a person's name and their gender
 * Create a list of at least 10 Person objects. Write a function
 * that display all the people in the list of the same gender.
 */


class Person {
  private name: string;
  private gender: 'Female' | 'Male';

  constructor(name: string, gender: 'Female' | 'Male') {
    this.name = name;
    this.gender = gender;
  }

  getName() {
    return this.name;
  }

  getGender() {
    return this.gender;
  }
}



class PersonList extends List<Person> {
  displaySameGenderElements(gender: string): void {
    for(this.front(); this.hasNext();) {
      const person = this.next() as Person;
      if(person.getGender() === gender) {
        console.log(`${person.getName()} -> ${person.getGender()}`)
      }
    }
  }
}

const person1 = new Person('Amelia', 'Female');
const person2 = new Person('Emmanuel', 'Male');
const person3 = new Person('Monica', 'Female');
const person4 = new Person('Luis', 'Male');
const person5 = new Person('Karen', 'Female');
const person6 = new Person('Rogelio', 'Male');
const person7 = new Person('Ana Laura', 'Female');
const person8 = new Person('Abraham', 'Male');
const person9 = new Person('Araceli', 'Female');
const person0 = new Person('Carlos', 'Male');

const personList = new PersonList();
personList.append(person0);
personList.append(person1);
personList.append(person2);
personList.append(person3);
personList.append(person4);
personList.append(person5);
personList.append(person6);
personList.append(person7);
personList.append(person8);
personList.append(person9);

personList.displaySameGenderElements('Female');
console.log('----------------------------------');
personList.displaySameGenderElements('Male')