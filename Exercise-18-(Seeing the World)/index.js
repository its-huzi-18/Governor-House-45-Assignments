"use strict";
let placesToVisit = ["Japan", "Swizerland", "Australia", "England", "India"];
// Printing in Orignal State
console.log("Orignal State:\n", placesToVisit);
//Alphabatic Order
let alphabaticOrder = [...placesToVisit].sort();
console.log("Alphabatic Order:\n", alphabaticOrder);
//Show that your array is still in its original order
console.log("Orignal List is still (UnChanged):\n", placesToVisit);
//Reverse-Alphabatic Order
let reverseAlphabaticOrder = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabatic Order:\n", reverseAlphabaticOrder);
//Show that your array is still in its original order
console.log("Orignal List is still (UnChanged):\n", placesToVisit);
//Reverse the Order of list
let reverseTheOrder = [...placesToVisit].reverse();
console.log("Reversed Order:\n", reverseTheOrder);
//Reverse the Order of list again and it get back to its orignal state
let reverseTheOrderAgain = [...reverseTheOrder].reverse();
console.log("Back to its Orignal State:\n", reverseTheOrderAgain);
//It's Stored in Alphabatic order
let sortedArray = [...reverseTheOrderAgain].sort();
console.log("Sorted in Alphabatic Order:\n", sortedArray);
//Sorted in Reverse-Alphabatic Order
let sortedReverseAlphabatic = [...sortedArray].sort().reverse();
console.log("Sorted in Reverse Alphabatic Order:\n", sortedReverseAlphabatic);
