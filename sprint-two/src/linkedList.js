var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (!list.tail){
      list.head = new Node(value);
      list.tail = list.head;
    }else{
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }

  };

  list.removeHead = function(){
    if(list.head.next === null) {
      list.head.next = list.tail  
    }
    list.head = list.head.next;
    return list.head.value; 
  };

  list.contains = function(target){
  
    var checker = function (item){
      if(item.value === target){
        return true
      }
      if (item.next !== null){
        return checker(item.next)
      }
      return false

    }
    return checker(list.head); 

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
