"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let val of numbers) {
    let ordinalSuffix;
    if (val === 1) {
        ordinalSuffix = "st";
    }
    else if (val === 2) {
        ordinalSuffix = "nd";
    }
    else if (val === 3) {
        ordinalSuffix = "rd";
    }
    else {
        ordinalSuffix = "th";
    }
    console.log(`${val}${ordinalSuffix}`);
}
