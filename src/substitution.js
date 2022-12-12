// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const substitutionModule = (function () {
  let alphabetLookUp = "abcdefghijklmnopqrstuvwxyz";
  let inputNumbersArray;
  let codedLetterArray;
  let currentCharacter;
  function substitution(input, alphabet, encode = true) {
    let lowerCase = input.toLowerCase();
    let inputArray = lowerCase.split("")
    if (!alphabet) {
      return false;
    }
    if(alphabet.length!= 26) {
      return false
    } else {
    //store the previous character in currentCharacter then compare the next character to the one stored in currentCharacter
    for (let i = 0; i < alphabet.length; i ++) {
     for (let j = i + 1; j < alphabet.length; j ++) {
      if (alphabet[i] == alphabet[j]) {
        return false;
      }
     }
   }
    }
   if (encode === true) {
    //should loop through inputArray and compare it to the alphabetLookUp and assign numbers to the input based on index numbers of the lookup. next .map the array that now has numbers and use those numbers to pull the characters from the alphabet with the same index numbers. Finally return the array after it has been joined together with .join("")
    inputNumbersArray = inputArray.map((letter) => {
      for (let i = 0; i < alphabetLookUp.length; i ++) {
        if (alphabetLookUp[i] === letter) {
          return i;
          //Making sure that spaces and periods are left in the array
        } else if (letter == " ") {
          return " ";
        } 
      }
    })
    codedLetterArray = inputNumbersArray.map((indexNumber) => {
      if (indexNumber === " ") {
        return " ";
      } else {
        return alphabet[Number(indexNumber)];
      }
    })
    return codedLetterArray.join("")
   } else if (encode === false) {
    inputNumbersArray = inputArray.map((letter) => {
      for (let i = 0; i < alphabet.length; i ++) {
        if (alphabet[i] === letter) {
          return i;
          //Making sure that spaces and periods are left in the array
        } else if (letter == " ") {
          return " ";
        } 
      }
    })
    codedLetterArray = inputNumbersArray.map((indexNumber) => {
      if (indexNumber === " ") {
        return " ";
      } else {
        return alphabetLookUp[Number(indexNumber)];
      }
    })
    return codedLetterArray.join("")
   }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
