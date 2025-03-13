const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let deck = [];
let tableau = [[], [], [], [], [], [], []];
let foundations = [[], [], [], []];

// Создаем колоду карт
function createDeck() {
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push(rank + suit);
        }
    }
    shuffleDeck();
}

// Перемешиваем колоду
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Раздаем карты
function dealCards() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j <= i; j++) {
            tableau[i].push(deck.pop());
        }
    }
}

// Рисуем колоду карт
function drawCards() {
    const stockDiv = document.getElementById('stock');
    stockDiv.textContent = '🔄'; // Значок для колоды
    stockDiv.addEventListener('click', () => {
        if (deck.length > 0) {
            const card = deck.pop();
            const wasteDiv = document.getElementById('waste');
            wasteDiv.textContent = card; // Показываем верхнюю карту
        }
    });

    tableau.forEach((column, index) => {
        const tableauDiv = document.querySelectorAll('.tableau-column')[index];
        column.forEach((card, i) => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.textContent = card;
            tableauDiv.appendChild(cardDiv);
        });
    });
}

// Инициализация игры
createDeck();
dealCards();
drawCards();