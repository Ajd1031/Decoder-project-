// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
let alphabetLookUp = "abcdefghijklmnopqrstuvwxyz";
let numbersLookUp = [11, 21, 31, 41, 51, 21, 22, 32, 42, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55];
// use an obj with key value pairs (essentially combining 9 & 8)
  function polybius(input, encode = true) {
    // defined here to ensure there are no scope issues
      let lowerCase;
      let inputArray;  
      let updatedInputArray; 
      let inputNumberArray;
      let codedMessage;
      let pairs;
      let inputLetterArray;
      let stringify;
      let finalInputArray = [];
      if (encode === true) {
        //making everything lowercase
        lowerCase = input.toLowerCase();
         //splitting the "input" string into an array with sub-strings
        inputArray = lowerCase.split("")
        inputNumberArray = inputArray.map((letter) => {
          for (let i = 0; i < alphabetLookUp.length; i ++) {
            if (alphabetLookUp[i] === letter) {
              return numbersLookUp[i];
              //Making sure that spaces and periods are left in the array
            } else if (letter == " ") {
              return " ";
            } else if (letter === ".") {
            return ".";
            }
          }
        })
        return codedMessage = inputNumberArray.join("")
      } else if (encode === false) {
        if (!input.length % 2) {
          return false
        }
        //put the iput into an array while maintaing spaces
        inputArray = input.split(' ').join('# #').split('#');
        let number = inputArray[0]
        if (inputArray.length === 1) {
          pairs = number.match(/.{1,2}/g)
          inputLetterArray = pairs.map((pair) => {
            for (let i = 0; i < numbersLookUp.length; i ++) {
              if (pair === "42") {
                return "i/j"
              } else if (pair == numbersLookUp[i].toString()) {
                return alphabetLookUp[i]
              }
            }
          })
          return inputLetterArray.join("")
        } else {
          
          //loop through inputArray. determine if its a space or array. if space return space if array break that array up in sets of two. after that match sets of to to the numbers in the numbersLookUp to make them into letters. then join the entire array together with .join("")
          updatedInputArray = inputArray.map((arrayOrSpace) => {
            if (arrayOrSpace === " ") {
              return " ";
            } else {
              stringify = arrayOrSpace.toString()
               return stringify.match(/.{1,2}/g)
            }
          })
          for (let j = 0; j < updatedInputArray.length; j ++) {
            if (updatedInputArray[j] === " ") {
              finalInputArray.push(" ")
            } else {
              for (let pair of updatedInputArray[j]) {
                if (pair === "42") {
                  finalInputArray.push("i/j");
                } else if (pair.length > 2 || pair.length < 2) {
                  return false
                } else {
                  for (let i = 0; i < numbersLookUp.length; i ++) {
                    if (pair === numbersLookUp[i].toString()) {
                      finalInputArray.push(alphabetLookUp[i]);
                    }
                  }
                }
              }
            }
          }
        }
        return finalInputArray.join("")
      }

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
