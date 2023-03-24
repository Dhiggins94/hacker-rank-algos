// the problem 3/24

// There is a sequence of words in CamelCase as a string of letters, S , having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given S , determine the number of words in S.









function camelcase(s) {
  // Write your code here
  // we make an string of letters for the alphabet
let capLetters = 'ABCDEFGHIJKLMNOPQRSTUVQWXYZ';
// we start the counter at 1 so it can count the numbers up from that, since starting from the would make it four and we need the the first camel case letter to represent 1 word being present
let counter = 1;
//we iterate the length of S with a for loop and check if the string of letters includes any thing from the alphabet in caps with, we increment the counter by one
for(let i= 0; i < s.length; i++){
   if(capLetters.includes(s[i])){
       counter += 1
   }
}
//  we return the value of counter
return counter
}
