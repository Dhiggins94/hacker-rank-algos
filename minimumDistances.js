// Given a, find the minimum distance between any pair of equal elements in the array. If no such value exists, return -1.


function minimumDistances(a) {
  // Write your code here
  // we set min to a.length to utlize it in our for loop
  let min = a.length;
  // we make a nested for loop for both positions I goes through it once and J goes through I + 1 so its moving up in the iteration from I (the intial index)
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      // we check to see if a[i] and a[j] is the same and if its the same we also check if the difference of J and I is less than the min(the length of the array) and if it is we make the Min the result of J - I
      if (a[i] == a[j]) {
        if (j - i < min) {
          min = j - i;
        }
      }
    }
  }
  // lastly we check if min is the same as its length and if it is we return -1 followed by returning the MIN variable
  if (min == a.length) {
    return -1;
  }
  return min;
}
function minimumDistances(a) {
  // Write your code here
  // we set min to a.length to utlize it in our for loop
  let min = a.length;
  // we make a nested for loop for both positions I goes through it once and J goes through I + 1 so its moving up in the iteration from I (the intial index)
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      // we check to see if a[i] and a[j] is the same and if its the same we also check if the difference of J and I is less than the min(the length of the array) and if it is we make the Min the result of J - I
      if (a[i] == a[j]) {
        if (j - i < min) {
          min = j - i;
        }
      }
    }
  }
  // lastly we check if min is the same as its length and if it is we return -1 followed by returning the MIN variable
  if (min == a.length) {
    return -1;
  }
  return min;
}
