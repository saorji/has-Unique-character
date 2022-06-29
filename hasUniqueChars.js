// Given a word, return true if that word contains only unique characters. Return false otherwise.

let word = 'wednesday'

function hasUnique(checking){
  for(let i=0; i<=checking.length; i++){
      for(let j = i+1; j<=checking.length; j++){
          if(checking[j] === checking[i]){
            return false
      }
    }
  }
  return true
}
console.log(hasUnique(word))

/*
const hasUniqueChars = (word) => {
  let hasUniqueChar = true;
  const array = [];
  for (let i = 0; i < word.length; i++) {
    if (!array.includes(word[i])) {
      array.push(word[i])
    } else {
      hasUniqueChar = false
    }
  }
  return hasUniqueChar;
}
*/

// function hasUniqueChars(variable) {
//     let uniqueChars = new Set([])
//     for (let i = 0; i < variable.length; i++) {
//       uniqueChars.add(variable[i])
//     }
//     return uniqueChars.size === variable.length
//   }
//   console.log(hasUniqueChars(monday))

/*
function findLuckyNumbers(n){
  let possibleNums = [1,2,3,4,5,6,7,8,9,10]
  let luckyNums = []
  //create a for-loop to iterate over possibleNums array and move items to luckyNums
  for(let i = 0;i < n;i++){
    let randomIndex = Math.floor(Math.random() * possibleNums.length)
    luckyNums.push(possibleNums[randomIndex])
    possibleNums.splice(randomIndex,1)
  }
  return luckyNums
}

console.log(findLuckyNumbers(8))
*/
