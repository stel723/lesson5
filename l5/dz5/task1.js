const prompt = require('prompt-sync')();

function stepen(base,exp) {
    if (exp == 0) {
        return 1;
    }
    if (exp < 0) {
        return 1 / stepen(base, -exp);
    }
    return base * stepen(base,exp, -1);
}

const base = prompt('Введите число:');
const exp = promt('Введите степень:');
const exp = stepen(base, -exp);

console.log(result);