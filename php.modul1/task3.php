<!DOCTYPE html>
<html>
<head>
    <title>Форма ввода имени, возраста и арифметических операций</title>
</head>
<body>

<form method="post">
    <label for="name">Введите ваше имя:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="age">Введите ваш возраст:</label>
    <input type="number" id="age" name="age" required>
    
    <label for="a">Введите значение a:</label>
    <input type="number" id="a" name="a" required>
    
    <label for="b">Введите значение b:</label>
    <input type="number" id="b" name="b" required>
    
    <input type="submit" value="Отправить">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']); 
    $age = htmlspecialchars($_POST['age']); 
    
    $a = htmlspecialchars($_POST['a']); 
    $b = htmlspecialchars($_POST['b']);
    
    $rez = $a + $b;

    echo "Hello! My name is '" . $name . "'<br>";
    echo "I’m " . $age . "<br>";
    echo "'$a' + '$b' = '$rez'";
}
?>

</body>
</html>