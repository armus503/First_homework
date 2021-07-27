"use strict";

const num = 50;

if (1) {
    console.log('Ok!');
} else {
    console.log('Error');
}

((num === 50) ? console.log('OLI!') : console.log('NO!'));

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log('Много');
} else {
    console.log("You, it`s people!");
}

switch (num) {
    case 1:
        console.log('HYU');
        break;
    case 87:
        console.log('jbhb');
        break;
    case 1:
        console.log('Hkbj');
        break;
    default:
        console.log("You!");
        break;
}