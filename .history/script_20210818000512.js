"use strict";

let str = "some"; //создаем простую строку(примитив)
let strObj = new String(str); // на основе строки str создаем объект(JS оборачивает простую строку в объект)

//console.log(typeof(str)); // выведет тип данных string
//console.log(typeof(strObj)); // выведет тип данных object

console.dir([1, 2, 3]); // выведется вся цепочка наследования прототипов вплоть до объекта

const soldier = { //прототип
    health: 400,
    armor: 100,
    sayHello() {
        console.log('Hello');
    }
};

const john = Object.create(soldier); // создаем новый объект john который будет прототипно наследоваться от soldier

//const john = { // наследник
//    health: 100
//};

//john.__proto__ = soldier; // данный метод устарел и его не следует применять, хотя он и встречается в старых проектах

Object.setPrototypeOf(john, soldier); // современный метод для назначения прототипа наследнику, т.е. здесь объекту john назначаем прототип soldier (применяем когда наследник уже определен)

console.log(john.armor); // оба свойства
john.sayHello(); // наследуются от прототипа

Object.getPrototypeOf(soldier);