"use strict";

//1)let x = 5;
//alert(x++); => 5

//2)console.log([] + false - null + true); => NaN в таких операциях пустой массив [] приводится к строковому типу данных(пустой строке)

//3)let y = 1;
//let x = y = 2; // операции тут идут справа налево, поэтому сначала у присваивается значение 2, затем х присваивается значение у
//alert(x); => 2

//4)
//console.log([ ] + 1 + 2); => 12 // тут так же пустой массив становится строкой, и происходит конкатенация(при присоединении числа к строке получается строка)

//5)
//alert("1" [0]); // выводится значение строки по индексу

//6)
//console.log(2 && 1 && null && 0 && undefined); => null
// И запинается на ЛЖИ, а null всегда возвращает false, поэтому после того, как выражение наткнется на null, выполнение операции закончится и возвратит false

//7)
//(!!( a && b ) === (a && b)) => false, т.к. !! превращает выражение в булиновое, а булиновое выражение не может быть равным логическому выражению

//7.1
//alert(null || 2 && 3 || 4); => 3 //по приоритету сначала выполняется И, т.к. оба true, то вернет последнее значение(3), 
// дальше сравнение null и 3, а т.к. ИЛИ запинается на првде, то выводит 3, далее сравнивается 3 ИЛИ 4, и снова запинается на TRUE и возвращается 3

//8)
/*let a = [1, 2, 3]; let b = [1, 2, 3]; => false
if(a == b) {
    console.log(true);
} else {
    console.log(false);
}*/
// не равны потому, что это два разных хранилища информации, просто с идентичными значениями

//9)
//alert(+"Infinity"); => Infinity
// строка приводится к числовому типу данных посредством унарного плюса

//10)
//console.log("Ёжик" > "яблоко"); => false
// посмотреть можно в таблице Unicode

//11)
//console.log(0 || "" || 2 || undefined || true || falsе); => 2
// как только код наткнется на true(2) выполнение прервется и  выведется 2