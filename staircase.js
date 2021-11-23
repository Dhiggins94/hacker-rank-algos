function staircase(n) {
  // Write your code here
for(let i= 0; i < n; i++){
  let spaces = ""
  // stores the values
  for(let j = 0; j < n - i - 1; j++){
      spaces += " ";
  // this makes the number of spaces
  }
  for(let k = 0; k < i + 1; k++){
      spaces += "#";
      // this makes the number of hashtags
  }
  console.log(spaces)
}

}