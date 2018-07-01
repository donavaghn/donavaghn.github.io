var t;
var s;
var f;

var requestURL = '//api.openweathermap.org/data/2.5/weather?zip=29601,us&APPID=df95dd903d725edb23c616eb8dc3e79a&units=imperial';

 var request = new XMLHttpRequest();

 request.open('GET', requestURL);

 request.responseType = 'json';
 request.send();

request.onload = function() {
  var townGreenville = request.response;
	showGreenville(townGreenville);
}

function showGreenville(jsonObj) {
 	var main = jsonObj['main'];
	var wind = jsonObj['wind'];
	var weather = jsonObj['weather'];
	 
	var state = weather[0].description;
	var high = main.temp_max;
	var low = main.temp_min;
	var humidity = main.humidity;
	var t = main.temp;
	var s = wind.speed;
	var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
	
	var deg = wind.deg;
	var direction
	
	if (deg >= 20 && deg <= 70) {
		direction = "NE"
	}
	else if (deg >= 70 && deg <= 110) {
		direction = "E"
	}
	else if (deg >= 110 && deg <= 160) {
		direction = "SE"
	}
	else if (deg >= 160 && deg <= 200) {
		direction = "S"
	}
	else if (deg >= 200 && deg <= 250) {
		direction = "SW"
	}
	else if (deg >= 250 && deg <= 290) {
		direction = "W"
	}
	else if (deg >= 290 && deg <= 340) {
		direction = "NW"
	}
	else {
		direction = "N"
	}
	 
	
document.getElementById("windchill").innerHTML = Math.round(f * 100)/100;
document.getElementById("temp").innerHTML = t;
document.getElementById("windSpeed").innerHTML = s;
document.getElementById("high").innerHTML = high;
document.getElementById("low").innerHTML = low;
document.getElementById("state").innerHTML = state;
document.getElementById("wind_direction"). innerHTML = direction;
document.getElementById("humidity").innerHTML = humidity;
 }