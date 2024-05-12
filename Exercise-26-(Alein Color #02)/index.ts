// Version #01 when If statement gets true
let aleinColor = "green";

if (aleinColor == "green"){
    console.log("The player just earned 5 points for shooting the alien.");
}else{
    console.log("The player just earned 10 points.")
}
// Version #2 when else statement gets true
aleinColor = "red";
if(aleinColor == "green"){
    console.log("The player just earned 5 points.")
}else{
    console.log("The player just earned 10 points.")
}