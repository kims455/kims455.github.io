const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function myClock() {
    var currentTime = new Date();
    var currentDay = currentTime.getDay();
    var currentMonth = currentTime.getMonth();
    var currentDate = currentTime.getDate();
    var currentMinutes = currentTime.getMinutes()
    if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    }
    var currentSeconds = currentTime.getSeconds()
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

// KST Clock
let timezoneOffset = date.getTimezoneOffset();

let date = new Date;
aryIanaTimeZones.forEach((timeZone) =>
{
  let strTime = date.toLocaleString("en-US", {timeZone: `${'Asia/Seoul'}`});
  console.log(timeZone, strTime);
});



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