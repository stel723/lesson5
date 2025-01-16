const prompt = require('prompt-sync')();

// Функция для преобразования секунд в формат "чч:мм:сс"
function convertSecondsToTimeFormat(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
}