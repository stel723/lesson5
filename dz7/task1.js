// Создаем массив "Список покупок"
let shoppingList = [
    { name: "Яблоки", quantity: 5, bought: false },
    { name: "Хлеб", quantity: 1, bought: true },
    { name: "Молоко", quantity: 2, bought: false },
];

// 1. Функция вывода всего списка на экран (сначала некупленные, потом купленные)
function displayShoppingList() {
    // Сортируем список: сначала некупленные, потом купленные
    const sortedList = shoppingList.slice().sort((a, b) => a.bought - b.bought);

    sortedList.forEach((item) => {
        const status = item.bought ? "[Куплено]" : "[Не куплено]";
        console.log(`${item.name} - ${item.quantity} шт. ${status}`);
    });
}

// 2. Функция добавления покупки в список
function addToShoppingList(name, quantity) {
    // Проверяем, существует ли продукт в списке
    const existingItem = shoppingList.find((item) => item.name === name);

    if (existingItem) {
        // Если продукт уже есть, увеличиваем количество
        existingItem.quantity += quantity;
    } else {
        // Если продукта нет, добавляем новый объект
        shoppingList.push({ name, quantity, bought: false });
    }
}

// 3. Функция покупки продукта (отмечает продукт как купленный)
function buyProduct(name) {
    const product = shoppingList.find((item) => item.name === name);

    if (product) {
        product.bought = true;
    } else {
        console.log(`Продукт "${name}" не найден в списке.`);
    }
}

// Пример использования:

// Вывод списка до изменений
console.log("Список покупок до изменений:");
displayShoppingList();

// Добавляем новые продукты
addToShoppingList("Яблоки", 3); // Увеличиваем количество яблок
addToShoppingList("Сыр", 1); // Добавляем новый продукт

// Покупаем продукты
buyProduct("Молоко");
buyProduct("Сыр");

// Вывод списка после изменений
console.log("\nСписок покупок после изменений:");
displayShoppingList();