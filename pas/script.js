const deckElement = document.getElementById('deck');
const tableauElement = document.getElementById('tableau');
const foundationsElement = document.getElementById('foundations');
const scoreElement = document.getElementById('score');

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let deck = [];
let score = 0;

// Создание колоды
function createDeck() {
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }
    shuffleDeck();
}

// Перемешивание колоды
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Отображение колоды
function displayDeck() {
    const card = deck.pop();
    if (card) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `<img src="images/${card.value}_of_${card.suit}.png" alt="${card.value} of ${card.suit}">`;
        tableauElement.appendChild(cardElement);
        updateScore(1); // Увеличиваем счет на 1 за каждую раздачу карты
    }
}

// Обновление счета
function updateScore(points) {
    score += points;
    scoreElement.textContent = score;
}

// Инициализация игры
function initGame() {
    createDeck();
    for (let i = 0; i < 7; i++) { // Раздаем 7 карт
        displayDeck();
    }
}

// Запуск игры
initGame();