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
let draggedCard = null;

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
    const cardElement = createCardElement(card);
    tableauElement.appendChild(cardElement);
    updateScore(1); // Увеличиваем счет на 1 за каждую раздачу карты
}

// Создание элемента карты
function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.textContent = `${card.value} ${card.suit}`;
    cardElement.draggable = true;

    cardElement.addEventListener('dragstart', (e) => {
        draggedCard = cardElement;
        setTimeout(() => {
            cardElement.classList.add('dragging');
        }, 0);
    });

    cardElement.addEventListener('dragend', () => {
        draggedCard = null;
        cardElement.classList.remove('dragging');
    });

    tableauElement.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    tableauElement.addEventListener('drop', (e) => {
        if (draggedCard) {
            tableauElement.appendChild(draggedCard);
        }
    });

    return cardElement;
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