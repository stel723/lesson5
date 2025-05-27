<?php

$purchaseHistory = [
    1 => [
        ['date' => '2024-10-01', 'sessionId' => 'abc123'],
        ['date' => '2024-10-05', 'sessionId' => 'def456']
    ],
    2 => [
        ['date' => '2024-09-20', 'sessionId' => 'ghi789']
    ],
    3 => [
        ['date' => '2024-10-02', 'sessionId' => 'jkl012'],
        ['date' => '2024-10-03', 'sessionId' => 'mno345']
    ],

];


if (isset($_GET['user_id'])) {
    $userId = (int) $_GET['user_id'];
} else {
    die('Пользователь не выбран.');
}

if (!isset($purchaseHistory[$userId])) {
    echo "История покупок для этого пользователя не найдена.";
    exit;
}

$history = $purchaseHistory[$userId];
?>
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<title>История покупок</title>
</head>
<body>
<h1>История покупок пользователя <?php echo htmlspecialchars($userId); ?></h1>
<table border="1" cellpadding="5" cellspacing="0">
<tr><th>Дата</th><th>Session ID</th></tr>
<?php foreach ($history as $purchase): ?>
<tr>
<td><?php echo htmlspecialchars($purchase['date']); ?></td>
<td><?php echo htmlspecialchars($purchase['sessionId']); ?></td>
</tr>
<?php endforeach; ?>
</table>

<a href="index.php">Вернуться к списку пользователей</a>
</body>
</html>