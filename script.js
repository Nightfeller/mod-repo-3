// Assignment code here

// Thanks to Scaler for all of the code here.


 function upperCaseF() {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperCaseArr = upperCase.split("");
   var returnUpper = upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)];
   return returnUpper;
 }

 function lowerCaseF() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var lowerCaseArr = lowerCase.split("");
  var returnLower = lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)];
  return returnLower;
 }

 function numbersF() {
  let numbers = "0123456789";
  var numbersArr = numbers.split("");
  var returnNumb = numbersArr[Math.floor(Math.random() * numbersArr.length)];
  return returnNumb;
 }

 function symbolsF() {
  let symbols = "!@#$%^&*()_+~\`|}{[]:;?><,./-=";
  var symbolsArr = symbols.split("");
  var returnSymb = symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
  return returnSymb;
 }

 
function startPrompt() {
  let length = prompt("Enter a number between 8 and 128.", "10");
  var pass = "";
  var amount = 0;
  if (length >= 8 && length <= 128) {
    let upperLetters = confirm("Put uppercase letters in password?");
    let lowerLetters = confirm("Put lowercase letters in password?");
    let numerals = confirm("Put numbers in password?");
    let symbolics = confirm("Put symbols in password?");

    //There are 15 combinations of password here:
      // ULNS, ULN, ULS, LNS, UNS, UL, UN, US, LN, LS, NS, U, L, N, and S.

    if (upperLetters && lowerLetters && numerals && symbolics) {
      for (var a = 0; a < length; a++) {
        let ArrFunctions = [upperCaseF(), lowerCaseF(), numbersF(), symbolsF()];
        var randomFunction = Math.floor(Math.random() * 4);
        console.log(randomFunction);
        pass = pass + ArrFunctions[randomFunction];
        console.log(pass);
      }  
    } else if (upperLetters && numerals && symbolics) {
      for (var a = 0; a < length; a++) {
        let ArrFunctions = [upperCaseF(), numbersF(), symbolsF()];
        var randomFunction = Math.floor(Math.random() * 3);
        console.log(randomFunction);
        pass = pass + ArrFunctions[randomFunction];
        console.log(pass);
      }
    } else if (upperLetters && lowerLetters && symbolics) {
      for (var a = 0; a < length; a++) {
        let ArrFunctions = [upperCaseF(), lowerCaseF(), symbolsF()];
        var randomFunction = Math.floor(Math.random() * 3);
        console.log(randomFunction);
        pass = pass + ArrFunctions[randomFunction];
        console.log(pass);
      }
    } else if (upperLetters && lowerLetters && numerals) {
      for (var a = 0; a < length; a++) {
        let ArrFunctions = [upperCaseF(), lowerCaseF(), numbersF()];
        var randomFunction = Math.floor(Math.random() * 3);
        console.log(randomFunction);
        pass = pass + ArrFunctions[randomFunction];
        console.log(pass);
      }
    } else if (lowerLetters && numerals && symbolics) {
      for (var a = 0; a < length; a++) {
        let ArrFunctions = [lowerCaseF(), numbersF(), symbolsF()];
        var randomFunction = Math.floor(Math.random() * 3);
        console.log(randomFunction);
        pass = pass + ArrFunctions[randomFunction];
        console.log(pass);
      }
    } else if (upperLetters && lowerLetters) {
      for (var a = 0; a < length; a++) {
        let ArrFunctions = [upperCaseF(), lowerCaseF()];
        var randomFunction = Math.floor(Math.random() * 2);
        console.log(randomFunction);
        pass = pass + ArrFunctions[randomFunction];
        console.log(pass);
      }  
    } else if (upperLetters && numerals) {
      for (var a = 0; a < length; a++) {
        let ArrFunctions = [upperCaseF(), numbersF()];
        var randomFunction = Math.floor(Math.random() * 2);
        console.log(randomFunction);
        pass = pass + ArrFunctions[randomFunction];
        console.log(pass);
      }  
    } else if (upperLetters && symbolics) {
      for (var a = 0; a < length; a++) {
        let ArrFunctions = [upperCaseF(), symbolsF()];
        var randomFunction = Math.floor(Math.random() * 2);
        console.log(randomFunction);
        pass = pass + ArrFunctions[randomFunction];
        console.log(pass);
      }  
    } else if (lowerLetters && numerals) {
      for (var a = 0; a < length; a++) {
        let ArrFunctions = [lowerCaseF(), numbersF()];
        var randomFunction = Math.floor(Math.random() * 2);
        console.log(randomFunction);
        pass = pass + ArrFunctions[randomFunction];
        console.log(pass);
      }  
    } else if (lowerLetters && symbolics) {
      for (var a = 0; a < length; a++) {
        let ArrFunctions = [lowerCaseF(), symbolsF()];
        var randomFunction = Math.floor(Math.random() * 2);
        console.log(randomFunction);
        pass = pass + ArrFunctions[randomFunction];
        console.log(pass);
      }  
    } else if (numerals && symbolics) {
      for (var a = 0; a < length; a++) {
        let ArrFunctions = [numbersF(), symbolsF()];
        var randomFunction = Math.floor(Math.random() * 2);
        console.log(randomFunction);
        pass = pass + ArrFunctions[randomFunction];
        console.log(pass);
      }  
    } else if (upperLetters) {
      for (var a = 0; a < length; a++) {
        pass = pass + upperCaseF();
        console.log(pass);
      }  
    } else if (lowerLetters) {
      for (var a = 0; a < length; a++) {
        pass = pass + lowerCaseF();
        console.log(pass);
      }  
    } else if (numerals) {
      for (var a = 0; a < length; a++) {
        pass = pass + numbersF();
        console.log(pass);
      }  
    } else if (symbolics) {
      for (var a = 0; a < length; a++) {
        pass = pass + symbolsF();
        console.log(pass);
      }  
    } else if (!upperLetters && !lowerLetters && !numerals && !symbolics) {
      //Used if none of the option were selected.

      alert("Select at least one option and try again.");
    } else {
      //Used if an error occured in the programming.
      pass = "Error! Failed to load resources! Please try again."
    }
    var generatedPass = document.querySelector("#password");
      generatedPass.value = pass;
  } else if (length < 8) {
    if (length > 0){
    alert("The length is too short. Please try again.");
    startPrompt();
    } else {
      alert("Length is at or below zero or has been cancelled.")
    }
  } else if (length > 128) {
    alert("The length is too long. Please try again.");
    startPrompt();
    } else {
    //Used in case a letter or symbol was type into the prompt.
    alert("Length is not validated as a number. Please try again.")
    startPrompt();
  }
}

//Nothing here is needed

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;
//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);