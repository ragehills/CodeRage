$(document).ready(function(){
	$( ".gamePage" ).hide();
	$( ".gameLoss" ).hide();
	$("#startGameB").click(function() {
  		$(".startGame").slideUp();
  		$(".gamePage").show();

  		var time = timeU - timeD;
  		var timeD = " ";
  		var timeU = " ";
  		console.log(time);
		var start = $(".row#2").offset().left;
		var playerMove = 'middle'
		var finish = $("#g8").offset().left;
		var score = 0

		$(document).on("keydown", backgroundChange)
		$("#playerm").css("background-color", "white")

		// players move
		function backgroundChange(event) {
			// console.log("3")
			if (event.keyCode === 38) {
		    	$("#playermu").css("background-color", "white")
		    	$("#playerm").css("background-color", "transparent")
		    	playerMove = 'up'
		    	var timeD = new Date().getTime();
		    	// return timeD;
		    } else if (event.keyCode === 40) {
		    	$("#playermd").css("background-color", "white")
		    	$("#playerm").css("background-color", "transparent")
		    	playerMove = 'down'
		    	var timeD = new Date().getTime();
		    	// return timeD;
		    } else {
		    	$("#playermu").css("background-color", "transparent")
		    	$("#playerm").css("background-color", "white")
		    	playerMove = 'middle'
		    }
		};

		// players move back
		$(document).on("keyup", backgroundChangeBack)
		function backgroundChangeBack(event) {
			// console.log("4")
			if (event.keyCode === 38) {
				$("#playerm").css("background-color", "white")
				$("#playermu").css("background-color", "transparent")
				playerMove = 'middle'
				var timeU = new Date().getTime();
		    	// return timeu;
		    } else if (event.keyCode === 40) {
		    	$("#playerm").css("background-color", "white")
		    	$("#playermd").css("background-color", "transparent")
		    	playerMove = 'middle'
		    	var timeU = new Date().getTime();
		    	// return timeU;
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
					// console.log("made it to the person");
					if (playerMove !== 'middle') {
						score++;
						// console.log(score);
						$('#score').text(score);
					} else {
						$(".gamePage").hide(1000);
	  					$(".gameLoss").show();
	  					$('.scoreBoard').text(score);
					}
				}, 850);
			}, 2000);
		});
		$("#replayGameB").click(function() {
			document.location.reload();
		});
	});
});