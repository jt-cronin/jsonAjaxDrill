window.addEventListener('load', function () {

	var loadDone = function(event){
		var request = event.target;
		var added = request.response;

		var addText = JSON.parse(added);
		printElements(addText);

	}

	var getText = function (){
		var request = new XMLHttpRequest();
		request.open("GET", "http://localhost:4567/people");
		request.send();
		var here = request.addEventListener('load', loadDone);
		return here;
		debugger
	}

	var final = getText();

	var printElements = function(info){
		var body = document.querySelector('body');

		for (var i = info.length - 1; i >= 0; i--) {
			
			var nameElement = document.createElement("h1");
			var addressElement = document.createElement("div");
			var phoneElement = document.createElement("div");
			var name = document.createTextNode(info[i].fname + " " + info[i].lname + "\n");
			var address = document.createTextNode(info[i].address+ " " + info[i].city + " " + info[i].state + " " + info[i].zip + "\n");
			var phone = document.createTextNode(info[i].tel);
			var innerbody = document.createElement("div")
			body.appendChild(innerbody)
			innerbody.appendChild(nameElement);
			innerbody.appendChild(addressElement);
			innerbody.appendChild(phone);
			nameElement.appendChild(name);
			addressElement.appendChild(address);
			phoneElement.appendChild(phone);
			
		}

	}
});