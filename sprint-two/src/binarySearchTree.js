var BinarySearchTree = function(value){
	var node = {};
	node.value = value;
	node.left = null;
	node.right = null;



	node.insert = function(value){
		if(value > node.value) {
			if(node.right === null) {
				node.right = BinarySearchTree(value);
			} else {
				node.right.insert(value);
			}
		} else {
			if(node.left === null) {
				node.left = BinarySearchTree(value);
			} else {
				node.left.insert(value);
			}
		}
	}

	node.contains = function(value){
		if(value === node.value){
			return true;
		}
		if(value > node.value){
			if(node.right === null) {
				return false;
			}
			return node.right.contains(value)
		}
		if(value < node.value){
			if(node.left === null) {
				return false;
			}
			return node.left.contains(value)
		}
	}
	

	node.depthFirstLog = function(callback){
		callback(node.value);
		if(node.right !== null){
			node.right.depthFirstLog(callback)
		}
		if(node.left !== null){
			node.left.depthFirstLog(callback)
		}
	}

	return node;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
