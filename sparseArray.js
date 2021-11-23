function matchingStrings(strings, queries) {
  // Write your code here
let results = []
let a = strings.map((string) => {
  return (string)
})

let b = queries.map((query) => {
 results.push((a.filter(x => x === query ).length))
})
return results
}