const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let descripition = '';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        descripition = 'Cuidado, você está abaixo do peso!'
    } else if (bmi > 18.5) {
        descripition = 'Seu peso está normal'
    } else if (bmi >= 18.5 && bmi<= 25) {
        descripition = 'Você está no peso ideal'
    } else if(bmi > 25 && bmi <= 30) {
        descripition = 'Cuidado, você está aacima do peso!'
    } else if(bmi > 30 && bmi <= 35) {
        descripition = 'Você está com obesidade moderada.'
    } else if(bmi > 30 && bmi <= 40) {
        descripition = 'Cuidado, você está com obesidade severa!'
    }


    value.textContent = bmi.replace('.', ',');
    document.getElementById('descripition').textContent = descripition;
});