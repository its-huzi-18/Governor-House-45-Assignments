"use strict";
function make_car(manufacturer, modelName, ...additionalInfo) {
    let carInfo = Object.assign({ manufacturer: manufacturer, modelName: modelName }, Object.assign({}, ...additionalInfo));
    return carInfo;
}
let carData = make_car("Honda", "Civic", { color: "black" }, { features: ["Navigation", "Power window"] });
console.log(carData);
