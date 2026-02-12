console.log("Array script loaded");

let names = ["Rollie", "Bob", "John", "Jane"];

//Acess the valuess
names[2];
console.log(names[2]); // example of accessing the value at index 2

// Modify values
names[0] = "Alice";
console.log(names); // example of modifying the value at index 0

// add a value to the end of the array -> using push method
// 1 call the array without position
// 2 call the push method and provide the value you want to add as an argument
// 3 provide the value you want to add as an argument
names.push("Charlie");
console.log(names); // example of adding a value to the end of the array

// add a value to the beginning of the array -> using unshift method
// 1 call the array without position
// 2 call the unshift method and provide the value you want to add as an argument
// 3 provide the value you want to add as an argument
names.unshift("Dave");
console.log(names); // example of adding a value to the beginning of the array

//reomve the last value of the array -> using pop method (slice, splice)
// 1 call the array without position
// 2 call the pop method without providing any arguments
names.pop();
console.log(names); // example of removing the last value of the array
//slice method
// 1 call the array without position
// 2 call the slice method and provide the start index and end index as arguments
// 3 provide the start index and end index as arguments
let slicedNames = names.slice(1, 3);
console.log(slicedNames); // example of using the slice method to get a portion of the array
//splice method
// 1 call the array without position
// 2 call the splice method and provide the start index, number of elements to remove, and new elements to add as arguments
// 3 provide the start index, number of elements to remove, and new elements to add as arguments
names.splice(1, 2, "Eve", "Frank");
console.log(names); // example of using the splice method to remove and add elements in the array

// practice favorite movie list 5
let favoriteMovies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction"];
console.log(favoriteMovies[0], favoriteMovies[4]); // example of creating an array of favorite movies
favoriteMovies[3] = "The Lord of the Rings"; // example of modifying a value in the array
console.log(favoriteMovies);
favoriteMovies.push("The Shawshank Redemption"); // example of adding a value to the end of the array
favoriteMovies.unshift("The Godfather"); // example of adding a value to the beginning of the array
console.log(favoriteMovies);
favoriteMovies.pop(); // example of removing the last value of the array
console.log(favoriteMovies);