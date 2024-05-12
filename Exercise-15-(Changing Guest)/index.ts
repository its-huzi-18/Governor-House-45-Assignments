const listOfGuests:string[] = ["Elon Musk","Mr Beast","Bill Gates","Mark zuckerberg"];

console.log(`\nOrignal Guest List:`)
// Printing with Invitation message
for(let val of listOfGuests){
    console.log(`Dear ${val}, you are invited to dinner tonight. We would be honored to have you join us.`)
 }
 // Who didn't make it to the dinner
 const guestUnableToAttend = "Mr Beast"; 
 console.log(`Unfortunately! ${guestUnableToAttend} can't make it to the dinner.`);

 // Replacement Guest
 const replacedGuest = "Kamran Khan Tessori";
 console.log(`\nUpdated Guest List:`);
 let change = listOfGuests.splice(1,1,replacedGuest);

 // Printing Upadated Guest
for (let val of listOfGuests){
    console.log(`Dear ${val}, you are invited to dinner tonight. We would be honored to have you join us.`)
}
