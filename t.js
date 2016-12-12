var m = new HMap();

function randW(n){
  let s = '';
  let abd ='abcdefghijklmnopqrstuvwxyz0123456789';
  let aL = abd.length;
  while(s.length < n)
  s += abd[Math.random() * aL|0];
  return s;
}

function fill500(){
  for(let i = 0; i < 500000; i++){
    m.put(randW(10), randW(10));
  }
  console.log('filled');
}

function testPut(key, value){
  let s,e;
  s = Date.now();
  console.log(m.put(key, value));
  e = Date.now()
  return (e - s) + ' ms done put';
}
function testGet(value){
  let s,e;
  s = Date.now();
  console.log(m.get(value));
  e = Date.now()
  return (e - s) + ' ms done get';
}
