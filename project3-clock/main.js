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

// CLOCK 2
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const kstMonths = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
// const kstDays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

// EDT Clock (New York based time)
function myClock() {
    const edtTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    var currentTime = new Date(edtTime); 
    var currentDay = currentTime.getDay();
    var currentMonth = currentTime.getMonth();
    var currentDate = currentTime.getDate();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    var currentHour = currentTime.getHours();    
    
    if (currentHour === 0) {
        $(".hour").html("00");
    } else {
        $(".hour").html(currentHour);
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
    $(".minutes").html(currentMinutes);
    $(".seconds").html(currentSeconds);
    $("#num" + currentHour).html($(".edt-container"));
}

myClock();
setInterval(myClock, 0);

// KST Clock (+13 Hours)
function koreaTime() {
    const kstTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
    var currentTime = new Date(kstTime);
    const currentDay = currentTime.getDay();
    const currentMonth = currentTime.getMonth();
    const currentDate = currentTime.getDate();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    if (currentHours === 0) {
        $(".kst-hour").html("00");
    } else {
        $(".kst-hour").html(currentHours);
    }
    if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    }
    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }

    $(".kst-day").html(days[currentDay]);
    $(".kst-month").html(months[currentMonth]);
    $(".kst-date").html(currentDate);
    $(".kst-minutes").html(currentMinutes);
    $(".kst-seconds").html(currentSeconds);
    $("#num" + currentHours).html($(".kst-container"));
}

koreaTime();
setInterval(koreaTime, 0);

// D-days calculator
$(document).ready(function() {
    var startDate = new Date("January 22, 2024").getTime();
    var endDate = new Date("May 17, 2024").getTime();

    setInterval(function() {
        var currentDate = new Date().getTime();
        var timeDifference = endDate - startDate;
        var timeElapsed = currentDate - startDate;
        var progressPercentage = (timeElapsed / timeDifference) * 100;

        var days = Math.floor((timeDifference - timeElapsed) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference - timeElapsed) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference - timeElapsed) % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor((timeDifference - timeElapsed) % (1000 * 60) / 1000);

        var countdownMessage = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds remaining until departure.";
        $('#d-day-countdown').text(countdownMessage);

        $('.progress-bar').css('width', progressPercentage + '%');
    });
});

// CLOCK 3
// EDT Gradient Clock
function updateEdtClock() {
    const edtTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    const currentHour = new Date(edtTime).getHours();

    const deepNightColor = '#04081C';
    const nightColor = '#1E2B60';
    const dawnColor = '#FF774D';
    const sunriseColor = '#FFB14F';
    const sunsetColor = '#FF5733';
    const twilightColor = '#4E71A8';

    let edtGradient;

    if (currentHour < 4 || currentHour >= 20) {
        edtGradient = `radial-gradient(circle at 100%, ${deepNightColor}, ${deepNightColor} 20%, ${nightColor} 40%, ${dawnColor} 60%, ${sunriseColor} 80%, ${twilightColor} 100%)`;
    } else if (currentHour >= 4 && currentHour < 6) {
        edtGradient = `radial-gradient(circle at 100%, ${nightColor}, ${nightColor} 20%, ${dawnColor} 40%, ${sunriseColor} 60%, ${twilightColor} 100%)`;
    } else if (currentHour >= 6 && currentHour < 8) {
        edtGradient = `radial-gradient(circle at 100%, ${dawnColor}, ${dawnColor} 20%, ${sunriseColor} 40%, ${twilightColor} 60%, ${nightColor} 100%)`;
    } else if (currentHour >= 8 && currentHour < 17) {
        edtGradient = `radial-gradient(circle at 100%, ${sunriseColor}, ${sunriseColor} 20%, ${twilightColor} 40%, ${nightColor} 60%, ${deepNightColor} 100%)`;
    } else if (currentHour >= 17 && currentHour < 20) {
        edtGradient = `radial-gradient(circle at 100%, ${twilightColor}, ${twilightColor} 20%, ${nightColor} 40%, ${deepNightColor} 60%, ${deepNightColor} 100%)`;
    } else {
        edtGradient = `radial-gradient(circle at 100%, ${twilightColor}, ${twilightColor} 20%, ${nightColor} 40%, ${deepNightColor} 60%, ${deepNightColor} 100%)`;
    }

    $('#edt-gradient').css('background', edtGradient);
}

// KST Gradient Clock
function updateKstClock() {
    const kstTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
    const currentHour = new Date(kstTime).getHours();

    const deepNightColor = '#04081C';
    const nightColor = '#253577';
    const dawnColor = '#FF774D';
    const sunriseColor = '#FFB14F';
    const sunsetColor = '#FF5733';
    const twilightColor = '#4E71A8';

    let kstGradient;

    if (currentHour < 4 || currentHour >= 20) {
        kstGradient = `radial-gradient(circle at 0%, ${deepNightColor}, ${deepNightColor} 20%, ${nightColor} 40%, ${dawnColor} 60%, ${sunriseColor} 80%, ${twilightColor} 100%)`;
    } else if (currentHour >= 4 && currentHour < 6) {
        kstGradient = `radial-gradient(circle at 0%, ${nightColor}, ${nightColor} 20%, ${dawnColor} 40%, ${sunriseColor} 60%, ${twilightColor} 100%)`;
    } else if (currentHour >= 6 && currentHour < 8) {
        kstGradient = `radial-gradient(circle at 0%, ${dawnColor}, ${dawnColor} 20%, ${sunriseColor} 40%, ${twilightColor} 60%, ${nightColor} 100%)`;
    } else if (currentHour >= 8 && currentHour < 17) {
        kstGradient = `radial-gradient(circle at 0%, ${sunriseColor}, ${sunriseColor} 20%, ${twilightColor} 40%, ${nightColor} 60%, ${deepNightColor} 100%)`;
    } else if (currentHour >= 17 && currentHour < 20) {
        kstGradient = `radial-gradient(circle at 0%, ${twilightColor}, ${twilightColor} 20%, ${nightColor} 40%, ${deepNightColor} 60%, ${deepNightColor} 100%)`;
    } else {
        kstGradient = `radial-gradient(circle at 0%, ${twilightColor}, ${twilightColor} 20%, ${nightColor} 40%, ${deepNightColor} 60%, ${deepNightColor} 100%)`;
    }

    $('#kst-gradient').css('background', kstGradient);
}

$(document).ready(function() {
    setInterval(updateEdtClock, 0);
    setInterval(updateKstClock, 0);
});