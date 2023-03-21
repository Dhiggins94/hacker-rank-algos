// 03/21

// THE PROBLEM
// A left rotation operation on an array of size N shifts each of the array's elements 1 unit to the left. Given an integer,D , rotate the array that many steps left and return the result.

function rotateLeft(d, arr) {
  // Write your code here
  // we start with giving the arr a variable so we can work with it.
  let rotatedArr = arr;
  // we iterate through the number of rotations aka "d" so the array has a set number of left rotations to do.
  for (let i = 0; i < d; i++) {
    // we use .shift() to remove the first element in the array and return a new one under the value of firstItem
    const firstItem = rotatedArr.shift();
    rotatedArr.push(firstItem);
  }
  // lastly we return the rotated array.
  return rotatedArr;
}
