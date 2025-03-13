const suits = ['♠', '♣', '♥', '♦'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let deck = [];
let tableau = [];

// Создание колоды
function createDeck() {
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push(rank + suit);
        }
    }
    shuffle(deck);
}

// Перемешивание колоды
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Начало игры
function startGame() {
    createDeck();
    for (let i = 0; i < 7; i++) {
        tableau[i] = deck.splice(0, i + 1);
        displayTableau(i);
    }
    document.getElementById('stock').innerText = 'Осталось: ' + deck.length + ' карт';
}

function displayTableau(index) {
    const pile = document.querySelectorAll('.pile')[index];
    pile.innerHTML = ''; // Очищаем предыдущие карты
    tableau[index].forEach((card, idx) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card' + (idx === tableau[index].length - 1 ? '' : ' hidden');
        cardElement.innerText = card; // Для отображения
        pile.appendChild(cardElement);
    });
}

// Запуск игры
startGame();