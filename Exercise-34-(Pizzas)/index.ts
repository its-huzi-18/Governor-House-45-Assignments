let pizzas:string [] = ["Chicken Tikka","BBQ","Chiken Fajita"];

// Printing the name of each pizza
console.log("Pizza names:");
for(let val of pizzas){
    console.log(`${val}`)
}

// Printing a sentence for each pizza
console.log("\nStatements about my favorite pizzas:");
for(let val of pizzas){
    console.log(`I like ${val} pizza!`)
}

// Additional sentence about liking pizza
console.log(`\nI really like pizzas.Pizza comes in a varaiety of flavours and toppings,
allowing individuals to customize it to their liking`)
