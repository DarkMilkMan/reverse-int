module.exports = function reverse (n) {
  let result = '';
  if (n<0){
    n = Math.abs(n)
  }
  n = String(n);
  for (let i=n.length-1;i>=0;i--){
    result += n[i];
  }
  return result;
}
