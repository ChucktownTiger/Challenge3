// Assignment code here

randomCriteria = {
  lowercase: getLowercase,
  uppercase: getUppercase,
  numeric: getNumeric,
  symbol: getSymbol,
}

passCriteria = ""

function getLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}

function getUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
}

function getNumeric() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
}

function getSymbol() {
  const symbolslist = '!@#$%^&*(){}[]=<>/,.'
  return symbolslist[Math.floor(Math.random() * symbolslist.length)]
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = prompt("Select password length between 8 and 128 characters!")
    if (passLength < 8 || passLength > 128) {
      window.alert("Password must be between 8 and 128 characters")
      return ""
    }
    if (passLength >= 8 && passLength <= 128) { 
        var upperCheck = confirm("Do you want to have Uppercase Letters in your password")
      
        var lowerCheck = confirm("Do you want to have Lowercase Letters in your password")
      
        var symbolCheck = confirm("Do you want to have symbols in your password?")
      
        var numericCheck = confirm("Do you want to have numbers in your password?")
        
        console.log(upperCheck,lowerCheck, symbolCheck,numericCheck)
      
    if (upperCheck === false && lowerCheck === false && symbolCheck === false && numericCheck === false){
        alert("Please select at least one password criteria")
        return ""
        }
    if (upperCheck === true || lowerCheck === true || symbolCheck === true || numericCheck === true){
      function passCriteria() {
        if (upperCheck = true){
          passCriteria = getUppercase
        }
        if (lowerCheck = true){
        passCriteria = passCriteria + getLowercase
        }
        if (symbolCheck = true){
          passCriteria = passCriteria + getSymbol
        }
        if (numericCheck = true) {
          passCriteria = passCriteria + getNumeric      
        }
      //START NEW CODE HERE TODD NOTE
        else {
          var generatePassword = function(){
            console.log(passLength)
          
            for (var i=0; i < passLength; i++){
              var randomNumber = Math.floor(math.random()*passLength);
              password += passCriteria.substring(randomNumber,randomNumber + 1);
            }
            
          }  
        }          
      }
    }
  }
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
