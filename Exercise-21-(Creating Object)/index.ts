//Creating Structure of Object
interface Movie {
title:string,
director:string,
releaseYear: number
};

// Creating Object
const movie1:Movie = {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    releaseYear: 2008
}
const movie2:Movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010
};

//Printing Movies
console.log("\nFavorite Movies:")
console.log(`1. ${movie1.title} directed by ${movie1.director}, released in ${movie2.releaseYear}.`);
console.log(`2. ${movie2.title} directed by ${movie2.director}, released in ${movie2.releaseYear}.`)