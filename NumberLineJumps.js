// The problem 3/31


// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.






function kangaroo(x1, v1, x2, v2) {
  // Write your code here
if(v1 < v2){
  return "NO"
}
if((x2 - x1) % (v1 - v2) == 0){
  return"YES"
}else
return "NO"
}