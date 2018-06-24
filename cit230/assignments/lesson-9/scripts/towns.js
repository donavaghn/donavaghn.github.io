 var section = document.querySelector('section');

 var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

 var request = new XMLHttpRequest();

 request.open('GET', requestURL);

 request.responseType = 'json';
 request.send();

request.onload = function() {
  var towns = request.response;
  showTowns(towns);
}

 function showTowns(jsonObj) {
 	var town = jsonObj['towns'];

 	for (var i = 0; i < town.length; i++) {
		if (i === 2) { continue }
		var myArticle = document.createElement('article');
 		var myH2 = document.createElement('h2');
		var myImage = document.createElement('img');
 		var myPara1 = document.createElement('p');
 		var myPara2 = document.createElement('p');
 		var myPara3 = document.createElement('p');
 		var myPara4 = document.createElement('p');
 		var myPara5 = document.createElement('p');
 		var myList = document.createElement('ul');

 		myH2.textContent = town[i].name;
		if (i == 0) {
			myImage.src = "images/frank.jpg";
		}
		else if (i == 1) {
			myImage.src = "images/green.jpg";
		}
		else {
			myImage.src = "images/spring.jpg";
		}
 		myPara1.textContent = 'Motto: ' + town[i].motto;
 		myPara2.textContent = 'year Founded: ' + town[i].yearFounded;
 		myPara3.textContent = 'currentPopulation ' + town[i].currentPopulation
 		myPara4.textContent = 'averageRain ' + town[i].averageRainfall
 		myPara5.textContent = 'Events:';

 		var events = town[i].events;
 		for (var j = 0; j < events.length; j++) {
 			var listItem = document.createElement('li');
 			listItem.textContent = events[j];
 			myList.appendChild(listItem);
 		}

 		myArticle.appendChild(myH2);
		myArticle.appendChild(myImage);
 		myArticle.appendChild(myPara1);
 		myArticle.appendChild(myPara2);
 		myArticle.appendChild(myPara3);
 		myArticle.appendChild(myPara4);
 		myArticle.appendChild(myPara5);
 		myArticle.appendChild(myList);

 		section.appendChild(myArticle);
 	}
 }
