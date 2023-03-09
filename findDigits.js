

// THE PROBLEM
// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.


function findDigits(n) {
  // Write your code here
      // since we cant split a number to its individual digits, we convert the number into a string and split it. giving us the individual digits.
  let str = n.toString()
  let container = str.split("")
//if we plan to return the number of divisors we need a variable to act as a counter, hence the counter variable at 0
  let counter = 0
  // here we iterate through the container and check to see if the value (n) is divisble by the individual numbers in the container, using the "Number" function on the container to convert the splitted string into numbers. and if it is, to increase the counter aka. the number of divisors.
  for(let i = 0; i < container.length; i++){
      if(n % Number(container[i]) === 0){
          counter++
      }
  }
  // lasly we return the counter which represents the divisors
  return counter
}
