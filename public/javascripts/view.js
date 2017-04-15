var view = {

	answerFocus: false,
	statusObject: document.querySelector(".status"),
	questionObject: document.querySelector(".question"),
	scoreObject: document.querySelector(".score"),
	amountObject: document.querySelector("#amount"),
	answerObject: document.querySelector(".answer"),
	userAnswerObject: document.querySelector(".user-input"),
	countObject: document.querySelector(".count"),

	showDefaultStatus: function(){
		this.statusObject.className = "status default";
	},

	showCorrectStatus: function(){
		this.statusObject.className = "status correct";
	},

	showWrongStatus: function(){
		this.statusObject.className = "status wrong";
	},

	setQuestion: function(question){
		this.questionObject.innerText = question.question || question;
	},

	setScore: function(newScore){
		this.scoreObject.innerText = newScore;
	},

	getAmountContent: function(){
		return this.amountObject.value;
	},

	showAnswer: function(answer){
		this.answerObject.innerText = answer;
	},

	getUserAnswer: function(){
		return this.userAnswerObject.value;
	},

	clearAnswer: function(){
		this.showAnswer("");
	},

	disableUserInput: function(){
		this.userAnswerObject.readOnly = true;
	},

	enableUserInput: function(){
		this.userAnswerObject.readOnly = false;
	},

	clearUserInput: function(){
		this.userAnswerObject.value = "";
	},

	setCount: function(newCount){
		this.countObject.innerText = newCount;
	}

}