"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listOfGuests = void 0;
const listOfGuests = ["Elon Musk", "Mr Beast", "Bill Gates", "Mark zuckerberg"];
exports.listOfGuests = listOfGuests;
for (let val of listOfGuests) {
    //Printing with Invitation message
    console.log(`Dear! ${val} you are invited to dinner tonight, We would be honored to have you join us.`);
}
