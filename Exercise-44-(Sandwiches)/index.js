"use strict";
function makeSandwich(item) {
    console.log("\nMaking your sandwich with:");
    // With forLoop:
    // for(let val of item){
    //     console.log(`- ${val}`)};
    // With forEach:
    item.forEach(elment => console.log(`- ${elment}`));
    console.log("Enjoy your sandwich!");
}
makeSandwich(["Ham", "Cheese", "letuce"]);
makeSandwich(["Chicken", "Ketchup", "Cucumber"]);
makeSandwich(["Peanut", "Butter", "Jelly"]);
