window.onload = function() {
    window.setInterval(function() {
        var date = new Date();

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var age = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        /*----------------------month-------------------------------*/
        if (month == 1) {month = ("января")};
        if (month == 2) { month = ("февраля") };
        if (month == 3) { month = ("марта") };
        if (month == 4) { month = ("апреля") };
        if (month == 5) { month = ("мая") };
        if (month == 6) { month = ("июня") };
        if (month == 7) { month = ("июля") };
        if (month == 8) { month = ("августа") };
        if (month == 9) { month = ("сентября") };
        if (month == 10) { month = ("октября") };
        if (month == 11) { month = ("ноября") };
        if (month == 12) { month = ("декабря") };

        /*---------------clock----------------------*/
        if (day <= 9) {day = ("0" + day)};
        if (minutes <= 9) {minutes = ("0" + minutes)};
        if (hours <= 9) {hours = ("0" + hours)};

        var day = day + " " + month + " " + age;
        document.getElementById("day").innerHTML = day;
        var clock = hours + ":" + minutes;
        document.getElementById("clock").innerHTML = clock;

    }), 60000;
};

fetch('http://api.openweathermap.org/data/2.5/weather?id=630336&appid=0a6f81c14e894f9e469514bed702c0b9')
    .then(function(resp) { return resp.json() })
    .then(
        function(wt){

        console.log(wt);

        document.querySelector('.price').innerHTML = Math.round(wt.main.temp -273) +"&deg" + "C";
        document.querySelector('.icon').innerHTML = '<img src = "http://openweathermap.org/img/wn/' + wt.weather[0]['icon'] + '@2x.png">';
        }
    )
    