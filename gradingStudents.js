// the problem
// Given the initial value of grade for each of Sam's N students, write code to automate the rounding process.

function gradingStudents(grades) {
  // the containter full of students grades we have to return in the end 
    let results = []
  //   we iterate thru the students grades and see if the grades at position I is less than 38, we push the grades[i] in the containter
    for (let i = 0; i< grades.length; i++){
        if(grades[i] < 38){
            results.push(grades[i])
        } else{
          //   here we check for a condtion that if grades[i] + 1 (we plus 1 because if its going to be less than 5 we add 1 to round up) modulo of 5(checking multiples of 5) example would be if the number is 34 we plus 1 to make it 35 and then check of its a multiple of 5
          // if thats the case then we return the grades[i]+1 because we want to return the rounded value
            if((grades[i]+1) % 5 === 0){
                results.push(grades[i]+1)
            } 
          //   we do the same thing here but instead of one we add 2, we add to because its a number that is less than 3, then we check to see if its a multiple fo 5 using modulo or % 5 === 0 and push that into the results container
            else if((grades[i]+2) % 5 === 0){
                results.push(grades[i]+2)
            } else{
              //   otherwise we push the grades[i] into the results container
                results.push(grades[i])
            }
        }
    }
  //   we then call the results container to see the grade
    return results
    }