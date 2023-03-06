function plusMinus(arr) {
  // Write your code here
  let posArr = arr.filter(x => x > 0).length / arr.length
  console.log(posArr.toFixed(6))
  let oddArr = arr.filter(y => y < 0).length / arr.length
  console.log(oddArr.toFixed(6))
  let zeroArr = arr.filter(z => z === 0).length / arr.length
  console.log(zeroArr.toFixed(6))  
}

// The toFixed() method formats a number using fixed-point notation.

