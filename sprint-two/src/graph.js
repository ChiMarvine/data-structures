

var Graph = function(){
	this.nodes =[];
	this.edges = [];
};

Graph.prototype.addNode = function(node){
	this.nodes.push(node);	
};

Graph.prototype.contains = function(node){
	if(this.nodes.indexOf(node) !== -1){
		return true
	}
	return false
};

Graph.prototype.removeNode = function(node){
	this.nodes.splice(this.nodes.indexOf(node), 1)
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	for (var i = 0; i < this.edges.length; i++){
		if((this.edges[i].To === toNode || this.edges[i].To === fromNode) && (this.edges[i].From === fromNode || this.edges[i].From === toNode )){
			return true;
		}
	};
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var theEdges = {}
	theEdges.To = toNode
	theEdges.From = fromNode
	this.edges.push(theEdges)
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	for (var i = 0; i < this.edges.length; i++){
		if(this.edges[i].To === toNode && this.edges[i].From === fromNode){
			this.edges.splice(i, 1)
		}
	}
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, cb)
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



