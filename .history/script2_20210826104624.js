'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

//console.dir(box); //посмотреть на элемент в качестве объекта

//инлайн стили(применяемые через JS) имеют приоритет перед стилями CSS
box.style.backgroundColor = 'blue'; //значения стилей записываем
box.style.width = '500px'; //в строковом формате, иначе не применятся

btns[1].style.borderRadius = '100%'; //меняем радиус второй кнопки псевдомассива btns

/*! этот способ назначения свойств действует только для отдельных элементов
для псевдомассива используется свойство cssText */

box.style.cssText = 'background-color: purple; width: 500px'; //стили записываются уже как в CSS
//так же можно использовать переменные, если свойства меняются динамически

//Для произведения одних и тех же действий над несколькими элементами используем циклы for, for...in, forEach(только вместе с querySelectorAll):

/*for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'orange';
}*/

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
}); //стили примеятся ко всем элементам списка hearts


//Основные методы для работы с элементами страницы
//1) Создание элементов страницы при помощи скрипта(метод createElement)
const div = document.createElement('div'); //элемент создан и существует только внутри JS файла