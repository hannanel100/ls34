function sendToWeather(selectedCity) {
    return new Promise((rs, rj) => {
        // 40d439259718ef3f486d5ccb188390f5
        const appid = '35cba08fc2a0b2a23a8c75372f227d50';
        url = 'https://api.openweathermap.org/data/2.5/weather?q=' + selectedCity + '&units=metric&appid=' + appid;
        var req = new XMLHttpRequest();
        req.onreadystatechange = function (aEvt) {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    var obj = JSON.parse(this.responseText)
                    rs({
                        name: obj.name,
                        temp: obj.main.temp
                    });
                } else {
                    rj(req.status);
                }
            }
        };
        req.open("GET", url);
        req.send();
    });

}

async function main() {
    const jerusalem = sendToWeather('jerusalem');
    const paris = sendToWeather('paris');
    const stockholm = sendToWeather('stockholm');
    const berlin = sendToWeather('berlin');
    return Promise.all([jerusalem, paris, stockholm, berlin]);
}
const weather = document.getElementById('weather');
main().then(allData => {
    allData.forEach((data) => weather.innerHTML += '<div class="box">' + data.name + ': ' + data.temp + '<div>')
        
    }
);