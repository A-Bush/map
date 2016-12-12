function HMap(initialCapacity){
  initialCapacity = initialCapacity || 8;
  let currentCapacity = 0;
  let map = init(initialCapacity);
  this.added = 0;
  this.changed = 0;


  function init(capacity){
    capacity = capacity || 8;
    let map = [];
    for(let i = 0; i < capacity; i += 1){
      map.push([]);
    }
    currentCapacity = map.length;
    return map;
  }

  function hashCode(key){
    key = '' + key;
    let hashCode = key.split('')
    .map(v => v.charCodeAt(0))
    .reduce((p,c) => p + c);
    return hashCode;
  }

  this.resize = function(){
    console.log('resizing... wait');
    let newCapacity = currentCapacity << 1;
    let temp = map.reduce((p,c) => p.concat(c));
    let newMap = init(newCapacity);
    map = newMap;
    for(let i = 0; i < temp.length; i++){
      this.put(temp[i][1], temp[i][2]);
    }
    console.log('resized');
  }

  this.put = function(key, value){
    let hash = hashCode(key);
    let current = map[hash & (currentCapacity - 1)];

    // let flag = true;
    for(let i = 0; i < current.length; i++){
      if(current[i][0] === hash && current[i][1] === key){
        current[i][2] = value;
        // flag = false;
        this.changed += 1;
        return 'changed';
      }
    }

    // if(flag) {
      current.push([hash, key, value]);
    // }
    if(current.length > currentCapacity){
      this.resize();
    }
    this.added += 1;
    return 'added in ' + 'map [' + (hash & (currentCapacity - 1)) + '] [' + (current.length - 1) + ']';
  }

  this.get = function(key){
    let hash = hashCode(key);
    let current = map[hash & (currentCapacity - 1)];
    for(let i = 0; i < current.length; i++){
      if(current[i][0] === hash && current[i][1] === key){
        return current[i][2];
      }
    }
    return "NOT FOUND";
  }

  this.getMap = function(){
    return map;
  }
  this.getC = function(){
    return currentCapacity;
  }
}
