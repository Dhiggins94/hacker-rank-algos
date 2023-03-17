
// THE PROBLEM (3/17/23)
// Given two strings, determine if they share a common substring. A substring may be as small as one character.




function twoStrings(s1, s2) {
    // Write your code here
    // first we make a container to hold our values aka hashMap
let freqCounter = {};
// we loop through the first s1 and make a variable for the indices of each value of the array aka "sLetter".
// then we set the make freqcounter[sletter] equal true becasue its an another method of setting that variable.
for(let i = 0; i < s1.length; i++){
    let sLetter = s1[i]
    freqCounter[sLetter] = true
}
// next we do the same thing with s2, and we check to see if freqCounter[s2Letter] exist as in "if anything in s2 match up with the established freqcounter[sLetter] above. and if it does we return YES otherwise return no"
for(let i = 0; i < s2.length; i++){
    let s2Letter = s2[i]
   if(freqCounter[s2Letter]){
       return 'YES'
   }
   
}
return 'NO';
}