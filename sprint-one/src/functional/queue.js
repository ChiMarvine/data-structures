var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    length++;
    storage[length] = value;
  };

  someInstance.dequeue = function(){
    if(length > 0) {
      length--;      
    }
    //{1:b 2:c 3:c}
    //Hey I want storage[1] = storage[2]
    for (var i = 0; i <= length; i++){
      storage[i] = storage[i+1]
    }
    return storage[0]
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
