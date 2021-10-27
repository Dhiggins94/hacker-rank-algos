function twoArrays(k, A, B) {
  // Write your code here
// let sort1 = (a, b) => a - b ascending order
// let sort2 = (a, b) => b - a descending order
let letterA = A.sort((a, b) => a - b) 
let letterB = B.sort((a, b)=> b - a);
console.log(letterA)
console.log(letterB)
let ayo;
for(let i = 0; i < letterA.length; i++){
   if(letterA[i] + letterB[i] >= k){     
   ayo = "YES"
   }else {
       return ayo = "NO"
   }
}
return ayo
}