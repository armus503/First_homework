"use strict";

//1)let x = 5;
//alert(x++); => 5

//2)console.log([] + false - null + true); => NaN в таких операциях пустой массив [] приводится к строковому типу данных(пустой строке)

//3)let y = 1;
//let x = y = 2; // операции тут идут справа налево, поэтому сначала у присваивается значение 2, затем х присваивается значение у
//alert(x); => 2

//4)
//console.log([ ] + 1 + 2); => 12

//5)
//alert("1" [0]);

//6)
//console.log(2 && 1 && null && 0 && undefined); => null

//7)
//alert(null || 2 && 3 || 4); => 3

//8)
/*let a = [1, 2, 3]; let b = [1, 2, 3]; => false
if(a == b) {
    console.log(true);
} else {
    console.log(false);
}*/

//9)
//alert(+"Infinity"); => Infinity

//10)
//console.log("Ёжик" > "яблоко"); => false

//11)
//console.log(0 || "" || 2 || undefined || true || falsе); => 2