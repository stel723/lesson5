const prompt = require('prompt-sync')();
let gb = prompt('введите количество гигов:');
let result = gb*1024/820
console.log(`столько гигов ${result}`);