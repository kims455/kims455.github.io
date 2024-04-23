// Change to NEW CLOCK
function showClocks() {
    $(".clock-options").show();
    // $(".eternal-circles").hide();
}

$(".menu-one").click(function() {
    $(".title").hide();
    $(".clock-container-one").show();
    $(".clock-container-two").hide();
    $(".clock-container-three").hide();
});

$(".menu-two").click(function() {
    $(".title").hide();
    $(".clock-container-one").hide();
    $(".clock-container-two").show();
    $(".clock-container-three").hide();
});

$(".menu-three").click(function() {
    $(".title").hide();
    $(".clock-container-one").hide();
    $(".clock-container-two").hide();
    $(".clock-container-three").show();
});

// CLOCK 1
if ($(".clock-container-one").length) {
    $(".random-number-clock .number").each(function() {
        var winWidth = window.innerWidth - 100;
        var winHeight = window.innerHeight;

        var randomTop = getRandomNumber(0, 90);
        var randomBottom = getRandomNumber(90);
        var randomLeft = getRandomNumber(0, 90);
        var randomRight = getRandomNumber(90);

        $(this).css({
            top: randomTop + "%",
            bottom: randomBottom + "%",
            left: randomLeft + "%",
            right: randomRight + "%"
        });
    });
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// CLOCK 2
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// EDT Clock (Washington D.C. based time)
function myClock() {
    var currentTime = new Date();
    var currentDay = currentTime.getDay();
    var currentMonth = currentTime.getMonth();
    var currentDate = currentTime.getDate();
    var currentMinutes = currentTime.getMinutes()
    var currentSeconds = currentTime.getSeconds()
    var currentHour = currentTime.getHours();
    var ampm = "am";

    if (currentHour > 12) {
        currentHour = currentHour - 12;
        ampm = "pm";
    }
    if (currentHour == 12) {
        ampm = "pm";
    }
    if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    }
    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }

    $(".day").html(days[currentDay]);
    $(".month").html(months[currentMonth]);
    $(".date").html(currentDate);
    $(".hour").html(currentHour);
    $(".minutes").html(currentMinutes);
    $(".seconds").html(currentSeconds);
    $("#num" + currentHour).html($(".edt-container"));
    $(".ampm").html(ampm);
};

myClock();

setInterval(myClock, 0);

// KST Clock (+13 Hours)
function koreaTime() {
    const kstTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
    const currentTime = new Date(kstTime);
    const currentDay = days[currentTime.getDay()];
    const currentMonth = months[currentTime.getMonth()];
    const currentDate = currentTime.getDate();
    var currentHour = currentTime.getHours();
    var ampm = "pm";
    
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    if (currentHour > 12) {
        currentHour = currentHour - 12;
        ampm = "am";
    }
    if (currentHour == 12) {
        ampm = "am";
    }
    if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    }
    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }

    $(".kst-day").html(currentDay);
    $(".kst-month").html(currentMonth);
    $(".kst-date").html(currentDate);
    $(".kst-hour").html(currentHours);
    $(".kst-minutes").html(currentMinutes);
    $(".kst-seconds").html(currentSeconds);
    $("#num" + currentHour).html($(".kst-container"));
    $(".ampm").html(ampm);
}

koreaTime();
setInterval(koreaTime, 0);

// D-days calculator
function calculateCountdown() {
    var dDayInput = new Date(document.getElementById('d-day-input').value);
    var currentDate = new Date();
    var timeDifference = dDayInput - currentDate;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    var countdownMessage = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds remaining.";

    document.getElementById('d-day-countdown').innerText = countdownMessage;
}

// CLOCK 3
// 0.5 times 360
// 180 degrees roatios for Hours
// Find the angles on js that shows the correct times
// 25percetn times 
// minute value divide by 60
