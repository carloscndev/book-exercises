import List from './List.ts'

/**
 * 4. Modify the video-rental kiosk program so that when a movie is checked it is 
 * added to a list of rented movies. Display this list whenever a customer check out
 * a movie.
 * 
 * 5. Create a check-in function for the rental kiosk program so that a returned
 * movies is deleted from the rented movies list and added back to the available
 * movies list.
 */

class Customer {
  private name: string;
  private movie: string;

  constructor(name: string, movie: string) {
    this.movie = movie;
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getMovie(): string {
    return this.movie;
  }
}

class ListMovies extends List<string> {
  checkout(name: string, movie: string, movieList: ListMovies, rentedMovies: RentedMovies, customerList: CustomerList): void {
    if (movieList.contains(movie)) {
      const customer = new Customer(name, movie);
      customerList.append(customer);
      movieList.remove(movie);
      rentedMovies.append(movie);
    }

    else {
      console.log(`This ${movie} is not available`)
    }
  }

  checkIn(customer: Customer, movieList: ListMovies, rentedMovies: RentedMovies, customerList: CustomerList): void {
    const movie = customer.getMovie();
    
    if (rentedMovies.contains(movie)) {
      customerList.remove(customer);
      movieList.append(movie);
      rentedMovies.remove(movie);
    }

    else {
      console.log(`This ${movie} is available`)
    }
  }

  displayList(): void {
    for (this.front(); this.hasNext();) {
      const currentMovie = this.next();

      console.log(`${this.currentPos()}: ${currentMovie}`)
    }
  }
}

class CustomerList extends List<Customer> {
  displayList(): void {
    for (this.front(); this.hasNext();) {
      let currentCustomer = this.next();
      console.log(`${currentCustomer.getName()} -> ${currentCustomer.getMovie()}`)
    }
  }

  getCustomer(name: string, movie: string): Customer | null {
    for (this.front(); this.hasNext();) {
      const currentCustomer = this.next();
      if (currentCustomer.getName() === name && currentCustomer.getMovie() === movie) {
        return currentCustomer;
      }
    }
    return null;
  }
}

class RentedMovies extends List<string> {
  displayList(): void {
    for (this.front(); this.hasNext();) {
      const currentMovie = this.next();

      console.log(`${this.currentPos()}: ${currentMovie}`)
    }
  }
}

const movieList = new ListMovies();
const rentedMovies = new RentedMovies();

movieList.append('The Godfather');
movieList.append('The Godfather II');
movieList.append('Pulp Fiction');
movieList.append('Inception');
movieList.append('Stars Wars');

const customerList = new CustomerList();

movieList.checkout('Carlos', 'Inception', movieList, rentedMovies, customerList);
movieList.checkout('Fatima', 'The Godfather', movieList, rentedMovies, customerList);

console.log('Customers:');
customerList.displayList();
console.log('Movies Available:');
movieList.displayList();
console.log('Movies Rented:');
rentedMovies.displayList();
console.log('-----------------');
console.log('Check-in');
const customer = customerList.getCustomer('Carlos', 'Inception');
if (customer) {
  movieList.checkIn(customer, movieList, rentedMovies, customerList);
}
console.log('Customers:');
customerList.displayList();
console.log('Movies Available:');
movieList.displayList();
console.log('Movies Rented:');
rentedMovies.displayList();