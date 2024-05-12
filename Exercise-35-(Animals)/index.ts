let Animals:string [] = ["Cat","Dog","Rabbit"];
//Printing the names of animals
console.log("Names of Animals:")
for (let val of Animals){
    console.log(val);
}
//Printing the Statement about each animals
console.log(`\nStatement about each animal`)
for(let val of Animals){
    console.log(`A ${val.toLowerCase()} would make a great pet `)
}
console.log(`\nAll of these animal would make a great pet!`)