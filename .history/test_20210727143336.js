"use strict";

let num = 50;

/*while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);*/

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        //break;//выходим из выполнения цикла, как только условие достигнуто
        continue; //позволяет пропустить шаг который не нужен, при этом не прерывая цикл, т.е. после continue снова к началу цикла переход просходит
    }
    console.log(i);
}