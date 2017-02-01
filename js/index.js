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
  		document.getElementById('pageTurn').play()

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
	    	document.getElementById('jumpSound').play()
	    } else if (event.keyCode === 40) {
	    	$("#idle").hide()
			$("#playermd").show()
	    	playerMove = 'down'
	    	document.getElementById('jumpSound').play()
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
		setInterval(function() {
			var rand = ((Math.round(Math.random()*(400)*8) + 200));
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
					document.getElementById('spin').play()
					endGame();
				}
			}, 800);
		}, 2000);
	};

	function endGame() {
		dead = true;
		// $(fireBullet).stop()
		// $(fireBullet).clearQueue()
		$(document).off("keydown");
		$(".gamePage").hide(1000);
  		$(".gameLoss").show(1000);
  		$('.scoreBoard').text(score);
  		$("#dizzy").show()
		$("#idle").hide()
		$("#playermd").hide()
		$("#playermu").hide()
		$(".bullet").stop('fireBullet')
}
});