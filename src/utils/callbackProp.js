var callbackProp = function(current, callback){

	return function(value){
		if(arguments.length > 0 ) {
			current = value
			callback(current)
		}
		return current
	}

}
module.exports = callbackProp