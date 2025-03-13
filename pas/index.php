<?php
session_start();

$suits = ['♠', '♣', '♥', '♦'];
$ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck($suits, $ranks) {
    $deck = [];
    foreach ($suits as $suit) {
        foreach ($ranks as $rank) {
            $deck[] = $rank . $suit;
        }
    }
    shuffle($deck);
    return $deck;
}

if (!isset($_SESSION['deck'])) {
    $_SESSION['deck'] = createDeck($suits, $ranks);
}

$deck = $_SESSION['deck'];
$stock = array_splice($deck, 0, 24); 

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Пасьянс Косынка</title>
</head>
<body>
    <h1>Пасьянс Косынка</h1>
    <div id="game">
        <div class="stock">
            <h2>Запас</h2>
            <?php foreach ($stock as $card): ?>
                <div class="card"><?php echo $card; ?></div>
            <?php endforeach; ?>
        </div>

        <div class="piles">
            <h2>Кучи</h2>
            <?php for ($i = 0; $i < 7; $i++): ?>
                <div class="pile">
                    <h3>Куча <?php echo $i + 1; ?></h3>
                </div>
            <?php endfor; ?>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>