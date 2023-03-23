// THE PROBLEM 3/22

// There is a string, S , of lowercase English letters that is repeated infinitely many times. Given an integer, N , find and print the number of letter a's in the first N letters of the infinite string.
// FREQUNCEY COUNTER PROBLEM


function repeatedString(s, n) {
  // we use two counters to keep track of the amount of times A is repeated in an given N. one for checking it normally using a frequency counter and the other will be use to account for any numbers that are 
let counter1 = 0;
let counter2 = 0;
for(let i = 0; i < s.length; i++){
  if(s[i] == "a"){
      counter1 += 1
  }
}
  // to check for the amount of time an "A" appears in the event an odd number of "A's" appear, we divide using modulus the amount of times a character repeats "N" and the strings length.
let reminders = n % s.length;

  // we iterate through reminders and apply the same thing we did for the counter1 for counter2. we do this so we can check if their is any letters left over in the string
for(let i = 0; i < reminders; i++){
  if(s[i] == "a"){
      counter2 += 1
  }
}

counter2 += Math.floor(n / s.length) * counter1
return counter2

}
