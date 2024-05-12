// Exercise# 45 Cars:
function make_car(manufacturer:string,modelName:string, ...additionalInfo:{[key:string]:any}[]):object{
let carInfo = {
    manufacturer:manufacturer,
    modelName:modelName,
    ...Object.assign({},...additionalInfo)
}
return carInfo;
}
//passing arguments to my function
let carData = make_car("Honda","Civic",{color:"black"},{features:["Navigation","Power window"]});
console.log(carData);
