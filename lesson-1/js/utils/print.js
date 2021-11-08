const resultParagraph = document.getElementById('output')
const time = document.querySelector('.result');

function printError(errorText) {
    //resultParagraph.innerHTML = `
    resultParagraph.innerHTML = `
        <span style="color: red;">
            ${errorText}
        </span>
    `
}

function printDateDiff({years, months, days}) {
    resultParagraphq.innerHTML = `
        Годы: ${years}
        Месяцы: ${months}
        Дни: ${days}
    `
}

function milliseconds (hours, minutes, seconds, milliseconds = 0){
    hours < 10 ? hours = '0' + hours: hours;
    minutes < 10 ? minutes = '0' + minutes: minutes;
    seconds < 10 ? seconds = '0' + seconds: seconds;
    milliseconds < 100 ? milliseconds = '0' + milliseconds: milliseconds;

    time.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`

}

export {printDateDiff, printError, milliseconds}