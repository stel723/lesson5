class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.normalizeTime(); // Нормализация времени при создании объекта
    }

    // Функция для нормализации времени (чтобы секунды и минуты не превышали 59)
    normalizeTime() {
        // Обработка секунд
        this.minutes += Math.floor(this.seconds / 60);
        this.seconds = this.seconds % 60;

        // Обработка минут
        this.hours += Math.floor(this.minutes / 60);
        this.minutes = this.minutes % 60;

        // Обработка часов (если часы превышают 23, сбрасываем их)
        this.hours = this.hours % 24;
    }

    // Функция вывода времени на экран
    displayTime() {
        const format = (num) => String(num).padStart(2, '0'); // Добавляем ведущий ноль, если число < 10
        console.log(`${format(this.hours)}:${format(this.minutes)}:${format(this.seconds)}`);
    }

    // Функция изменения времени на переданное количество секунд
    addSeconds(seconds) {
        this.seconds += seconds;
        this.normalizeTime(); // Нормализация времени после добавления секунд
    }

    // Функция изменения времени на переданное количество минут
    addMinutes(minutes) {
        this.minutes += minutes;
        this.normalizeTime(); // Нормализация времени после добавления минут
    }

    // Функция изменения времени на переданное количество часов
    addHours(hours) {
        this.hours += hours;
        this.normalizeTime(); // Нормализация времени после добавления часов
    }
}

// Пример использования:
const time = new Time(20, 30, 45); // Создаем объект времени 20:30:45

time.displayTime(); // Вывод времени: 20:30:45

time.addSeconds(30); // Добавляем 30 секунд
time.displayTime(); // Вывод времени: 20:31:15

time.addMinutes(45); // Добавляем 45 минут
time.displayTime(); // Вывод времени: 21:16:15

time.addHours(5); // Добавляем 5 часов
time.displayTime(); // Вывод времени: 02:16:15