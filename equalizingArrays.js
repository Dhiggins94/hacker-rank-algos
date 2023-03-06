function equalizeArray(arr) {
  // Write your code here

let storage = {};
  let freqCounter = 1;
  for (let num of arr) {
      if(storage[num]){
          storage[num] += 1
      }else{
          storage[num] = 1
      }
  }
  // for of loop is used to populate the storage with values from the array so if it exist it either becomes 1 or we add 1
  for (let num in storage) {
      if (storage[num] > freqCounter) {
          freqCounter = storage[num];
      }
    
// for in will let us iterate the values that storage
// we compare numbers in the array with the freqcounter, and if the value of the key objects in storgae is greater than the inital freqcounter, then we make it the new freqcounter
  }
  return arr.length - freqCounter;
  // subtract the length of the array with the numbers in the freqcounter.
}
