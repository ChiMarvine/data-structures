var BinarySearchTree = function(value){
	var node = {};
	node.value = value;
	node.left = undefined;
	node.right = undefined;



	node.insert = function(value){
		if(value > node.value) {
			if(node.right === undefined) {
				node.right = BinarySearchTree(value);
			} else {
				node.right.insert(value);
			}
		} else {
			if(node.left === undefined) {
				node.left = BinarySearchTree(value);
			} else {
				node.left.insert(value);
			}
		}
	}

	node.contains = function(value){

	}

	node.depthFirstLog = function(callback){

	}

	return node;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
