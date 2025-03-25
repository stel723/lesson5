const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];
let score = 0;

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
    const tableau = document.getElementById('tableau');
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style.backgroundImage = `url('images/${card.rank}_of_${card.suit}.png')`; // Путь к изображению карты
    tableau.appendChild(cardDiv);
}

document.getElementById('deck').addEventListener('click', drawCard);

createDeck();