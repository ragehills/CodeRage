$(document).ready(function(){
	$( ".gamePage" ).hide();
	$( ".gameLoss" ).hide();
	$("#startGameB").click(function() {
  		$(".startGame").slideUp();
  		$(".gamePage").show();

		var start = $(".row#2").offset().left;
		var playerMove = ''
		var finish = $("#g8").offset().left;

		$(document).on("keydown", backgroundChange)
		$("#playerm").css("background-color", "white")
		
		// players move
		function backgroundChange(event) {
			console.log("3")
			if (event.keyCode === 38) {
		    	$("#playermu").css("background-color", "white")
		    	$("#playerm").css("background-color", "transparent")
		    	playerMove = 'up'
		    } else if (event.keyCode === 40) {
		    	$("#playermd").css("background-color", "white")
		    	$("#playerm").css("background-color", "transparent")
		    	playerMove = 'down'
		    } else {
		    	$("#playermu").css("background-color", "transparent")
		    	$("#playerm").css("background-color", "white")
		    	playerMove = 'middle'
		    }
		};

		// players move back
		$(document).on("keyup", backgroundChangeBack)
		function backgroundChangeBack(event) {
			console.log("4")
			if (event.keyCode === 38) {
				$("#playerm").css("background-color", "white")
				$("#playermu").css("background-color", "transparent")
				playerMove = 'middle'
		    } else if (event.keyCode === 40) {
		    	$("#playerm").css("background-color", "white")
		    	$("#playermd").css("background-color", "transparent")
		    	playerMove = 'middle'

		    } else {
				$("#playermd").css("background-color", "none")
				playerMove = 'middle'
		    }
		};

		// Bullet animation & refire
		$(document).on("click", function() {
			
			setInterval(function() {
				$(".bullet").css({left: start}).animate({left: finish}, 1000);

				setTimeout(function() {
					console.log("made it to the person");
					if (playerMove !== 'middle') {
						console.log("You have Dodged!")
					} else {
						$(".gamePage").hide(1000);
	  					$(".gameLoss").show();
					}
				}, 850);
			}, 2000);
		});
	});

	// $(document).on("keydown", startCount);
	// $(document).on("keyup", startScore);
});