var t;
var s;
var f;

var requestURL = '//api.openweathermap.org/data/2.5/weather?zip=55333,us&APPID=df95dd903d725edb23c616eb8dc3e79a&units=imperial';

 var request = new XMLHttpRequest();

 request.open('GET', requestURL);

 request.responseType = 'json';
 request.send();

request.onload = function() {
  var townFranklin = request.response;
	showFranklin(townFranklin);
}
function showFranklin(jsonObj) {
 	var main = jsonObj['main'];
	var wind = jsonObj['wind'];
	var weather = jsonObj['weather'];
	 
	var state = weather[0].description;
	var high = main.temp_max;
	var low = main.temp_min;
	 var t = main.temp;
	 var s = wind.speed;
	 var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
	 
document.getElementById("windchill").innerHTML = Math.round(f * 100)/100;
document.getElementById("temp").innerHTML = t;
document.getElementById("windSpeed").innerHTML = s;
document.getElementById("high").innerHTML = high;
document.getElementById("low").innerHTML = low;
document.getElementById("state").innerHTML = state;
 }





