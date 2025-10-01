/*
Clifford Odige
Homework 3 – Objects and exception handling in JS
*/

// Class representing a single movie
class Movie {
    constructor(title, director, year) {
      this.title = title;
      this.director = director;
      this.year = year;
    }
  
    getDetails() {
      return `${this.title}, directed by ${this.director}, released in ${this.year}`;
    }
  }
  
  // Class representing a collection of movies
  class MovieCollection {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      try {
        if (!(movie instanceof Movie)) {
          throw new Error("Only valid Movie objects can be added.");
        }
        this.movies.push(movie);
      } catch (error) {
        console.error("Add Error:", error.message);
      }
    }
  
    removeMovie(title) {
      try {
        const index = this.movies.findIndex((m) => m.title === title);
        if (index === -1) {
          throw new Error(`Movie titled '${title}' not found.`);
        }
        this.movies.splice(index, 1);
      } catch (error) {
        console.error("Remove Error:", error.message);
      }
    }
  
    showMovies() {
      try {
        if (this.movies.length === 0) {
          throw new Error("No movies available in the collection.");
        }
        this.movies.forEach((movie) => {
          console.log(movie.getDetails());
        });
      } catch (error) {
        console.error("Show Error:", error.message);
      }
    }
  }
  
  // === Example Usage ===
  
  const myCollection = new MovieCollection();
  
  const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
  const movie2 = new Movie("Black Panther", "Ryan Coogler", 2018);
  const notAMovie = { title: "Fake", director: "None", year: 2020 };
  
  myCollection.addMovie(movie1);
  myCollection.addMovie(movie2);
  myCollection.addMovie(notAMovie); // triggers error
  
  myCollection.showMovies();
  
  myCollection.removeMovie("Inception");
  myCollection.removeMovie("Nonexistent Movie"); // triggers error
  
  myCollection.showMovies();
  