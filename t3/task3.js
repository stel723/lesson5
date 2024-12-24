const prompt = require('prompt-sync')();
let num = prompt("Введите число:");
for (let i = 1; i <= num; i += 2 ){
    if (num%1 == 0){
        console.log(num)
    }
}