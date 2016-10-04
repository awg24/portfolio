$(document).ready(function(){
	$(".button-collapse").sideNav();


});

function removeError() {
	var element = document.getElementById("error-message");
	element.parentNode.removeChild(element)
}

function removeSuccess() {
	var element = document.getElementById("success-message");
	element.parentNode.removeChild(element)
}
