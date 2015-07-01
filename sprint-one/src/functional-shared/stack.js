var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack ={}
  newStack.length = 0
  _.extend(newStack, stackMethods)

  return newStack;
};

var stackMethods = {};

stackMethods.size = function(){
	return this.length;
}

stackMethods.push = function(value){
	this.length++;
	this[this.length] = value
}

stackMethods.pop = function(){
	if (this.length > 0){
		this.length--;
	}
	return this[this.length + 1]
}
