function countingSort(arr) {

  let freqCounter = {}
  
  
  for(let num = 0; num < 100; num++){
         freqCounter[num] = (freqCounter[num]++ || 0 ); 
      }
  
  
  for(let num of arr){
      freqCounter[num] = (freqCounter[num] || 0) + 1
  }
  
  return (Object.values(freqCounter))
  }