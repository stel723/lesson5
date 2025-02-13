const prompt = require('prompt-sync')();

class ExtendedDate extends Date {
   
    toText() {
        const months = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];
        const day = this.getDate();
        const month = months[this.getMonth()];
        return `${day} ${month}`;
    }

    isFuture() {
        const now = new Date();
        return this >= now;
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    getNextDate() {
        const nextDate = new ExtendedDate(this);
        nextDate.setDate(this.getDate() + 1);
        return nextDate;
    }
}

const date = new ExtendedDate(2024, 2, 15); 

console.log("Дата текстом:", date.toText()); 
console.log("Это будущая или текущая дата?", date.isFuture());
console.log("Это високосный год?", date.isLeapYear()); 
console.log("Следующая дата:", date.getNextDate().toText()); 