<?php

$cartData = [
    'abc123' => [
        ['product' => 'Товар 1', 'quantity' => 2],
        ['product' => 'Товар 2', 'quantity' => 1],
    ],
    'def456' => [
        ['product' => 'Товар А', 'quantity' => 3],
    ],
    'ghi789' => [
        ['product' => 'Товар X', 'quantity' => 1],
        ['product' => 'Товар Y', 'quantity' => 4],
    ],

];


if (isset($_GET['session_id'])) {
    $sessionId = $_GET['session_id'];
} else {
    die('Session ID не передан.');
}

if (!isset($cartData[$sessionId])) {
    echo "Продукты для этой сессии не найдены.";
    exit;
}

$products = $cartData[$sessionId];
?>
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<title>Продукты в сессии <?php echo htmlspecialchars($sessionId); ?></title>
</head>
<body>
<h1>Продукты в сессии <?php echo htmlspecialchars($sessionId); ?></h1>
<table border="1" cellpadding="5" cellspacing="0">
<tr><th>Товар</th><th>Количество</th></tr>
<?php foreach ($products as $item): ?>
<tr>
<td><?php echo htmlspecialchars($item['product']); ?></td>
<td><?php echo htmlspecialchars($item['quantity']); ?></td>
</tr>
<?php endforeach; ?>
<a href="sessions.php?user_id=<?php ?>">Вернуться к истории покупок</a>
</body>
</html>