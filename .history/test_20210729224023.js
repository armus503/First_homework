"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage('Hello Ivan!');
console.log(num);

console.log(calc(13, 1));
console.log(calc(17, 41));
console.log(calc(134, 541));

function calc(a, b) {
    return (a + b);
}

function ret() {
    let num = 71;

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const pip = function() {
    console.log('You!');
};

pip();

const tops = (a, b) => {
    console.log('1');
    return a + b;
};