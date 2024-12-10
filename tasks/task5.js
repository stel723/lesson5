const prompt = require('prompt-sync')();
let x = prompt('Введите число:');
if (x%2==0) {
    console.log('истина')
} else{
    console.log('ложь')
}