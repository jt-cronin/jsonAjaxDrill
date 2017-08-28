window.addEventListener('load', function () {

	var loadDone = function(event){
		var request = event.target;
		var added = request.response;

		var addText = JSON.parse(added)
	
		return addText;

	}

	var getText = function (){
		var request = new XMLHttpRequest();
		request.open("GET", "http://localhost:4567/people");
		request.send();
		var here = request.addEventListener('load', loadDone);
		return here;
	}
	
	var body = document.querySelector('body');

	var newElement = document.createElement("div");

	var final = getText();

	for (var i = final.length - 1; i >= 0; i--) {
			var text = document.createTextNode(final[i].fname + " " + final[i].lname + " ");

			newElement.appendChild(text);

			body.appendChild(newElement);
		}
});