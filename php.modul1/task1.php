<!DOCTYPE html>
<html>
<head>
    <title>Форма ввода имени</title>
</head>
<body>

<form method="post">
    <label for="name">Введите ваше имя:</label>
    <input type="text" id="name" name="name" required>
    <input type="submit" value="Отправить">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);

    echo "Hello! My name is '" . $name . "'";
}
?>

</body>
</html>