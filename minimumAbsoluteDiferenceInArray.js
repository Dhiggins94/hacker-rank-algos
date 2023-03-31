// THE Problem 3/31
// The absolute difference is the positive difference between two values a and b , is written [a-b] or [b-a] and they are equal. If a = 3 and b = 2,  [3-2]=[2-3] = 1. Given an array of integers, find the minimum absolute difference between any two elements in the array.




function minimumAbsoluteDifference(arr) {
  // Write your code here

let sortArray = arr.sort()

let minAbsoluteDif = Math.abs(sortArray[0] - sortArray[1]);

for(let i = 1; i < sortArray.length - 1; i++){
  let currentAbsoluteDiff = Math.abs(sortArray[i] - sortArray[i+1]);
  if(currentAbsoluteDiff < minAbsoluteDif){
      minAbsoluteDif = currentAbsoluteDiff
  }
}
return minAbsoluteDif;
}
