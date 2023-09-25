const counter = document.querySelector('.counter');
const gongAudio = new Audio('gong.wav');
let time = 0;
let interval=null;

function start() {
    if (interval !== null||time===0) {
        return;
    }
    interval = setInterval(countdown, 1000);
}

function countdown() {
    time--;
    displayTime();
    if (time <= 0) {
        clearInterval(interval);
        gongAudio.play();
    }
}

function setTime(val) {
    if (interval !== null) {
        return;
    }
    time = val;

    displayTime();
}

function displayTime() {
    let minutes = `${Math.floor(time / 60)}`;
    let seconds = `${time % 60}`;

    if (minutes.length === 1) {
        minutes = `0${minutes}`;
    }
    if (seconds.length === 1) {
        seconds = `0${seconds}`;
    }

    counter.innerHTML = `${minutes}:${seconds}`;
}
