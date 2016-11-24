
function init(){
  return [];
}

function put(m, k, v){
  let t = Math.floor(k/100);
  if(m[t] === undefined) {
    m[t] = [k,v];
    return;
  }

  let flag = true;

  for(var i = 0; i < m[t].length; i++){
    if(m[t][i][0] === k) {
      m[t][i][1] = v;
      flag = false;
    }
  }
  if(flag) m[t][m[t].length] = [k,v];
}

function get(m, k) {
  let t = Math.floor(k/100);
  if(m[t] === undefined) return null;

  for(var i = 0; i < m[t].length; i++){
    if(m[t][i][0] === k) return m[t][i][1];
  }
  return null;
}

function testNum(m){
  for(var i = 0; i < 1000000; i++){
    let k = Math.floor(Math.random()*1000);
    let v = "__" + k.toString() + "__";
    put(m, k, v);
  }
}


function sort(m){
  for(var i = 0; i < m.length; i++){
    m[i].sort((a,b) => a[0] - b[0]);
  }
}
