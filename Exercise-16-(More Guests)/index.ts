const listOfGuests:string[] = ["Elon Musk","Kamran Khan Tessori","Bill Gates","Mark zuckerberg"];

// Printing with Invitation message
console.log("\nInvitations:")
for(let val of listOfGuests){
    console.log(`Dear ${val}, you are invited to dinner tonight. We would be honored to have you join us.`)
 }
 console.log("\nGreat news! We found a bigger dinner table.");

 //Adding Guest
 console.log("\nMore Invitations:")
 listOfGuests.unshift("Daniyal Nagori")
 listOfGuests.splice(3,0,"Sir Ameen");
 listOfGuests.push("Babar Azam");
 for(let val of listOfGuests){
    console.log(`Dear ${val}, you are invited to dinner tonight. We would be honored to have you join us.`)
 }