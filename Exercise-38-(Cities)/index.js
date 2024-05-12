"use strict";
function cities(cities, country = "Unknown") {
    console.log(`${cities} is in ${country}`);
}
// Function calliing by arguments:
cities("Karachi", "Pakistan");
cities("Paris", "France");
cities("Melbourne", "Australia");
cities("New York");
