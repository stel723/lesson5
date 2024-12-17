document.addEventListener('DOMContentLoaded', function() {
    let chislo = prompt('введите цифру:');

    if (chislo == 0){
        alert(`${chislo} будет ноль`);
    } else if (chislo == 1){
        alert(`${chislo} будет единица`);
    } else if(chislo == 2){
        alert(`${chislo} будет двойка`);
    } else if(chislo == 3){
        alert(`${chislo} будет тройка`);
    } else if(chislo == 4){
        alert(`${chislo} будет четвёрка`);
    } else if(chislo == 5){
        alert(`${chislo} будет пятёрка`);
    } else if(chislo == 6){
        alert(`${chislo} будет шестёрка`);
    } else if(chislo == 7){
        alert(`${chislo} будет семёрка`);
    } else if(chislo == 8){
        alert(`${chislo} будет восьмёрка`);
    } else if(chislo == 9){
        alert(`${chislo} будет девятка`);
    } else {
        alert(`${chislo} не цифра`);
    }
});