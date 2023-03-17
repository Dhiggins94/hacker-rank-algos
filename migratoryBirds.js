// The problem
// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

function migratoryBirds(arr) {
  // start by sorting the array
  let sortBirds = arr.sort();
  // next, create an empty object to store the frequency of each element in the array.
  const frequencyMap = {};
  // next we make one variable for the starting at the first element of the array "maxElement" and another that represents the counting
  let maxElement = sortBirds[0];
  let maxCount = 1;
  // then we loop through the array and store the current element "sortBirds[i]"" as a variable "element" to track its position
  for (let i = 0; i < sortBirds.length; i++) {
    const element = sortBirds[i];
    // we check if the element is already a property of the frequency object and if it is to increase the element by one and if its not to make the element equal one instead.
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
    // we check if the frequencymap element is greater than maxCount. IF it is make the "maxElement" become "element" AND make the maxCount become "frequencyMap[element"
    if (frequencyMap[element] > maxCount) {
      maxElement = element;
      maxCount = frequencyMap[element];
    }
  }
  // lastly we return the maxElement to get the number that was repeated most
  return maxElement;
}
