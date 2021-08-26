'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

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

//2)Создание текстовых узлов
const text = document.createTextNode('Я был тут'); // текст помещен в текстовый узел(ноду) и появится на странице. Используется редко.

//3)Работа с классами
div.classList.add('black'); //добавить(add) класс 'black' к блоку div при  помощи свойства classList

/* !!!!!!! Любой элемент можно ставить в начало, конец, середину документа, но по отношению к другому элементу (принцип дерева DOM)!!!!!!!!!*/

//Современные методы для работы с элементами страницы

//1)метод append(в конец блока)
document.body.append(div); //вставить в конец тега body элемент div при помощи метода append

//document.querySelector('.wrapper').append(div); //если класс wrapper используетя только
//один раз на странице, то можно так(вставить в конец блока с классом wrapper элемент div)

//wrapper.append(div); //если класс wrapper используется на странице несколько раз
//создаем переменную wrapper и уже добавляем элемент div в конец блока с классом wrapper так

//2)свойство prepend(в начало блока)

//wrapper.prepend(div); //добавить элемент div в начало блока с классом wrapper