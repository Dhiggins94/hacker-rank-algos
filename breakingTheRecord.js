// THE PROBLEM
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.


// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.


function breakingRecords(scores) {
  
    // With this we make 4 variables. one set for each max/min counter so we can return the final scores 
    // and the 2nd for the min/max number which are being counted, starting at the first index of scores.
        let minNum = scores[0]
        let minCounter = 0;
        let maxNum = scores[0]
        let maxCounter = 0
        // we  use forEach on scores to iterate/search through each element in the array once. we can also use map but thats only if we're fine with it producing a new array altogether with our returned values 
    scores.forEach(int =>{
        // if the lowest number is greater than the number in question, the min counter goes up
        // and the lowest number becomes that number in question
          if(minNum > int){
            minCounter++
            minNum = int
        }
        // if the highest number is greater than the number in question, the max counter goes up
        // and the highest number becomes that number in question
        if(maxNum< int){
            maxCounter++
            maxNum = int
        }
    })   
    // returns an array of the max counter and min counter
    return [maxCounter, minCounter]   
}
