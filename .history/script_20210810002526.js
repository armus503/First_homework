"use strict";

let a = 5;
let b = a; // для примитивных типов данных действует передача по значению

console.log(b);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //ссылка на объект

copy.a = 10; // т.к. сору ссылка на obj, то значение через ссылку передается в объект obj

console.log(copy);
console.log(obj);