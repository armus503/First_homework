"use strict";

let a = 5;
let b = a; // для примитивных типов данных действует передача по значению

console.log(b);

const obj = {
    a: 5,
    b: 1
};

//const copy = obj; //ссылка на объект

//copy.a = 10; // т.к. сору ссылка на obj, то значение через ссылку передается в объект obj

//console.log(copy);
//console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

//const newNumbers = copy(numbers);

//newNumbers.a = 10; // поверхностные значения затрагивают только значения копии
//newNumbers.c.x = 10; // при нескольких уровнях вложенности действует как ссылка и значения изменяются у изначального объекта

//console.log(newNumbers);
//console.log(numbers);

const add = { // создадим новый объект
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add)); // произошло объединение двух объектов

const clone = Object.assign({}, add); // клонируем значения из объкта add в пустой объект clone

clone.d = 21; // значение свойства d изменится только в клонируемом объекте

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // копируем значения из массива oldArray в массив newArray

newArray[1] = 'abd'; // изменяем втрое значение массива newArray
console.log(newArray);
console.log(oldArray);