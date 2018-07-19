    var table = document.querySelector('table');

var requestURL = 'services.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var dataForTable = request.response;
  showTable(dataForTable);
}

function showTable(jsonObj) {
  var services = jsonObj['services'];
     
  for (var i = 0; i < services.length; i++) {
	 var row = document.createElement('tr');
    var name = document.createElement('td');
	 var price = document.createElement('td');
	 name.textContent = services[i].name
	 price.textContent = services[i].price
	  
	 row.appendChild(name);
	 row.appendChild(price);
	 table.appendChild(tr);
	 
	 
	  
//	  var myArticle = document.createElement('article');
//    var myH2 = document.createElement('h2');
//    var myPara1 = document.createElement('p');
//    var myPara2 = document.createElement('p');
//    var myPara3 = document.createElement('p');
//    var myList = document.createElement('ul');
//
//    myH2.textContent = heroes[i].name;
//    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//    myPara2.textContent = 'Age: ' + heroes[i].age;
//    myPara3.textContent = 'Superpowers:';
//        
//    var superPowers = heroes[i].powers;
//    for (var j = 0; j < superPowers.length; j++) {
//      var listItem = document.createElement('li');
//      listItem.textContent = superPowers[j];
//      myList.appendChild(listItem);
    }
	  
//    myArticle.appendChild(myH2);
//    myArticle.appendChild(myPara1);
//    myArticle.appendChild(myPara2);
//    myArticle.appendChild(myPara3);
//    myArticle.appendChild(myList);
//	  
//	 section.appendChild(myArticle);
  }
//}
