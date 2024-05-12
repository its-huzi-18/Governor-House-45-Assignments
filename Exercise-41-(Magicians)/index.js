"use strict";
function show_magicians(MagiciansNames) {
    for (let val of MagiciansNames)
        console.log(val);
}
// Make an array of magician's names
let MagiciansNames = ["David Blaine", "Derren Brown", "Lance Burton",
    "Harry Houdini", "Shin Lim", "Ricky Jay"];
// Call the function to print the name of each magician in the array
show_magicians(MagiciansNames);
