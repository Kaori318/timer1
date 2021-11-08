import { printError, milliseconds } from '../utils/print.js';
import { conversionInSeconds, conversion } from '../utils/countdown.js'

const formT = document.getElementById('formTimer')
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

let timerId, startTime, resultTime, endTime, pauseTime;


let sound = new Howl({
    src: ['../../audio/teddy_alert.mp3'],
    onend: function () {
      alert('Время вышло!');
    }
  });

//форма ввода времени
formT.onsubmit = (event) => {
    event.preventDefault();
    const formTime = new FormData(formT);
    const hoursFrom = formTime.get("hours");
    const minuteFrom = formTime.get("minute");
    const secondFrom = formTime.get("second");

    //ошибка если форма не заполнена
    if(hoursFrom == 0 && minuteFrom == 0 && secondFrom == 0){ 
        printError('Заполните время')
        return
    } else {printError('')}
    
    //записываем начальное время
    milliseconds(hoursFrom, minuteFrom, secondFrom)

    //переводим в миллисекунды
    endTime = pauseTime = conversionInSeconds(hoursFrom, minuteFrom, secondFrom)
}
//нажатие на кнопки
start.addEventListener('click', play);
stop.addEventListener('click', resetTime);

//кнопка старт/пауза
function play(){
    if(start.classList.contains('active')){
        start.innerHTML = 'Старт';
        clearInterval(timerId);
        pauseTime = resultTime;
    } else {
    start.innerHTML = 'Пауза'
    startTime = new Date().getTime();    
    timerId = setInterval(() => timer(startTime, pauseTime) , 0);
    }
    start.classList.toggle('active');
}

//кнопка рестарт
function resetTime(){
    clearInterval(timerId);
    start.classList.remove('active');
    start.innerHTML = 'Старт';
    pauseTime = endTime
    resultTime = pauseTime;
    conversion (resultTime);  
}

//обратный отсчет
function timer(startTime, pauseTime) {
    let currentTime = new Date().getTime()
    resultTime = (pauseTime - (currentTime - startTime)/1000);
    conversion(resultTime)
    if(resultTime <= 0){
        document.querySelector('.result').innerHTML = `00:00:00:000`;
        clearInterval(timerId);
        sound.play();
        return;
    }
}


        

