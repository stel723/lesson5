// Создаем массив, описывающий чек в магазине
const receipt = [
    { name: "Молоко", quantity: 2, price: 80 },
    { name: "Хлеб", quantity: 1, price: 40 },
    { name: "Яблоки", quantity: 3, price: 60 },
    { name: "Сыр", quantity: 1, price: 200 },
];

// 1. Функция распечатки чека на экран
function printReceipt() {
    console.log("Чек:");
    receipt.forEach((item) => {
        console.log(`${item.name} - ${item.quantity} шт. по ${item.price} руб. = ${item.quantity * item.price} руб.`);
    });
}

// 2. Функция подсчета общей суммы покупки
function calculateTotalAmount() {
    return receipt.reduce((total, item) => total + item.quantity * item.price, 0);
}

// 3. Функция получения самой дорогой покупки в чеке
function getMostExpensivePurchase() {
    let mostExpensive = receipt[0];
    receipt.forEach((item) => {
        if (item.quantity * item.price > mostExpensive.quantity * mostExpensive.price) {
            mostExpensive = item;
        }
    });
    return mostExpensive;
}

// 4. Функция подсчета средней стоимости одного товара в чеке
function calculateAveragePrice() {
    const totalAmount = calculateTotalAmount();
    const totalQuantity = receipt.reduce((total, item) => total + item.quantity, 0);
    return totalAmount / totalQuantity;
}

// Пример использования:

// Распечатка чека
printReceipt();

// Подсчет общей суммы покупки
const totalAmount = calculateTotalAmount();
console.log(`\nОбщая сумма покупки: ${totalAmount} руб.`);

// Получение самой дорогой покупки
const mostExpensive = getMostExpensivePurchase();
console.log(`Самая дорогая покупка: ${mostExpensive.name} на сумму ${mostExpensive.quantity * mostExpensive.price} руб.`);

// Подсчет средней стоимости одного товара
const averagePrice = calculateAveragePrice();
console.log(`Средняя стоимость одного товара: ${averagePrice.toFixed(2)} руб.`);