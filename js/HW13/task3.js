'use strict'

let numOne = prompt('Введите целое число');
let result = 0;

if (+numOne > 0) {
    result = `Число ${numOne} положительное`;
} else {
    result = `Число ${numOne} отрицательное`;;
}
if (numOne.length === 1) {
    result += ` однозначное`;
} else if (numOne.length === 2) {
    result += ` двузначное`;
} else if (numOne.length === 3) {
    result += ` трехзначное`;
} else if (numOne.length > 3) {
    result += ` многозначное`;
} else {
    result += ` Invalid value`;
}

console.log( result );