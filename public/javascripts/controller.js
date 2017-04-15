var controller = {

	model: null,
	view: null,
	question: null,

	init: function(){
		this.getQuestion();
		this.view.setScore(this.model.score);
	},

	getQuestion: function(){
		this.view.clearAnswer();
		this.view.enableUserInput();

		if(this.model && this.view){
			this.model.getQuestion(this.model.setting, this.setQuestion.bind(this));
		}
	},

	setQuestion: function(question){
		this.question = question;
		this.view.setQuestion(question.question);
	},

	changeSetting: function(newSetting){
		this.model.setting = newSetting;
		this.getQuestion();
	},

	checkAnswer: function(answer){

		this.view.clearUserInput();

		if(answer == this.question.answer){
			this.view.showCorrectStatus();
			this.model.score++;
			this.view.setScore(this.model.score);
			this.nextQuestion();
		}
		else{
			this.view.showWrongStatus();
			this.model.score--;
			this.view.setScore(this.model.score);
			this.nextQuestion();
		}

		this.view.showAnswer(this.question.answer);
		this.model.count++;
		this.view.setCount(this.model.count);

	},

	nextQuestion: function(){
		this.view.disableUserInput();
		setTimeout(this.getQuestion.bind(this), 1000);
	},

}

controller.model = model;
controller.view = view;