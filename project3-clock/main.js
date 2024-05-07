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
    var endDate = new Date("May 18, 2024").getTime();
    var totalDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));

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
function updateClocks() {
    const nycTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    const nycHours = new Date(nycTime).getHours() % 24;

    const kstTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
    const kstHours = new Date(kstTime).getHours() % 24;

    const deepNightColor = `#00135E`;
    const nightColor = `#1500FF`;
    const morningColor = `#FFA500`;
    const noonColor = `#FFFF00`;

    let edtGradient, kstGradient;

    if (nycHours < 4 || nycHours >= 20) {
    // Deep night
        edtGradient = `linear-gradient(180deg, ${deepNightColor}, ${deepNightColor})`;
    } else if (nycHours >= 4 && nycHours < 6) {
    // Night
        edtGradient = `linear-gradient(180deg, ${nightColor}, ${nightColor})`;
    } else if (nycHours >= 6 && nycHours < 8) {
    // Sunrise
        edtGradient = `linear-gradient(180deg, ${nightColor}, ${morningColor})`;
    } else if (nycHours >= 8 && nycHours < 17) {
    // Daytime
        edtGradient = `linear-gradient(180deg, ${morningColor}, ${noonColor})`;
    } else if (nycHours >= 17 && nycHours < 20) {
    // Sunset
        edtGradient = `linear-gradient(180deg, ${noonColor}, ${nightColor})`;
    } else {
    // Deep night
        edtGradient = `linear-gradient(180deg, ${deepNightColor}, ${deepNightColor})`;
    }

    if (kstHours < 4 || kstHours >= 20) {
    // Deep night
        kstGradient = `linear-gradient(0deg, ${deepNightColor}, ${deepNightColor})`;
    } else if (kstHours >= 4 && kstHours < 6) {
    // Night
        kstGradient = `linear-gradient(0deg, ${nightColor}, ${nightColor})`;
    } else if (kstHours >= 6 && kstHours < 8) {
    // Sunrise
        kstGradient = `linear-gradient(0deg, ${nightColor}, ${morningColor})`;
    } else if (kstHours >= 8 && kstHours < 17) {
    // Daytime
        kstGradient = `linear-gradient(0deg, ${morningColor}, ${noonColor})`;
    } else if (kstHours >= 17 && kstHours < 20) {
    // Sunset in KST
        kstGradient = `linear-gradient(0deg, ${noonColor}, ${nightColor})`;
    } else {
    // Deep night
        kstGradient = `linear-gradient(0deg, ${deepNightColor}, ${deepNightColor})`;
    }

    $('#edt-gradient').css('background', edtGradient);
    $('#kst-gradient').css('background', kstGradient);
}

$(document).ready(function() {
    updateClocks();
    setInterval(updateClocks, 60000);
});