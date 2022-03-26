'use strict'
const numOrStr = prompt('Enter something');

if (numOrStr == null || numOrStr.trim() === '' || isNaN( +numOrStr )) {
    console.log('Unknown error ):');
} else {
    console.log('OK!')
}