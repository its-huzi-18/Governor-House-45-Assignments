"use strict";
// Making Array
let userName = ["admin", "Kawish", "Ahmed", "Huzaifa", "Imad"];
// In this loop one by one array values come and will print on the basis of if and else condition
for (let val of userName) {
    if (val == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${val}, thank you for logging in again.`);
    }
}
