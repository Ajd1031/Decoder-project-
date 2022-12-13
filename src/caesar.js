// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//const { start } = require("live-server");

const caesarModule = (function () {
  //alphabet string that can be used to assign letters index numbers
let lookUp = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    // reversing the shift if the goal is to decode the input
    if (encode === false) {
      shift = shift * -1
    }
    //making sure to return false if the shift value is not acceptable
    if (shift === 0 || shift > 25 || shift < -25) {
      return false
    }
    //making everything lowercase
    let lowerCase = input.toLowerCase();
    //splitting the "input" string into an array with sub-strings
    let inputArray = lowerCase.split("")
    // converting the sub strings into numbers based on where they are in the "look up" index
    let inputNumbersArray = inputArray.map((letter) => {
      for (let i = 0; i < lookUp.length; i ++) {
        if (lookUp[i] === letter) {
          return i;
          //Making sure that spaces and periods are left in the array
        } else if (letter == " ") {
          return " ";
        } else if (letter === ".") {
          return ".";
        }
      }
    })
    //adding the "shift" after the "input" has been converted into numbers
    let codedInputNumbers = inputNumbersArray.map((inputNumber) => {
      // making sure to keep the spaces and periods in the array
      if (inputNumber === " ") {
        return " ";
      } else if (inputNumber === ".") {
        return ".";
      } else {
        return inputNumber + shift;
      }
    })
    // make sure that the numbers in "codedInputNumbers" are between 0 and 25 inclusive
    let adjustedCodedNumbers = codedInputNumbers.map((codedNumber) => {
      //ensuring the numbers are acceptable by making them wrap around once its past 0 or 25
      if (codedNumber > 25) {
        return codedNumber - 26
      } else if (codedNumber < 0) {
        return codedNumber + 26
        // makes sure that acceptable numbers and spaces and periods are returned as they were
      } else {
        return codedNumber
      }
    })
    //converting the numbers back into letters based on index numbers of "lookup"
    let codedMessage = adjustedCodedNumbers.map((number) => {
      for (let i = 0; i < lookUp.length; i ++) {
        if (i === number) {
          return lookUp[i];
          //Making sure that spaces and periods are left in the array
        } else if (number == " ") {
          return " ";
        } else if (number === ".") {
          return ".";
        }
      }
    })
    console.log('********************************************************')
    console.log(codedMessage.join(""))
    console.log('********************************************************')
    return codedMessage.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
