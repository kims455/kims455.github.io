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




// In Class Practice
// var currentTime = new Date();
// var currentDay = currentTime.getDay();
// var currentMonth = currentTime.getMonth();
// var currentDate = currentTime.getDate();

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var currentMinutes = currentTime.getMinutes()
// if (currentMinutes < 10) {
//     currentMinutes = "0" + currentMinutes;
// }
// var currentSeconds = currentTime.getSeconds()
// if (currentSeconds < 10) {
//     currentSeconds = "0" + currentSeconds;
// }

// // $("p").html(currentTime);

// function myClock() {
//     $(".day").html(days[currentDay]);
//     $(".month").html(months[currentMonth]);
//     $(".date").html(currentDate);
//     $(".hour").html(currentTime.getHours());
//     $(".minutes").html(currentMinutes);
//     $(".seconds").html(currentSeconds);
// };

// myClock();

// setInterval(myClock, 1000);