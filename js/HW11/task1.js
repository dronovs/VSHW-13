'use strict'
let a = 4;
let b = 7;

//1
a === 0 ? console.log('Right') : console.log('Wrong');
//2
(a > 0) ? console.log('Right') : console.log('Wrong');
//3
(a < 0) ? console.log('Right') : console.log('Wrong');
//4
(a > 0 || a === 0) ? console.log('Right') : console.log('Wrong');
//5
(a < 0 || a === 0) ? console.log('Right') : console.log('Wrong');
//6
a !== 0 ? console.log('Right') : console.log('Wrong');
//7
(a == 'test') ? console.log('Right') : console.log('Wrong');
//8
(a === '1') ? console.log('Right') : console.log('Wrong');
//9
(a > 0 && a < 5) ? console.log('Right') : console.log('Wrong');

//10
if (a === 0 || a === 2) {
    console.log(a + 7);
} else {
    console.log(a / 10);
}

//11
if (a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

//12
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Right');
} else {
    console.log('Wrong');
}

//13
let num = 3;
let result = null;

switch (num) {
    case 1:
        result = 'Winter';
        break;
    case 2:
        result = 'Spring';
        break;
    case 3:
        result = 'Summer';
        break;
    case 4:
        result = 'Autumn';
        break;
}
console.log(result);