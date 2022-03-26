'use strict'

let numOne = prompt('Введите целое число');

if (+numOne > 0) {
    console.log(`Число ${numOne} положительное`);
} else {
    console.log(`Число ${numOne} отрицательное`);
}
if (numOne.length === 1) {
    console.log(`Число ${numOne} однозначное`);
} else if (numOne.length === 2) {
    console.log(`Число ${numOne} двузначное`);
} else if (numOne.length === 3) {
    console.log(`Число ${numOne} трехзначное`);
} else if (numOne.length > 3) {
    console.log(`Число ${numOne} многозначное`);
} else {
    console.log(`Invalid value`);
}