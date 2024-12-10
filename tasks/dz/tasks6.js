const prompt = require('prompt-sync')();
let dollar = prompt('введите количество долларов:');
const skolko = 0.95;
let euro = dollar * 0.95;
console.log(`столько долларов в евро ${euro}`);