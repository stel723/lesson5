const deckElement = document.getElementById('deck');
const tableauElement = document.getElementById('tableau');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

const suits = ['Черви', 'Бубны', 'Трефы', 'Пики'];
const values = ['6', '7', '8', '9', '10', 'В', 'Д', 'К', 'Т'];
let deck = [];
let score = 0;
let timer = 0;
let timerInterval;

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

// Отображение карты
function drawCard() {
    if (deck.length === 0) {
        alert("Карт больше нет в колоде!");
        return;
    }
    const card = deck.pop();
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.textContent = `${card.value} ${card.suit}`;
    tableauElement.appendChild(cardElement);
    updateScore(1); // Увеличиваем счет на 1 за каждую раздачу карты
}

// Обновление счета
function updateScore(points) {
    score += points;
    scoreElement.textContent = score;
}

// Запуск таймера
function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        timerElement.textContent = timer;
    }, 1000);
}

// Инициализация игры
function initGame() {
    createDeck();
    startTimer();
}

// Запуск игры
initGame();