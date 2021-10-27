
function pageCount(n, p) {
  // Write your code here
// console.log(p) int p: the page number to turn to

// console.log(n) int n: the number of pages in the book

let pageTurn = Math.floor(n/2)
let numOfPages = Math.floor(p/2)

let newBook = pageTurn - numOfPages
let bookMin = Math.min(numOfPages, pageTurn)
return bookMin
}
