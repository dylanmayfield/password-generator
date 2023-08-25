// Assignment code here

// 1. Prompt user for password criteria
//    -password length 8 < 128
//    -lowercase, uppercase,numbers, special characters
// 2. validate the input
// 3. generate password based on criteria
// 4. display password to the page

// create generatePassword function 
function generatePassword() {
  console.log("button clicked")

// variables for password characters
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!#$&*():;{}<>,./"
var password = "";
var possibleCharacters = "";

// user length variable and propmt message 
var userLength = prompt ("Select a number of characters between 8 and 128");


// verifying parameters meet specifications of criteria that will be input by user 
if (userLength < 8 || userLength > 128) {
  alert("Your character number does not meet criteria. Please select a number between 8 and 128");

} else {
var userUpper = confirm ("Confirm OK, to use upper case letters in your password.");
var userLower = confirm ("Confirm OK,to use lower case letters in your password.");
var userNumbers = confirm ("Confirm OK,to use numbers in your password.");
var userCharacters = confirm ("Confirm OK,to use special characters in your password.");

// 2. validate the input
  if (userUpper) {
  possibleCharacters += upperCaseLetters;
  console.log(possibleCharacters)
} if (userLower) {
  possibleCharacters += lowerCaseLetters;
} if (userNumbers) {
  possibleCharacters += numbers;
} if (userCharacters) {
  possibleCharacters += specialCharacters;
} 
}
console.log(possibleCharacters)



// 3. generate password based on criteria
for (let i = 0; i < userLength; i++) {
  password += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
}

// Error message in password box if length parameters are not met 
if (userLength < 8 || userLength > 128) 
return ("Length does not meet criteria.")


  // Display password to the page
  return password;
}
// Get references to the #generate element


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(generatePassword)