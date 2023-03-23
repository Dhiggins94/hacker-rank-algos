// THE PROBLEM 3/22

// There is a string, S , of lowercase English letters that is repeated infinitely many times. Given an integer, N , find and print the number of letter a's in the first N letters of the infinite string.
// FREQUNCEY COUNTER PROBLEM

function repeatedString(s, n) {
  // we use two counters to keep track of the amount of times A is repeated in an given N. one for checking it normally using a frequency counter and the other will be use to account for any numbers that are left over aka any odd number presented in the S or N values.
  let counter1 = 0;
  let counter2 = 0;
  // we iterate through the length of S and check if S at index of [i] has an A in it, we increase the counter1
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "a") {
      counter1 += 1;
    }
  }
  // to check for the amount of time an "A" appears in the event an odd number of "A's" appear, we divide using modulus the amount of times a character repeats "N" and the strings length.
  let reminders = n % s.length;

  // we iterate through reminders and apply the same thing we did for the counter1 for counter2. we do this so we can check if their is any letters left over in the string
  for (let i = 0; i < reminders; i++) {
    if (s[i] == "a") {
      counter2 += 1;
    }
  }
// here we ADD the counter2 with the length of the String DIVIDED BY integer N, since we have the counter1 to tell us how many times A appears in the first iteration, we can mutiple with counter2 that takes account of any left over reminders (odd numbers) that appear to get the final result.
  counter2 += Math.floor(n / s.length) * counter1;
  // lastly we return counter2 to show the final result
  console.log(counter2)

  return counter2;
}
