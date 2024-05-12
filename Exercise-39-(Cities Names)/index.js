"use strict";
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
let cityCountryValue = cityCountry("'Lahore'", "Pakistan");
let cityCountryValue2 = cityCountry("Tokyo", "Japan");
let cityCountryValue3 = cityCountry("Melbourne", "Australia");
console.log(`${cityCountryValue}\n${cityCountryValue2}\n${cityCountryValue3}`);
