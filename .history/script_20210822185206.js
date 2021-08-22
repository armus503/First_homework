"use strict";

//Динамическая типизация:

//Перевод в строку:
//1) при помощи метода String:
console.log(typeof(String(null))); //=>string
console.log(typeof(String(7))); //=>string

//2)Конкатенация (когда что-то складываем со строкой):
console.log(typeof(5 + '')); //=>string