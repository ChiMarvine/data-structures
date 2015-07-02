var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.length = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.length++;
	this[this.length] = value;
}

queueMethods.dequeue = function() {
	if(this.length > 0) {
		this.length--;
	}
	for(var i = 0; i <= this.length; i++) {
		this[i] = this[i + 1]
	}
	return this[0]
}

queueMethods.size = function() {
	return this.length;
}
