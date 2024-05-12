"use strict";
let currentName = ["Rafey", "kawish", "Bilal", "Faizan", "Zayan"];
let UserName = ["Zain", "kawish", "Huzaifa", "Faizan", "Kashif"];
UserName.forEach(UserNameValue => {
    let lowerCase = UserNameValue.toLowerCase();
    if (currentName.map(currentNameValue => currentNameValue.toLowerCase()).includes(lowerCase)) {
        console.log(`${UserNameValue} has already been used,you will need to enter a
new username.`);
    }
    else {
        console.log(`${UserNameValue} is available`);
    }
});
