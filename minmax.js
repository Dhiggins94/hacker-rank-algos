
 arr.sort();
    let max = arr.slice(1).reduce((a,b) => a + b);
    arr.reverse();
    let min = arr.slice(1).reduce((a,b) => a + b);
console.log(min + " " + max)
        // let sum = arr.reduce((a, b) =>  a + b)
  console.log(sum)