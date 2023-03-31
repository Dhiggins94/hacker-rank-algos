// the problem 3/31
// Complete the dynamicArray function below.

// dynamicArray has the following parameters:
// - int n: the number of empty arrays to initialize in arr
// - string queries[q]: query strings that contain 3 space-separated integers

// Returns

// int[]: the results of each type 2 query in the order they are presented



function dynamicArray(n, queries) {
  // Write your code here
let arr = [];
let lastAnswer = 0;
let results = []


for(let i = 0; i< n; i++){
  arr[i] = []
}

let getIndex = (x) =>{
  return (x ^ lastAnswer) % n;
}

let queryOne = (x,y) =>{
  let i = getIndex(x);
  arr[i].push(y)
}

const queryTwo = (x,y) =>{
  let i = getIndex(x);
  let l = arr[i].length
  let z = (y % l);
  lastAnswer = arr[i][z];
  results.push(lastAnswer);
}

for (let q of queries){
  if(q[0] === 1){
      queryOne(q[1], q[2]);
  } else if (q[0] === 2){
      queryTwo(q[1],q[2])
  }
}
return results;
}
