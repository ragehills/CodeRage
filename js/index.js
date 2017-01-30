$(document).ready(function(){
// var e = jQuery.Event("keyup");
// e.which = 38; // up key
// // e.which = 40; // down key
// $("#playermd").css("background-color", "white");
// $("#playermu").css("background-color", "white");
// $("#playerm").css("background-color", "black");
// });

var moveUp = document.getElementById("playermu");
var moveDown = document.getElementById("playermd");
var originalP = document.getElementById("playerm");
var keyDown = Event.keyCode()

	if (keyDown == 38) {
	    $("#playermu").css("background-color", "white")
	} else if (keyDown == 40) {
	    $("#playermd").css("background-color", "white")
	}
});