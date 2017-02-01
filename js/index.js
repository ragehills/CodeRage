$(document).ready(function(){
	$( ".gamePage" ).hide();
	$( ".gameLoss" ).hide();
	var playerMove = 'middle';
	var score = 0;
	var timer;
	$("#startGameB").click(startGame);
	$("#replayGameB").click(function() {
		document.location.reload();
	});

	function startGame() {
		$(".startGame").slideUp();
  		$(".gamePage").show();


		$(document).on("keydown", backgroundChange)
		$(document).on("keyup", backgroundChangeBack)
		$("#playerm").css("background-color", "white")

		// Bullet animation & refire
		$(document).on("click", fireBullet);
	}

	function backgroundChange(event) {
		timer = setTimeout(endGame, 500);
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
	function backgroundChangeBack() {
		clearTimeout(timer);
		playerMove = 'middle';
		$("#playerm").css("background-color", "white");
	    $("#playermd").css("background-color", "transparent");
		$("#playermu").css("background-color", "transparent");
	};

	function fireBullet() {
		var start = $(".row#2").offset().left;
		var finish = $("#g8").offset().left;
		setInterval(function() {
			$(".bullet").css({left: start}).animate({left: finish}, 1000);

			setTimeout(function() {
				if (playerMove !== 'middle') {
					score++;
					$('#score').text(score);
				} else {
					endGame();
				}
			}, 750);
		}, 2000);
	};

	function endGame() {
		$(".gamePage").hide(1000);
  		$(".gameLoss").show();
  		$('.scoreBoard').text(score);
	}
});