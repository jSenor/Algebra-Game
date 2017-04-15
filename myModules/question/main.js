function Question(numberArray){

	this.numberArray = numberArray;
	this.question = generateQuestion();
	this.answer = getAnswer(this.question);

	function generateQuestion(){

		var question = numberArray.map(function(number){
			return number.toString() + "";
		});

		return question.join(" ");

	}

	function getAnswer(question){

		return eval(question);

	}

}

module.exports = Question;