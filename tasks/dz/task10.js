const prompt = require('prompt-sync')();
let userNumber = prompt();
if (userNumber % 2 == 0) {
    console.log('чётное')
} else {
    console.log('не чётное')
}