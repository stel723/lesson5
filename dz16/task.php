<?php
session_start();

$logFile = __DIR__ . '/CrashLogUser.txt';


function logError($message) {
    global $logFile;
    file_put_contents($logFile, date('Y-m-d H:i:s') . " - " . $message . "\n", FILE_APPEND);
}


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['page'])) {
        $page = $_GET['page'];
        if ($page === '1') {
            $cookieName = 'page1_count';
        } elseif ($page === '2') {
            $cookieName = 'page2_count';
        } else {
            $cookieName = null;
        }
        if ($cookieName) {
            try {
                $count = isset($_COOKIE[$cookieName]) ? (int)$_COOKIE[$cookieName] : 0;
                $count++;
                setcookie($cookieName, $count, time() + 3600 * 24 * 30);
            } catch (Exception $e) {
                logError("Error updating cookie for page $page: " . $e->getMessage());
            }
        }
    }
}


$page1Count = isset($_COOKIE['page1_count']) ? (int)$_COOKIE['page1_count'] : 0;
$page2Count = isset($_COOKIE['page2_count']) ? (int)$_COOKIE['page2_count'] : 0;


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['folderName'])) {
    try {
        $folderName = trim($_POST['folderName']);
        if ($folderName === '') throw new Exception('Пустое имя папки');

        $folderPath = __DIR__ . '/' . basename($folderName);
        if (!is_dir($folderPath)) {
            if (!mkdir($folderPath, 0755)) throw new Exception('Folder isn’t created');
        }

        setcookie('currentFolder', $folderName, time() + 3600);
    } catch (Exception $e) {
        logError($e->getMessage());
    }
}


if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'GoBack') {
    try {
        if (isset($_COOKIE['currentFolder'])) {
            setcookie('currentFolder', '', time() - 3600);
        }
    } catch (Exception $e) {
        logError($e->getMessage());
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'Download') {
    try {
        if (!isset($_COOKIE['currentFolder'])) throw new Exception('Permissions denied');
        $folder = __DIR__ . '/' . basename($_COOKIE['currentFolder']);
        if (!is_dir($folder)) throw new Exception("Folder isn't created");
        
        // Создаем zip архив
        $zipFile = tempnam(sys_get_temp_dir(), 'zip_') . '.zip';
        $zip = new ZipArchive();
        if ($zip->open($zipFile, ZipArchive::CREATE)!==true) throw new Exception('Archive failed');

        // Добавляем файлы из папки
        $files = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($folder),
            RecursiveIteratorIterator::LEAVES_ONLY
        );
        foreach ($files as $name => $file) {
            if (!$file->isDir()) {
                $filePath = $file->getRealPath();
                $relativePath = substr($filePath, strlen($folder)+1);
                if (!$zip->addFile($filePath, $relativePath))
                    throw new Exception('Archive failed');
            }
        }
        $zip->close();


        header('Content-Type: application/zip');
        header('Content-Disposition: attachment; filename="'.basename($zipFile).'"');
        readfile($zipFile);
        
        unlink($zipFile);
        
        exit; 

    } catch (Exception $e) {
        logError($e->getMessage());
    }
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<title>Главная</title>
<script>
document.addEventListener('DOMContentLoaded', () => {
    const folderInput = document.querySelector('#folderName');
    const goBtn = document.querySelector('#goButton');

    folderInput.addEventListener('input', () => {
        goBtn.disabled = folderInput.value.trim() === '';
    });
});
</script>
</head>
<body>

<h1>Главная страница</h1>


<p><a href="?page=1">Перейти на страницу 1</a></p>
<p><a href="?page=2">Перейти на страницу 2</a></p>


<h3>Переходы:</h3>
<ul>
<li>На страницу 1: <?php echo htmlspecialchars($page1Count); ?> раз(а)</li>
<li>На страницу 2: <?php echo htmlspecialchars($page2Count); ?> раз(а)</li>
</ul>

<form method="post" action="">
<input type="text" name="folderName" id="folderName" placeholder="Введите название папки" required />
<button type="submit" id="goButton" disabled>GoToFolder</button>
</form>

<?php

if (isset($_COOKIE['currentFolder'])):
    $folderName = $_COOKIE['currentFolder'];
    $folderPath = __DIR__ . '/' . basename($folderName);
    if (is_dir($folderPath)):
?>
<h3>Содержимое папки: <?php echo htmlspecialchars($folderName); ?></h3>
<ul>
<?php
$filesInDir = scandir($folderPath);
foreach ($filesInDir as $file):
    if ($file !== '.' && $file !== '..'):
?>
<li><?php echo htmlspecialchars($file); ?></li>
<?php endif; endforeach; ?>
</ul>

<form method="post" action="">
<input type="hidden" name="action" value="Download" />
<button type="submit">Download</button>
</form>

<form method="post" action="">
<input type="hidden" name="action" value="GoBack" />
<button type="submit">GoBack</button>
</form>

<?php endif; endif; ?>

</body>
</html>