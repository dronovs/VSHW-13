'use strict'

let a = +prompt('Enter a number');
let b = +prompt('Enter a number');
let c = +prompt('Enter a number');

if (a > b && a > c) {
    console.log(`${a} is bigger than others`);
} else if (b > a && b > c) {
    console.log(`${b} is bigger than others`);
} else if (c > b && c > a) {
    console.log(`${c} is bigger than others`);
} else if (a === b && a > c) {
    console.log(`${a} and ${b} are bigger than ${c}`);
} else if (b === c && c > a) {
    console.log(`${c} and ${b} are bigger than ${a}`);
} else if (a === b && a === c) {
    console.log(`All numbers are equal`);
}