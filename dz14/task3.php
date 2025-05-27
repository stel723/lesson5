
<?php
require_once 'User.php';

$users = [
    new User("Иван Иванов", "ivan@example.com"),
    new User("Мария Петрова", "maria@example.com"),
    new User("Алексей Смирнов", "alexey@example.com"),
    new User("Ольга Кузнецова", "olga@example.com"),
    new User("Дмитрий Сидоров", "dmitry@example.com")
];
?>
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<title>Пользователи</title>
</head>
<body>
<h1>Список пользователей</h1>
<ul>
<?php foreach ($users as $user): ?>
    <li><a href="session.php"><?php echo htmlspecialchars($user->getUser()); ?></a></li>
<?php endforeach; ?>
</ul>
</body>
</html>