function Number(value, sign){

	this.value = value;
	this.sign = sign === -1 ? "-" : "+";

}

Number.prototype = {

	toString: function(){
		return this.sign + " " + this.value;
	}

}

module.exports = Number;