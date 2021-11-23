function aVeryBigSum(ar) {
  // Write your code here
const reducer = (previousValue, currentValue) => (previousValue + currentValue)

let sum = ar.reduce(reducer)
return sum
}