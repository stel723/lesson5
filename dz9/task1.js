const prompt = require('prompt-sync')();

class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value <= 0) {
            throw new Error("Радиус должен быть положительным числом.");
        }
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }

    calculateCircumference() {
        return 2 * Math.PI * this._radius;
    }
}

const circle = new Circle(5);

console.log("Радиус окружности:", circle.radius);
console.log("Диаметр окружности:", circle.diameter); 

circle.radius = 10; 
console.log("Новый радиус окружности:", circle.radius); 
console.log("Новый диаметр окружности:", circle.diameter);

console.log("Площадь окружности:", circle.calculateArea()); 
console.log("Длина окружности:", circle.calculateCircumference()); 