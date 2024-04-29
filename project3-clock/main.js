// Change to NEW CLOCK
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

// EDT Clock (New York based time)
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
    }
    if (currentHour > 11) {
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
    var ampm = "am";
    
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    if (currentHour > 12) {
        currentHour = currentHour - 12;
    }
    if (currentHour > 11) {
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
function rotateClock() {
  const now = new Date();
  const edtHour = (now.getUTCHours() - 4) % 12; 
  const kstHour = (now.getUTCHours() + 9) % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const edtHourRotation = (edtHour * 30) + (0.5 * minute);
  const kstHourRotation = (kstHour * 30) + (0.5 * minute);
  const minuteRotation = (minute * 6) + (0.1 * second);
  const secondRotation = second * 6;

  $("#edt-dial-clock .hour-hand").css("transform", `rotate(${edtHourRotation}deg)`);
  $("#edt-dial-clock .minute-hand").css("transform", `rotate(${minuteRotation}deg)`);
  $("#edt-dial-clock .second-hand").css("transform", `rotate(${secondRotation}deg)`);

  $("#kst-dial-clock .kst-hour-hand").css("transform", `rotate(${kstHourRotation}deg)`);
  $("#kst-dial-clock .kst-minute-hand").css("transform", `rotate(${minuteRotation}deg)`);
  $("#kst-dial-clock .kst-second-hand").css("transform", `rotate(${secondRotation}deg)`);
}

setInterval(rotateClock, 0);



// 0.5 times 360
// 180 degrees rotations for Hours
// Find the angles on js that shows the correct times
// 25 percent times 
// minute value divide by 60


// In Class notes
// var countHours = 0;
// var countMinutes = 0;
// var countSeconds = 0;

// function countClock() {
//   var hoursString;
//   var minutesString;
//   var secondsString;
//   countSeconds++;
//   if (countSeconds == 60) {
//     countSeconds = 0;
//     countMinutes++;
//   }
//   if (countMinutes == 60) {
//     countMinutes = 0;
//     countHours++;
//   }
//   if (countHours < 10) {
//     hoursString = "0" + countHours;
//   } else {
//     hoursString = countHours;
//   }
//   if (countMinutes < 10) {
//     minutesString = "0" + countMinutes;
//   } else {
//     minutesString = countMinutes;
//   }
//   if (countSeconds < 10) {
//     secondsString = "0" + countSeconds;
//   } else {
//     secondsString = countSeconds;
//   }
//   $(".count-clock-hours").html(hoursString);
//   $(".count-clock-minutes").html(minutesString);
//   $(".count-clock-seconds").html(secondsString);
// }

// setInterval(countClock, 1000);

// // Count up and Count Down
// var counter = 0;

// function countUp() {
//   counter++;
//   $(".count-up").html(counter);
// }

// setInterval(countUp, 1000);

// var counterDown = 10;

// function countDown() {
//   if (counterDown > 0) {
//     counterDown--;
//     $(".count-down").html(counterDown);
//   }
// }

// setInterval(countDown, 1000);