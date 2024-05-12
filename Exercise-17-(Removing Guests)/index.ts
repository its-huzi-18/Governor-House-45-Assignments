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
 // Shrinking Guest list
 console.log("\nUnfortunatly, the new dinner table won't arrive in time, and I can invite only two people for dinner.");

 //Printing one by one name
while(listOfGuests.length > 2){
    const shrinkList = listOfGuests.pop()
 console.log(`Sorry ${shrinkList}, I can't invite you to dinner.`)
}
//Remaining two Guests
console.log(`\nInvitation to the final Two Guests:`)
for(let Remaining of listOfGuests){
    console.log(`${Remaining}, you are still invited to dinner. We hope to see you.`);
}
//Removing Guest who reached
listOfGuests.pop()
listOfGuests.pop()

//Empty Guest List
console.log("\nFinal Guest List:",listOfGuests)
