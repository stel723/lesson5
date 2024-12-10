const promt = require('prompt-sync')();
let x = promt('Введите число:')
if (x>=0 && x<=9) {
    console.log('истина')
} else{
    console.log('ложь')
}