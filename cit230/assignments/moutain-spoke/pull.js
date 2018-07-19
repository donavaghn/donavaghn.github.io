var table = document.querySelector('table');

var requestURL = 'services.json';

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
     
   for (var i = 0; i < services.length; i++) {
	 var row = document.createElement('tr');
    var name = document.createElement('td');
	 var price = document.createElement('td');
	 name.textContent = serve[i].name;
	 price.textContent = serve[i].price;
	  
	 row.appendChild(name);
	 row.appendChild(price);
	 table.appendChild(tr);
    }

  }



