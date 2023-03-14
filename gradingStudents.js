// the problem
// Given the initial value of grade for each of Sam's N students, write code to automate the rounding process.







function gradingStudents(grades) {

  let results = []
  for (let i = 0; i< grades.length; i++){
      if(grades[i] < 38){
          results.push(grades[i])
      } else{
          if((grades[i]+1) % 5 === 0){
              results.push(grades[i]+1)
          } else if((grades[i]+2) % 5 === 0){
              results.push(grades[i] +2)
          } else{
              results.push(grades[i])
          }
      }
  }
  return results
  }