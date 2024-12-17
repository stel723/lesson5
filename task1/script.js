document.getElementById('ageButton').addEventListener('click', function(){
    const age = Number(document.getElementById('ageInput').value);
    const ageResult = document.getElementById('ageResult');

    if (age>=0 && age <= 12){
        ageResult.textContent = 'вы ребёнок'
    } else if (age >=12  && age <= 18 ) {
        ageResult.textContent = 'вы подросток';
    } else if (age >=18  && age <= 60 ) {
        ageResult.textContent = 'вы взрослый';
    } else if (age >=60  && age <= 100 ) {
        ageResult.textContent = 'вы пенсионер';
    } else {
        ageResult.textContent = 'некорректный возраст';
    }
});