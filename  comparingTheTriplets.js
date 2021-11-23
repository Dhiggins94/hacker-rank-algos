function compareTriplets(a, b) {
  // Write your code here
// console.log(a) alice [5,6,7]
// console.log(b) bob [3,6,10]

let aliceArray = a;
let bobArray = b;
let points = [];
let aliceScore = 0;
let bobScore = 0;
points.push(aliceScore,bobScore)
console.log(points)

for(let i = 0; i < aliceArray.length; i++){
  if(aliceArray[i] > bobArray[i] ){
       aliceScore += 1;
  }
  else if(aliceArray[i] < bobArray[i]){
      bobScore += 1;
  }
points[0] = aliceScore;
points[1] = bobScore;
}
return points;

}