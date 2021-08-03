"use strict";

const arr = [1, 2, 3, 5, 9];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});



//arr[99] = 0; //так делать не следует, т.к. происходит нарушение логики в программе
//console.log(arr.length); // свойство .length состоит из последнего элемента +1!!!
//console.log(arr);

//arr.pop(); //метод рор() удаляет последний элемент массива
arr.push(11); //добавляет элемент в конец массива

//console.log(arr.pop()); //удаляет последний элемент массива и выводит его в консоль
console.log(arr);