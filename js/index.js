$(document).ready(function(){

	$(document).on("keydown", backgroundChange)
	$("#playerm").css("background-color", "white")
	function backgroundChange(event) {
		console.log("3")
		if (event.keyCode === 38) {
	    	$("#playermu").css("background-color", "white")
	    	$("#playerm").css("background-color", "transparent")
	    } else if (event.keyCode === 40) {
	    	$("#playermd").css("background-color", "white")
	    	$("#playerm").css("background-color", "transparent")
	    } else {
	    	$("#playermu").css("background-color", "none")
	    	$("#playerm").css("background-color", "white")
	    }
	}
	$(document).on("keyup", backgroundChangeBack)
	function backgroundChangeBack(event) {
		console.log("4")
		if (event.keyCode === 38) {
			$("#playerm").css("background-color", "white")
			$("#playermu").css("background-color", "transparent")
	    } else if (event.keyCode === 40) {
	    	$("#playerm").css("background-color", "white")
	    	$("#playermd").css("background-color", "transparent")
	    } else {
			$("#playermd").css("background-color", "none")
	    }
	}
});