function pangrams(s) {
  // Write your code here
  
let sentence = s.toLowerCase()
let regex = /([a-z])(?!.*\1)/gi;
let matching = sentence.match(regex)

if(matching.length >= 26){
  return 'pangram'
}
  else {
      return 'not pangram'
  }

}