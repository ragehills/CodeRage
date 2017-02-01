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
		$("#idle").show()
		$("#playermd").hide()
		$("#playermu").hide()
		$("#dizzy").hide()

		// Bullet animation & refire
		$(document).on("click", fireBullet);
	}

	function backgroundChange(event) {
		timer = setTimeout(endGame, 500);
		if (event.keyCode === 38) {
			$("#idle").hide()
			$("#playermu").show()
	    	playerMove = 'up'
	    } else if (event.keyCode === 40) {
	    	$("#idle").hide()
			$("#playermd").show()
	    	playerMove = 'down'
	    } else {
	    	$("#idle").show()
	    	playerMove = 'middle'
	    }
	};

			// players move back
	function backgroundChangeBack() {
		clearTimeout(timer);
		playerMove = 'middle';
		$("#idle").show()
		$("#playermd").hide()
		$("#playermu").hide()
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
					$("#idle").hide()
					$("#dizzy").show()
					endGame();
				}
			}, 740);
		}, 2000);
	};

	function endGame() {
		$(".gamePage").hide(1000);
  		$(".gameLoss").show();
  		$('.scoreBoard').text(score);
	}
});