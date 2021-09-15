function timeConversion(s) {
  // Write your code here
  
let newArr = s.split(':')
let hours = newArr[0]
let minutes = newArr[1]
let seconds = newArr[2]

if (hours === '12') {
hours = '00'
}

if (seconds.includes('PM')) {
  hours = 12 + parseInt(hours, 10)
  seconds = seconds.replace('PM', '')
} else {
  seconds = newArr[2].replace('AM','')   
}
return (`${hours}:${minutes}:${seconds}`)
}

console.log(timeConversion)