// the problem 3/24


// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.



function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // S AND T are a group of numbers on the x axis which sybmoblizes the house and if anything falls on top of or inbetween those numbers representing them it would be consider to be "on the house". A AND B are the apple(left of the house) and oranges tree(right of the house)
    // Write your code here
  // we set the counters to keep track of our apples and oranges
let appleCounter = 0
let orangeCounter = 0
// we do a for of loop to iterate through the apples array and we check to see if the apple is equal or greater distance between s and if its less than or equal to t and if it is we know that theres an apple and we increment it by one.
for(let apple of apples){
    if(a + apple >= s && a + apple <= t){
        appleCounter += 1
    }
}
  // we do a for of loop to iterate through the orange array and we check to see if the orange is equal or greater distance between s and if its less than or equal to t and if it is we know that theres an orange and we increment it by one.
for (let orange of oranges){
    if(b + orange <= t && b + orange >= s){
        orangeCounter += 1
    }
}
  // lastly instead if returning it were asked to print it to the console
console.log(appleCounter)
console.log(orangeCounter)
}
