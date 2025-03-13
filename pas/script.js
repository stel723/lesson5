
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        alert('Вы нажали на карту: ' + card.textContent);
    });
});