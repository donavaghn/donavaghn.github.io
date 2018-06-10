var t = 89;
var s = 5;
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

document.getElementById("windchill").innerHTML = Math.round(f * 100)/100;
document.getElementById("temp").innerHTML = t;
document.getElementById("windSpeed").innerHTML = s;