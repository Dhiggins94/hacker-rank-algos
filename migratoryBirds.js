// The problem

// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.






function migratoryBirds(arr) {
  // Write your code here
let sortBirds = arr.sort()
console.log(sortBirds)
const frequencyMap = {};
let maxElement = sortBirds[0];
let maxCount =1;
for(let i = 0; i<sortBirds.length; i++){
  const element = sortBirds[i];
  if(frequencyMap[element]){
      frequencyMap[element]++
  }else{
      frequencyMap[element] = 1;
  }
  if(frequencyMap[element] > maxCount){
      maxElement = element;
      maxCount = frequencyMap[element];
  }
}
return maxElement
}
