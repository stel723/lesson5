const prompt = require('prompt-sync')();
let chislo = prompt("Введите трехзначное число:");
let num1 = chislo%10
let num2 = Math.floor((chislo%100)/10)
let num3 = Math.floor(chislo/100)
console.log(num1,num2, num3)