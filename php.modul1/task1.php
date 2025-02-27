<!DOCTYPE html>
<html>
<head>
    <title>Форма ввода имени и возраста</title>
</head>
<body>

<form method="post">
    <label for="name">Введите ваше имя:</label>
    <input type="text" id="name" name="name" required>

    <label for="age">Введите ваш возраст:</label>
    <input type="text" id="age" name="age" required>

    <input type="submit" value="Отправить">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $age = htmlspecialchars($_POST['age']);

    echo "Hello! My name is '" . $name . "'";
    echo "I am '". $age . "'";
}
?>

</body>
</html>