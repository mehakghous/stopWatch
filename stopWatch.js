// vars
var seconds = 0;
var minutes = 0;
var hours = 0;
var days = 0;

// containers
var secondsContainer = document.getElementById("seconds");
var minutesContainer = document.getElementById("minutes");
var hoursContainer = document.getElementById("hours");
var daysContainer = document.getElementById("days");
var btnContainer = document.getElementById("start-btn");


// interval
var interval = null;

//status
var status = "stopped";

function startTimer() {
    seconds++;
    // to increase the minutes after sixty second
    if ((seconds / 60) == 1) {
        seconds = 0;
        minutes++
    }
    // to increase hour after 60 minute
    if ((minutes / 60) == 1) {
        minutes = 0;
        hours++
    }
    if ((hours / 24) == 1) {
        hours = 0;
        days++
    }

    secondsContainer.innerHTML = String(seconds).padStart(2, '0');
    minutesContainer.innerHTML = String(minutes).padStart(2, '0');
    hoursContainer.innerHTML = String(hours).padStart(2, '0');
    daysContainer.innerHTML = String(days).padStart(2, '0');


}

function startStop() {
    if (status == "stopped") {
        interval = window.setInterval(startTimer, 1000)
        btnContainer.innerHTML = "<i class = 'fal fa-pause'></i>"
        status = "started";
    } else {
        window.clearInterval(interval)
        btnContainer.innerHTML = "<i class = 'fal fa-play'></i>"
        status = "stopped";
    }
}
function reset() {
    seconds = 0
    minutes = 0
    hours = 0
    days = 0
    window.clearInterval(interval)
    btnContainer.innerHTML = "<i class = 'fal fa-play'></i>"
    status = "stopped"
    secondsContainer.innerHTML = "00";
    minutesContainer.innerHTML = "00";
    hoursContainer.innerHTML = "00";
    daysContainer.innerHTML = "00";

}


