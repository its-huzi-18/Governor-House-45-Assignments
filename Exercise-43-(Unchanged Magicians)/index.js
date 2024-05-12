"use strict";
// Make an array of magician's names
let MagiciansNames = ["David Blaine", "Derren Brown", "Lance Burton",
    "Harry Houdini", "Shin Lim", "Ricky Jay"];
// Copy array
function copyArr(arr) {
    return [...arr];
}
//Modifying to Great Magicians
function make_great(greatMagicians) {
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = `The Great ${greatMagicians[i]}`;
    }
}
function show_magicians(Magicians) {
    for (let val of Magicians) {
        console.log(val);
    }
}
// Call make_great to modify the array of magicians
let CopyArray = copyArr(MagiciansNames);
make_great(CopyArray);
console.log(`\nThis is my Orignal array`);
show_magicians(MagiciansNames);
console.log(`\nThis is my Modified copy array`);
show_magicians(CopyArray);
