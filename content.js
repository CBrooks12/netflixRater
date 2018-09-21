var voted = function(){
	//fade out on click
	
	var s = document.getElementById('myDivId').style;
	s.opacity = 1;
	(function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();
	
	var val = this.value;
	
	var showObj = {
		showTitle: "",
		showEpisodeNumber: "",
		showEpisodeTitle: ""
	};
	
	var showName = "";
	showName = document.getElementsByClassName("ellipsize-text")[0];
	if(!showName){
		showName = "";
	}
	//if show has h4 block in obj, then it is a season show, otherwise its a movie
	try{
		showObj.showTitle = showName.getElementsByTagName("h4")[0].innerText;
		showObj.showEpisodeNumber = showName.getElementsByTagName("span")[0].innerText;
		showObj.showEpisodeTitle = showName.getElementsByTagName("span")[1].innerText;
	}
	catch{
		showObj.showTitle = showName;
	}
	var message = {funcName: "changeShowScore", show: showObj, points: val};
	chrome.runtime.sendMessage(message, function(response) {
		console.log("Response: ", response);
	});
	return false; // to stop page from refreshing
}

//set images
var imgURLup = chrome.extension.getURL('up.png');
var imgURLdown = chrome.extension.getURL('down.png');

//idk what this is for
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

//create elements and set them
var div = document.createElement( 'div' );
var btnForm = document.createElement( 'form' );
var btnUp = document.createElement( 'button' );
var btnDown = document.createElement( 'button' );

//append all elements
document.body.appendChild( div );
div.appendChild( btnForm );

var elemUp = document.createElement("img");
elemUp.setAttribute("src", imgURLup);
btnUp.appendChild(elemUp);

var elemDown = document.createElement("img");
elemDown.setAttribute("src", imgURLdown);
btnDown.appendChild(elemDown);

btnForm.appendChild( btnUp );
btnForm.appendChild( btnDown );

btnForm.onclick = "return false";

//set attributes for div
div.id = 'myDivId';
div.style.position = 'fixed';
div.style.top = '60%';
div.style.left = '90%';
div.style.width = '10%';   
div.style.zIndex = 99;
div.style.backgroundColor = "transparent";

elemUp.style.height = '25%';
elemUp.style.width = '25%';


btnUp.style.backgroundColor = "transparent";
btnUp.style.border = "None";
btnUp.style.padding = 0;
btnUp.value = 1;
btnUp.name = "up";
btnUp.onclick = voted;

elemDown.style.height = '25%';
elemDown.style.width = '25%';

btnDown.style.backgroundColor = "transparent";
btnDown.style.border = "None";
btnDown.style.padding = 0;
btnDown.value = -1;
btnDown.name = "Down";
btnDown.onclick = voted;