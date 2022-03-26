'use strict'

const a = +prompt('Введите длину первой стороны');
const b = +prompt('Введите длину второй стороны');
const c = +prompt('Введите длину третьей стороны');

if ((a + b) < c || (b + c) < a || (c + a) < b) {
    console.log('Не бывать такому треугольнику');
} else {
    console.log('Быть треугольнику');
}