"use strict";
// Test for equality and inequality with strings
let fruit = "apple";
console.log("Is fruit == 'apple' ? I predict True.");
console.log(fruit == "apple");
console.log("Is fruit != 'apple' ? I predict False.");
console.log(fruit != "apple");
// Tests using the lower case function
let city = "New York";
console.log("Is fruit.toLowerCase() == 'new york' ? I predict True.");
console.log(city.toLocaleLowerCase() == "new york");
console.log("Is fruit.toLowerCase() == 'New York' ? I predict False.");
console.log(city.toLocaleLowerCase() == "New York");
// Numerical Test
let age = 19;
console.log("Is age >= 19 ? I predict True.");
console.log(age >= 19);
console.log("Is age > 19 ? I predict False.");
console.log(age > 19);
// Tests using "&&" and "||" operators
let sunny = true;
let warm = false;
console.log("It is sunny or warm ? I predict True.");
console.log(sunny || warm);
console.log("It is sunny and warm ? I predict False.");
console.log(sunny && warm);
// Test whether an item is in a array or Not
let fruitsArray = ["apple", "mango", "banana"];
console.log("Is apple is in the fruitsArray? I predict True.");
console.log(fruitsArray.includes('apple'));
console.log("Is pineApple is in the fruitsArray? I predict False.");
console.log(fruitsArray.includes('pineApple'));
