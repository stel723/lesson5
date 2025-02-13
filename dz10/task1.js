const prompt = require('prompt-sync')();

class Marker {
    constructor(color, inkLevel) {
        this.color = color; // Цвет маркера
        this.inkLevel = inkLevel; // Уровень чернил в процентах
    }

    // Метод для печати текста
    print(text) {
        let output = '';
        for (const char of text) {
            if (this.inkLevel <= 0) {
                console.log("Чернила закончились!");
                break;
            }
            if (char !== ' ') {
                this.inkLevel -= 0.5; // Каждый символ (кроме пробела) использует 0.5% чернил
            }
            output += char;
        }
        console.log(`%c${output}`, `color: ${this.color};`);
        console.log(`Остаток чернил: ${this.inkLevel}%`);
    }
}
class RefillableMarker extends Marker {
    constructor(color, inkLevel) {
        super(color, inkLevel);
    }

    // Метод для заправки маркера
    refill(inkAmount) {
        if (this.inkLevel + inkAmount > 100) {
            this.inkLevel = 100; // Нельзя заправить больше 100%
        } else {
            this.inkLevel += inkAmount;
        }
        console.log(`Маркер заправлен. Текущий уровень чернил: ${this.inkLevel}%`);
    }
}
// Создаем простой маркер
const simpleMarker = new Marker('blue', 10);
simpleMarker.print("Hello, World!"); // Печатаем текст
simpleMarker.print("Another text"); // Чернила закончатся после первой строки

// Создаем заправляемый маркер
const refillableMarker = new RefillableMarker('red', 20);
refillableMarker.print("This is a refillable marker.");
refillableMarker.refill(50); // Заправляем маркер
refillableMarker.print("Now it has more ink!");