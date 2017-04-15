(function(){

	var answerBox = document.querySelector(".user-input");

	function addChangeSettingEvent(){

		var startButton = document.querySelector("#start");
		startButton.addEventListener("click", function(event){
			controller.changeSetting(+view.getAmountContent());
		});

	}

	function keepTrackOfAnswerFocus(){

		answerBox.onblur = function(){
			view.answerFocus = false;
		}
		answerBox.onfocus = function(){
			view.answerFocus = true;
		}

	}

	function addKeyEvents(){
		window.addEventListener("keyup", function(event){
			if(event.key === "Enter" && view.answerFocus){
				controller.checkAnswer(+view.getUserAnswer());
			}
		});
	}

	addChangeSettingEvent();
	keepTrackOfAnswerFocus();
	addKeyEvents();

	controller.init();

})();