
function lonelyinteger(a) {
  // Write your code here
let b = a.slice().sort();
  let arr = []
  
  for (let i=0; i<b.length; i++) {
      if (b[i] != b[i+1]) {
          arr.push(b[i])
      } else {
          i++
      }
  }
  return arr;
}
