'use strict'

let numOrStr = prompt('input number or string');

switch (numOrStr) {
    case null:
        console.log('вы отменили');
        break;
    case (""):
        console.log('Empty String');
        break;
    case !isNaN(+numOrStr) || numOrStr:
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}

