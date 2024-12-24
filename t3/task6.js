const prompt = require('prompt-sync')();
let num = prompt("Введите число:");
let days = 0;
while (num >= 10){
    num *= 0.9;
    days ++;
}
console.log(days)