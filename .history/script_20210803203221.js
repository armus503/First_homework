"use strict";

//const arr = [1, 2, 3, 5, 9];

//for (let i = 0; i < arr.length; i++) { //перебор элементов массива
//    console.log(arr[i]);
//}

//for (let value of arr) { // перебор элементов массива, применяется for...of так же для псевдомассивов и объектов
//    console.log(value);
//}

//arr.forEach(function(item, i, arr) { //данный метод служит только для перебора элементов массива
//    console.log(`${i}: ${item} внутри массива ${arr}`);
//});

//arr[99] = 0; //так делать не следует, т.к. происходит нарушение логики в программе
//console.log(arr.length); // свойство .length состоит из последнего элемента +1!!!
//console.log(arr);

//arr.pop(); //метод рор() удаляет последний элемент массива
//arr.push(11); //добавляет элемент в конец массива

//console.log(arr.pop()); //удаляет последний элемент массива и выводит его в консоль
//console.log(arr);

const str = prompt("", "");
const products = str.split('', '');
console.log(products);