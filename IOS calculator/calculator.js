const display = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (display.value === '0' || display.value === 'Error') display.value = '';

        if (e.target.innerText === '=') {
            try {
                // Replace '÷' with '/'
                display.value = eval(display.value.replace('÷', '/'));
            } catch {
                display.value = 'Error';
            }
        } else if (e.target.innerText === '%') {
            display.value = (parseFloat(display.value) / 100).toString();}
        else if (e.target.innerText === 'AC') {
            display.value = '0'; // Clear the input
        }
        else if(e.target.innerText==="+/-"){
            display.value*=-1
        }
        else {
            // Replace 'x' with '*' and '÷' with '/'
            display.value += e.target.innerText.replace('x', '*').replace('÷', '/');
        }
    });
});
