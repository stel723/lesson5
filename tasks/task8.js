const prompt = require('prompt-sync')();
const days = ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'];
let day = 0;

do{
    console.log(`Сегодня ${days[day]}`);
    day = (day+1) % days.length;
} while(prompt('Хотите увидеть следующий день? y/n ').toLowerCase()=='y');