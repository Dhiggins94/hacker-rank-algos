// the problem  3/31
// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.




function sockMerchant(n, ar) {
  // Write your code here
let socksCounter = {};
let totalPairs = 0;
let socksArray = ar;

socksArray.forEach((sockColor) =>{
  if(!socksCounter[sockColor]){
      socksCounter[sockColor] = 1
      return;
  }
  totalPairs++;
  delete socksCounter[sockColor]
});
return totalPairs;
}
