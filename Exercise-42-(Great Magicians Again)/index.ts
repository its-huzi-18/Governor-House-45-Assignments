// Make an array of magician's names
let MagiciansNames:string [] = ["David Blaine","Derren Brown","Lance Burton",
"Harry Houdini","Shin Lim","Ricky Jay"];

//Modifying to Great Magicians
function make_great (greatMagicians:string[]){
 for(let i=0 ;i < greatMagicians.length ;i++){
MagiciansNames[i] = `The Great ${greatMagicians[i]}`
 }
   }


function show_magicians (Magicians:string[]){
   for(let val of Magicians){
    console.log(val)
   }
}

// Call make_great to modify the array of magicians
make_great(MagiciansNames);
show_magicians(MagiciansNames)

