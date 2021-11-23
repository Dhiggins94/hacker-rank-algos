function simpleArraySum(ar) {
  // Write your code here
console.log(ar)
const sumArray = (oldValue, currentValue) => oldValue + currentValue;
return ar.reduce(sumArray)
}