window.addEventListener('load', function () {

	var loadDone = function(event){
		var request = event.target;
		addText = request.response;
		
		var text = document.createTextNode(addText);

		newElement.appendChild(text);

		body.appendChild(newElement);



	}

	var getText = function (){
		var request = new XMLHttpRequest();
		request.open("GET", "http://localhost:4567/people");
		request.send();
		request.addEventListener('load', loadDone);
	}
	
	var body = document.querySelector('body');

	var newElement = document.createElement("div");

	getText();

});