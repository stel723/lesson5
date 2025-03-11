const suits = ['♠', '♣', '♥', '♦'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let deck = [];
        let gamePiles = [];

        function createDeck() {
            for (let suit of suits) {
                for (let rank of ranks) {
                    deck.push(rank + suit);
                }
            }
            shuffle(deck);
        }

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function drawCards() {
            for (let i = 0; i < 7; i++) {
                const pile = document.createElement('div');
                pile.className = 'pile';
                gamePiles.push([]);
                
                for (let j = 0; j < i + 1; j++) {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.textContent = deck.pop();
                    card.style.top = `${30 * j}px`;
                    pile.appendChild(card);
                    gamePiles[i].push(card.textContent);
                }
                document.getElementById('game').appendChild(pile);
            }
        }

        createDeck();
        drawCards();