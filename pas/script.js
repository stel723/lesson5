const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];
let score = 0;
let tableau = [];
let foundation = [[], [], [], []]; // Фонды для каждой масти
let selectedCard = null;

function createDeck() {
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ suit, rank });
        }
    }
    deck = deck.slice(0, 36); // Оставляем только 36 карт
    shuffleDeck();
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function drawCard() {
    if (deck.length > 0) {
        const card = deck.pop();
        score++;
        document.getElementById('score').innerText = score;
        displayCard(card);
    } else {
        alert('Все карты разданы!');
    }
}

function displayCard(card) {
    const tableauDiv = document.getElementById('tableau');
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style.backgroundImage = `url('images/${card.rank}_of_${card.suit}.png')`; // Путь к изображению карты
    cardDiv.dataset.rank = card.rank;
    cardDiv.dataset.suit = card.suit;
    cardDiv.addEventListener('click', selectCard);
    tableauDiv.appendChild(cardDiv);
    tableau.push(card);
}

function selectCard(event) {
    const cardDiv = event.currentTarget;
    if (selectedCard) {
        // Если уже выбрана карта, проверяем возможность перемещения
        if (canMoveCard(selectedCard, cardDiv)) {
            moveCard(selectedCard, cardDiv);
            checkVictory();
        }
        selectedCard.classList.remove('selected');
        selectedCard = null;
    } else {
        selectedCard = cardDiv;
        selectedCard.classList.add('selected');
    }
}

function canMoveCard(selectedCard, targetCard) {
    // Логика для проверки возможности перемещения карты
    // Например, можно перемещать только на пустую ячейку или на карту меньшего ранга
    return true; // Упрощение, здесь должна быть ваша логика
}

function moveCard(selectedCard, targetCard) {
    // Логика перемещения карты
    targetCard.style.backgroundImage = selectedCard.style.backgroundImage;
    targetCard.dataset.rank = selectedCard.dataset.rank;
    targetCard.dataset.suit = selectedCard.dataset.suit;
    selectedCard.remove();
}

function checkVictory() {
    // Проверка на победу
    if (foundation.every(f => f.length === 9)) { // 9 карт в каждой масти
        document.getElementById('message').innerText = 'Вы выиграли!';
    }
}

document.getElementById('deck').addEventListener('click', drawCard);

createDeck();