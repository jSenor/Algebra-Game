module.exports = (function(){

	var Digit = require("../number");
	var Question = require("../question");

	var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	var signs = [-1, 1];

	function generate(numberOfValues){

		var numberArray = [];

		for(var i = 0; i < numberOfValues; i++){

			numberArray.push(generateRandomNumber());

		}

		return new Question(numberArray);
		
	}

	function generateRandomNumber(){

		return (new Digit(getRandom(digits), getRandom(signs)));

	}

	function getRandom(array){

		var arraySize = array.length;
		var randomIndex = Math.floor((Math.random() * arraySize));

		return array[randomIndex];

	}

	return {

		generateRandomNumber: generateRandomNumber,
		generate: generate

	}		

})();