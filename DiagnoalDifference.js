
function diagonalDifference(arr) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;

let leftDiag = arr.map((x, index) => {
let nums = (x[index])
return nums
})

let sum1 = leftDiag.reduce(reducer)



let rightDiag = arr.map((x, index) => {
let nums = (x[arr.length - 1 - index])
return nums
})
let sum2 = rightDiag.reduce(reducer)
let total = sum1 - sum2
let absTotal = Math.abs(total)
return absTotal;
}