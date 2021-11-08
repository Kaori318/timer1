import { milliseconds } from "./print.js";
export function conversionInSeconds (hoursFrom, minuteFrom, secondFrom){
let h = +hoursFrom * 60 * 60;
let m = +minuteFrom * 60;
let s = +secondFrom;
let endTime = h + m + s;
return endTime;
}

export function conversion (resultTime) {
    let mil = parseInt(resultTime*1000%1000)
    let sec = parseInt(resultTime%60);
    let min = parseInt(resultTime/60%60);
    let h = parseInt(resultTime/60/60%24)
    milliseconds(h, min, sec, mil)  
}
