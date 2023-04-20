// the problem 4/19
// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.



// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill




function bonAppetit(bill, k, b) {
  // Write your code here
// first we make a value that reprsents the true bill brian has to pay. that being the variable trueBill
  let trueBill = 0;
  // we iterate through bill and check if theres anything on the bill that anna DID eat with (K). and if there was something she ate we incremeante the trueBill's total with num.
bill.forEach((num, i)=>{
  if(i !== k){
      trueBill += num;
  }
})
  // then we use math.floor, and divide the true bill by 2 (we divide by two because the problem said we should split the bill evenly) to get the results of the trueBill anna should be paying for. 
  const res = Math.floor(trueBill / 2)
  // the console log says if the bill that anna SHOULD be paying is equal to the bill brian calculated, then we print bon appetit, otherwise we use math.absolute and subtracts what anna should pay and the amount he THINKS she should pay. we use math.abs because we want the absolute value between two numbers.
console.log(res === b ? "Bon Appetit" : Math.abs(b-res))
}


