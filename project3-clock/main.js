// Change to NEW CLOCK
$(".menu-one").click(function() {
    $(".title").hide();
    $("body").removeClass("airplane-cursor");
    $("html").removeClass("airplane-cursor");
    $(".clock-container-one").show();
    $(".clock-container-two").hide();
    $(".clock-container-three").hide();
});

$(".menu-two").click(function() {
    $(".title").hide();
    $("body").addClass("airplane-cursor");
    $("html").addClass("airplane-cursor");
    $(".clock-container-one").hide();
    $(".clock-container-two").show();
    $(".clock-container-three").hide();
});

$(".menu-three").click(function() {
    $(".title").hide();
    $("body").removeClass("airplane-cursor");
    $("html").removeClass("airplane-cursor");
    $(".clock-container-one").hide();
    $(".clock-container-two").hide();
    $(".clock-container-three").show();
});

// CLOCK 1
// if ($(".clock-container-one").length) {
//     $(".random-number-clock .number").each(function() {
//         var winWidth = window.innerWidth - 100;
//         var winHeight = window.innerHeight;

//         var randomTop = getRandomNumber(0, 80);
//         var randomBottom = getRandomNumber(90);
//         var randomLeft = getRandomNumber(0, 80);
//         var randomRight = getRandomNumber(90);

//         $(this).css({
//             top: randomTop + "%",
//             bottom: randomBottom + "%",
//             left: randomLeft + "%",
//             right: randomRight + "%"
//         });
//     });
// }

// function getRandomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }

// CLOCK 2
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const kstMonths = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
// const kstDays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

// EDT Clock (New York based time)
function myClock() {
    var currentTime = new Date();
    var currentDay = currentTime.getDay();
    var currentMonth = currentTime.getMonth();
    var currentDate = currentTime.getDate();
    var currentMinutes = currentTime.getMinutes()
    var currentSeconds = currentTime.getSeconds()
    var currentHour = currentTime.getHours();    
    // var ampm = "am";

    // if (currentHour > 11) {
    //   ampm = "pm";
    // }
    // if (currentHour == 12) {
    //   ampm = "pm";
    // }
    if (currentHour > 12) {
      currentHour = currentHour - 12;
    }
    console.log(currentHour);
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
    // $(".ampm").html(ampm);
};

myClock();

setInterval(myClock, 1000);

// KST Clock (+13 Hours)
function koreaTime() {
    const kstTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
    const currentTime = new Date(kstTime);
    const currentDay = days[currentTime.getDay()];
    const currentMonth = months[currentTime.getMonth()];
    const currentDate = currentTime.getDate();
    var currentHour = currentTime.getHours();
    // var ampm = "am";
    
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // if (currentHour > 11) {
    //   ampm = "pm";
    // }
    // if (currentHour == 12) {
    //   ampm = "pm";
    // }
    if (currentHour > 12) {
        currentHour = currentHour - 12;
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
    // $(".kst-ampm").html(ampm);
}

koreaTime();
setInterval(koreaTime, 1000);

// D-days calculator
$(document).ready(function() {
  var targetDate = new Date("May 17, 2024 13:00:00");

  setInterval(function() {
      var currentDate = new Date();
      var timeDifference = targetDate - currentDate;

      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      var countdownMessage = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds remaining until departure.";

      $('#d-day-countdown').text(countdownMessage);
  }, 1000);
});

// CLOCK 3
function updateClocks() {
  const nycTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
  const nycHours = new Date(nycTime).getHours() % 12;

  const kstTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
  const kstHours = new Date(kstTime).getHours() % 12;

  const blueColor = `#1500ff`;
  const orangeColor = `#ff5e00`;

  if (nycHours <= kstHours) {
      edtGradient = `linear-gradient(180deg, ${blueColor}, ${orangeColor})`; // NYC
      kstGradient = `linear-gradient(0deg, ${orangeColor}, ${blueColor})`;  // Seoul
  } else {
      edtGradient = `linear-gradient(0deg, ${orangeColor}, ${blueColor})`;  // NYC
      kstGradient = `linear-gradient(180deg, ${blueColor}, ${orangeColor})`; // Seoul
  }

  $('#edt-gradient').css('background', edtGradient);
  $('#kst-gradient').css('background', kstGradient);
}

setInterval(updateClocks, 60000);

updateClocks();

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