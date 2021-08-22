"use strict";

//Динамическая типизация:

//Перевод в строку:
//1) при помощи метода String:
console.log(typeof(String(null))); //=>string
console.log(typeof(String(7))); //=>string

//2)Конкатенация (когда что-то складываем со строкой, при сложении со строкой все равно получается строка):
console.log(typeof(5 + '')); //=>string

let num = 5;
console.log("https//vk.com/" + num); //=>https//vk.com/5

const fontSize = 26 + 'px'; //например нужно передавать размер в пикселях

//Превращение в число(To Number)

//1)при помощи метода Number:
console.log(typeof(Number('7'))); //=> number

//2)при помощи унарного плюса
console.log(typeof(+'7')); //=> number

//3)при помощи метода parseInt:
console.log(typeof(parseInt('15px', 11))); //=> number

//от пользователя все приходит с типом данных string, если нужно преобразовать в число, то используем унарный плюс:
let answ = +prompt('Hello', '');

//Перевод в булевое значение(to boolean):

//0, '', null, undefined, NaN; - это превращается в false, все остальное в JS true!

let switcher = null; //изначально false

if (switcher) {
    console.log('Working...');
}

switcher = 1; // теперь true

if (switcher) {
    console.log('Working...');
}