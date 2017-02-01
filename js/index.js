$(document).ready(function(){
	$( ".gamePage" ).hide();
	$( ".gameLoss" ).hide();
	var playerMove = 'middle';
	var score = 0;
	var dead = false;
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
		if (!dead) {
			$("#idle").show()
			$("#playermd").hide()
			$("#playermu").hide()
		}
		playerMove = 'middle';

	};

	function fireBullet() {
		var start = $(".row#2").offset().left;
		var finish = $("#g8").offset().left;
		var rand = ((Math.round(Math.random()*(400)*10) + 200));
		var check = rand - 50
		setInterval(function() {
			console.log(check);
			console.log(rand);
			$(".bullet").css({left: start}).animate({left: finish}, 1000);

			setTimeout(function() {
				if (playerMove !== 'middle') {
					score++;
					$('#score').text(score);
				} else {
					$("#dizzy").show()
					$("#idle").hide()
					$("#playermd").hide()
					$("#playermu").hide()
					endGame();
				}
			}, check);
		}, rand);
	};

	function endGame() {
		dead = true;
		$(document).off("keydown");
		$(".gamePage").hide(1000);
  		$(".gameLoss").show();
  		$('.scoreBoard').text(score);
  		$("#dizzy").show()
		$("#idle").hide()
		$("#playermd").hide()
		$("#playermu").hide()
}
});