const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];
let score = 0;
let tableau = [];
let foundation = [[], [], [], []]; // Фонды для каждой масти
let selectedCard = null;
let selectedColumn = null;

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
    const columnDiv = document.createElement('div');
    columnDiv.className = 'column';
    tableauDiv.appendChild(columnDiv);

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style.backgroundImage = `url('images/${card.rank}_of_${card.suit}.png')`; // Путь к изображению карты
    cardDiv.dataset.rank = card.rank;
    cardDiv.dataset.suit = card.suit;
    cardDiv.addEventListener('click', () => selectCard(cardDiv, columnDiv));
    columnDiv.appendChild(cardDiv);
    tableau.push(card);
}

function selectCard(cardDiv, columnDiv) {
    if (selectedCard) {
        // Если уже выбрана карта, проверяем возможность перемещения
        if (canMoveCard(selectedCard, cardDiv)) {
            moveCard(selectedCard, columnDiv);
            checkVictory();
        }
        selectedCard.classList.remove('selected');
        selectedCard = null;
    } else {
        selectedCard = cardDiv;
        selectedCard.classList.add('selected');
        selectedColumn = columnDiv;
    }
}

function canMoveCard(selectedCard, targetCard) {
    const selectedRankIndex = ranks.indexOf(selectedCard.dataset.rank);
    const targetRankIndex = ranks.indexOf(targetCard.dataset.rank);
    return targetRankIndex === selectedRankIndex - 1; // Можно перемещать только на карту меньшего ранга
}

function moveCard(selectedCard, targetColumn) {
    targetColumn.appendChild(selectedCard);
    selectedCard.classList.remove('selected');
    selectedCard = null;
}

function checkVictory() {
    if (foundation.every(f => f.length === 9)) { // 9 карт в каждой масти
        document.getElementById('message').innerText = 'Вы выиграли!';
    }
}

function createFoundation() {
    const foundationDiv = document.getElementById('foundation');
    for (let i = 0; i < 4; i++) {
        const foundationColumn = document.createElement('div');
        foundationColumn.className = 'foundation-column';
        foundationColumn.addEventListener('click', () => moveToFoundation(foundationColumn));
        foundationDiv.appendChild(foundationColumn);
    }
}

function moveToFoundation(foundationColumn) {
    if (selectedCard) {
        const suitIndex = suits.indexOf(selectedCard.dataset.suit);
        if (foundation[suitIndex].length < 9) { // Проверка на количество карт в фонде
            foundation[suitIndex].push(selectedCard);
            foundationColumn.appendChild(selectedCard);
            selectedCard.classList.remove('selected');
            selectedCard = null;
            checkVictory();
        }
    }
}

document.getElementById('deck').addEventListener('click', drawCard);
createDeck();
createFoundation();