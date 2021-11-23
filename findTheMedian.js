function findMedian(arr) {
  // Write your code here
let sortArr = arr.sort((a, b) => a - b)
// regular sort() didnt work because its mostly used things like strings. must use sort compare method
// sort numbers in ascending order
  let lengthArr = arr.length
  let middleIndex = Math.floor(lengthArr/2)
  let middle = sortArr[middleIndex]
  return middle
}