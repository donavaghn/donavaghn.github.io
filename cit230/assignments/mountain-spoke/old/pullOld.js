var section = document.querySelector('table');

var requestURL = 'services.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var servicesInfo = request.response;
  fillTable(servicesInfo);
}	

function fillTable(jsonObj){
	var services = jsonObj['services'];

//$.each(services, function(i, d) {
//   var row='<tr>';
//   $.each(d, function(j, e) {
//      row+='<td>'+e+'</td>';
//   });
//   row+='</tr>';
//   $('#table tbody').append(row)
	
	$.each(services, function(i, services) {
		var tr = $('<tr>').append(
			$("<td>").text(services.name)
			$('<td>').text('$' + services.price.toFixed(2))
		
		)
		table.appendChild(tr);
	})
}

	
//	
//    var section = document.querySelector('section');
//
//var requestURL = 'services.json';
//
//var request = new XMLHttpRequest();
//
//request.open('GET', requestURL);
//
//request.responseType = 'json';
//request.send();
//
//request.onload = function() {
//  var dataForTable = request.response;
//  showTable(tableData);
//}
//
//function showTable(jsonObj) {
//  var services = jsonObj['services'];
//     
//	
//	var table = document.createElement('table');
//  for (var i = 0; i < services.length; i++) {
//	 var row = document.createElement('tr');
//    var name = document.createElement('td');
//	 var price = document.createElement('td');
//	 tableRow.textContent = services[i].name
//	 tableRow.textContent = services[i].price
//	  
//	 tr.appendChild(name);
//	 tr.appendChild(price);
//	 table.appendChild(tr);
//	 
//	  
////	  var myArticle = document.createElement('article');
////    var myH2 = document.createElement('h2');
////    var myPara1 = document.createElement('p');
////    var myPara2 = document.createElement('p');
////    var myPara3 = document.createElement('p');
////    var myList = document.createElement('ul');
////
////    myH2.textContent = heroes[i].name;
////    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
////    myPara2.textContent = 'Age: ' + heroes[i].age;
////    myPara3.textContent = 'Superpowers:';
////        
////    var superPowers = heroes[i].powers;
////    for (var j = 0; j < superPowers.length; j++) {
////      var listItem = document.createElement('li');
////      listItem.textContent = superPowers[j];
////      myList.appendChild(listItem);
//    }
//	  
////    myArticle.appendChild(myH2);
////    myArticle.appendChild(myPara1);
////    myArticle.appendChild(myPara2);
////    myArticle.appendChild(myPara3);
////    myArticle.appendChild(myList);
////	  
////	 section.appendChild(myArticle);
//	section.appendChild('table')
//  }
////}
