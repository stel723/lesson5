<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Анализ цифр числа</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        table {
            width: 50%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #000;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h1>Анализ цифр числа</h1>

<form method="post">
    <label for="number">Введите число:</label>
    <input type="text" id="number" name="number" required>
    <input type="submit" value="Анализировать">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $number = $_POST['number'];
    if (is_numeric($number)) {
        $digits = str_split($number);
        $count = count($digits);
        $maxDigit = max($digits);
        $minDigit = min($digits);
        $sum = array_sum($digits);
        $average = $sum / $count;
        echo "<h2>Результаты анализа:</h2>";
        echo "<table>";
        echo "<tr><th>Количество цифр</th><td>$count</td></tr>";
        echo "<tr><th>Самая большая цифра</th><td>$maxDigit</td></tr>";
        echo "<tr><th>Самая маленькая цифра</th><td>$minDigit</td></tr>";
        echo "<tr><th>Сумма цифр</th><td>$sum</td></tr>";
        echo "<tr><th>Среднее значение</th><td>" . round($average, 2) . "</td></tr>";
        echo "</table>";
    } else {
        echo "<p style='color: red;'>Пожалуйста, введите корректное число.</p>";
    }
}
?>

</body>
</html>