// const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
// const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// let deck = [];
// let score = 0;
// let tableau = [];
// let foundation = [[], [], [], []]; // Фонды для каждой масти
// let selectedCard = null;
// let selectedColumn = null;

// function createDeck() {
//     for (let suit of suits) {
//         for (let rank of ranks) {
//             deck.push({ suit, rank });
//         }
//     }
//     deck = deck.slice(0, 36); // Оставляем только 36 карт
//     shuffleDeck();
// }

// function shuffleDeck() {
//     for (let i = deck.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
// }

// function drawCard() {
//     if (deck.length > 0) {
//         const card = deck.pop();
//         score++;
//         document.getElementById('score').innerText = score;
//         displayCard(card);
//     } else {
//         alert('Все карты разданы!');
//     }
// }

// function displayCard(card) {
//     const tableauDiv = document.getElementById('tableau');
//     const columnDiv = document.createElement('div');
//     columnDiv.className = 'column';
//     tableauDiv.appendChild(columnDiv);

//     const cardDiv = document.createElement('div');
//     cardDiv.className = 'card';
//     cardDiv.style.backgroundImage = `url('images/${card.rank}_of_${card.suit}.png')`; // Путь к изображению карты
//     cardDiv.dataset.rank = card.rank;
//     cardDiv.dataset.suit = card.suit;
//     cardDiv.addEventListener('click', () => selectCard(cardDiv, columnDiv));
//     columnDiv.appendChild(cardDiv);
//     tableau.push(card);
// }

// function selectCard(cardDiv, columnDiv) {
//     if (selectedCard) {
//         // Если уже выбрана карта, проверяем возможность перемещения
//         if (canMoveCard(selectedCard, cardDiv)) {
//             moveCard(selectedCard, columnDiv);
//             checkVictory();
//         }
//         selectedCard.classList.remove('selected');
//         selectedCard = null;
//     } else {
//         selectedCard = cardDiv;
//         selectedCard.classList.add('selected');
//         selectedColumn = columnDiv;
//     }
// }

// function canMoveCard(selectedCard, targetCard) {
//     const selectedRankIndex = ranks.indexOf(selectedCard.dataset.rank);
//     const targetRankIndex = ranks.indexOf(targetCard.dataset.rank);
//     return targetRankIndex === selectedRankIndex - 1; // Можно перемещать только на карту меньшего ранга
// }

// function moveCard(selectedCard, targetColumn) {
//     targetColumn.appendChild(selectedCard);
//     selectedCard.classList.remove('selected');
//     selectedCard = null;
// }

// function checkVictory() {
//     if (foundation.every(f => f.length === 9)) { // 9 карт в каждой масти
//         document.getElementById('message').innerText = 'Вы выиграли!';
//     }
// }

// function createFoundation() {
//     const foundationDiv = document.getElementById('foundation');
//     for (let i = 0; i < 4; i++) {
//         const foundationColumn = document.createElement('div');
//         foundationColumn.className = 'foundation-column';
//         foundationColumn.addEventListener('click', () => moveToFoundation(foundationColumn));
//         foundationDiv.appendChild(foundationColumn);
//     }
// }

// function moveToFoundation(foundationColumn) {
//     if (selectedCard) {
//         const suitIndex = suits.indexOf(selectedCard.dataset.suit);
//         if (foundation[suitIndex].length < 9) { // Проверка на количество карт в фонде
//             foundation[suitIndex].push(selectedCard);
//             foundationColumn.appendChild(selectedCard);
//             selectedCard.classList.remove('selected');
//             selectedCard = null;
//             checkVictory();
//         }
//     }
// }

// document.getElementById('deck').addEventListener('click', drawCard);
// createDeck();
// createFoundation();

const deckElement = document.getElementById('deck');
const tableauElement = document.getElementById('tableau');
const scoreElement = document.getElementById('score');
const drawButton = document.getElementById('draw-button');

let score = 0;

// Создаем колоду из 36 карт (от 6 до туза каждой масти)
const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];

suits.forEach(suit => {
    ranks.forEach(rank => {
        deck.push(`${rank}${suit}`);
    });
});

// Функция для перемешивания колоды
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Функция для раздачи карт
function drawCards() {
    tableauElement.innerHTML = ''; // Очищаем стол
    for (let i = 0; i < 5; i++) { // Раздаем по 5 карт
        if (deck.length > 0) {
            const card = deck.pop();
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.textContent = card;

            // Добавляем обработчик клика на карту
            cardElement.addEventListener('click', () => {
                score += getCardValue(card);
                updateScore();
                tableauElement.removeChild(cardElement);
            });

            tableauElement.appendChild(cardElement);
        }
    }
}

// Функция для получения значения карты
function getCardValue(card) {
    const rank = card.slice(0, -1); // Получаем ранг карты
    if (['J', 'Q', 'K'].includes(rank)) return 10; // Валет, Дама, Король - по 10 очков
    if (rank === 'A') return 11; // Туз - 11 очков
    return parseInt(rank); // Остальные карты - их номинал
}

// Функция для обновления счета
function updateScore() {
    scoreElement.textContent = `Счет: ${score}`;
}

// Инициализация игры
shuffleDeck();
drawButton.addEventListener('click', drawCards);