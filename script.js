// Assignment code here

var getLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var getUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var getNumeric = ["1","2","3","4","5","6","7","8","9","0"]

var getSymbol = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."]

var passCriteria = []

var generateBtn = document.querySelector("#generate");


function generatePassword () {

    var userSelection = []

    //Password length prompts
    var passLength = prompt("Select password length between 8 and 128 characters!")
          if (passLength < 8 || passLength > 128) {
              window.alert("Password must be between 8 and 128 characters")
              return ""
          }
    //password criteria prompts
    var upperCheck = confirm("Do you want to have Uppercase Letters in your password")
          if (upperCheck) {
            userSelection = userSelection.concat(getUppercase)
            console.log(userSelection)
          }
      
    var lowerCheck = confirm("Do you want to have Lowercase Letters in your password")
          if (lowerCheck) {
            userSelection = userSelection.concat(getLowercase)
            console.log(userSelection)
          }
      
    var symbolCheck = confirm("Do you want to have symbols in your password?")
          if (symbolCheck) {
            userSelection = userSelection.concat(getSymbol)
            console.log(userSelection)
          }
      
    var numericCheck = confirm("Do you want to have numbers in your password?")
          if (numericCheck) {
            userSelection = userSelection.concat(getNumeric)
            console.log(userSelection)
          }
        
        // console.log(upperCheck,lowerCheck, symbolCheck,numericCheck)
        // console.log(passLength)
        // console.log(userSelection)

          //make sure criteria are selected
          if (upperCheck === false && lowerCheck === false && symbolCheck === false && numericCheck === false){
              alert("Please select at least one password criteria")
          }

    for (let i = 0; i < passLength; i++) {
          randomArray = (userSelection[Math.floor(Math.random() * userSelection.length)])
          passCriteria.push(randomArray)
        } 
        console.log(passCriteria)
        return passCriteria.join("")
      }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);