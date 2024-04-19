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

    if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    }
    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }

    $(".day").html(days[currentDay]);
    $(".month").html(months[currentMonth]);
    $(".date").html(currentDate);
    $(".hour").html(currentTime.getHours());
    $(".minutes").html(currentMinutes);
    $(".seconds").html(currentSeconds);
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
    
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

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
}

koreaTime();
setInterval(koreaTime, 0);

// Change to NEW CLOCK
$('button').on('click', function () {
    $('body').css('background', '#FFF0F5');
    $(".clock-one").show();
    $(".clock-two").show();
    $(".clock-three").show();
});

$(".menu-one").click(function() {
    $(".clock-container-one").show()
    $(".clock-container-two").hide()
    $(".clock-container-three").hide()
})

$(".menu-two").click(function() {
    $(".clock-container-one").hide()
    $(".clock-container-two").show()
    $(".clock-container-three").hide()
})

$(".menu-three").click(function() {
    $(".clock-container-one").hide()
    $(".clock-container-two").hide()
    $(".clock-container-three").show()
})

// CLOCK 1
// $(document).ready(function() {
//     const numbers = $(".number");
//     const hours = new Date().getHours();
//     const minutes = new Date().getMinutes();
//     const seconds = new Date().getSeconds();
// });

var numbers = document.getElementsByTagName('div');

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

for ( var i=0; i < numbers.length; i++ ) {
 	    
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    numbers[i].style.top = randomTop +"px";
    numbers[i].style.left = randomLeft +"px";  
    console.log("moved"); 
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// CLOCK 2


// CLOCK 3
