var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	this.children[this.children.length] = Tree(value)
};

treeMethods.contains = function(target){
	// for(var i = 0; i < _.size(this.children); i++){
	// 	if (this.children[i].value === target){
	// 		return true
	// 	}
	// 	return false
	// }
	var counter = 0
	var recursiveChildChecker = function(node) {
		for(var i = 0; i < node.length; i++){
			if (node[i].value === target){
				counter++
			} 
			if (node[i].children.length > 0){
				recursiveChildChecker(node[i].children);
			} 
			
		}
	}
	recursiveChildChecker(this.children); // This is not the correct pass value, we simple put this here to demonstrate what we want to be passed on the recursive call

	if ( counter > 0){
		return true
	}
	return false
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
