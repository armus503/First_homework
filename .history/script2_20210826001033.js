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