let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperation(operation) {
    display.value += operation;
}
function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        let expression = display.value;

        // Обработка квадратного корня
        if (expression.includes('√')) {
            let number = expression.replace('√', '');
            display.value = Math.sqrt(parseFloat(number));
            return;
        }
        if (expression.includes('%')) {
            let parts = expression.split('%');
            let number = parseFloat(parts[0]);
            let percent = parseFloat(parts[1]);
            display.value = (number * percent) / 100;
            return;
        }

        display.value = eval(expression);
    } catch (error) {
        display.value = 'Ошибка';
    }
}