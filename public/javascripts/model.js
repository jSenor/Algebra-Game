var model = (function(){

	function sendRequest(requestType, url, callback){

		var XMLHttp = new XMLHttpRequest();
		XMLHttp.open(requestType, url, true);

		XMLHttp.onreadystatechange = callback;

		XMLHttp.send();

	}

	function getQuestion(amount, callback){

		var url = "/question/" + amount;

		sendRequest("GET", url, function(){

			if(this.readyState === 4 && this.status === 200){
				callback(JSON.parse(this.responseText));
			}

		});

	}

	return {

		setting: 2,
		score: 0,
		count: 0,

		getQuestion: getQuestion,

		setSetting: function(setting){
			this.setting = setting; 
		},

	}

})();