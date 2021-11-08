import "./pages/dateCalc.js";
import "./pages/timer.js"

const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const calc = document.querySelector('.calc');
let timer = document.querySelector('.timer')

button1.addEventListener('click', () => {
    document.getElementById('output').innerHTML=''
    calc.hidden = false;
    timer.hidden = true;
});

button2.addEventListener('click', () => {
    document.getElementById('output').innerHTML=''
    calc.hidden = true;
    timer.hidden = false;
});

    



