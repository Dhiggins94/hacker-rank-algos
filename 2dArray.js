function hourglassSum(arr) {
  // Write your code here
  // we start by listing the lowest value of the sum of an hourglass which is -63 by the example given in the problem. it'll become the highest value later that we need to return.
  let results = -63;
  // we make a tempVal that can help us keep track of when we're iterating through the array
  let tempVal = 0;
  // next we need a nested for loop to form the hourglass and to make sure we dont got out of bounds in hourglass we're trying to make we're going to -2 the array's length.
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      // now we're going to calculate the value inside positions I and J using the variable tempVal, by adding the postions I & J by 1 and 2 we'll be able to construct are hourglass and add the positions from each line of the hourglass to get the maximum sum and put it into  our tempValue
      tempVal =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      // lastly we check to see if the tempVal is more than the variable results(which it is since its -63) we can make the results variable into the tempval and then return it so
      if (tempVal > results) {
        results = tempVal;
      }
    }
  }
  return res;
}
