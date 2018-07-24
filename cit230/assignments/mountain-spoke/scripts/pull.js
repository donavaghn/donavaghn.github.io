var table = document.querySelector('table');

var requestURL = 'https://donavaghn.github.io/cit230/assignments/mountain-spoke/scripts/json-data/services.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
   var servicesInfo = request.response;
   showTable(servicesInfo);
}

function showTable(jsonObj) {
   var serve = jsonObj['services'];
     
   for (var i = 0; i < serve.length; i++) {
	 var row = document.createElement('tr');
    var name = document.createElement('td');
	 var price = document.createElement('td');
	 name.textContent = serve[i].name;
	 price.textContent = serve[i].numbers;
	  
	 row.appendChild(name);
	 row.appendChild(price);
	 table.appendChild(tr);
    }

  }



