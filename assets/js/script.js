var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var length = "";
var lower;
var upper;
var number;
var special;

function generatePassword() {
  var length = (prompt("Password Length? 8 - 128 characters"));

  while(length <= 7 || length >= 129) {
    alert("Must be between 8 and 128 characters.");
    var length = (prompt("Password Length? 8 - 128 characters"));
    }

  var lower = confirm("Click ok for Lowercase Characters");
  var upper = confirm("Click ok for Uppercase Characters");
  var special = confirm("Click ok for Special Characters");
  var number = confirm("Click ok for Numbers");

    while(lower === false && upper === false && special === false && number === false) {
      alert("You must choose at least one");
      var lower = confirm("Click ok for Lowercase Characters");
      var upper = confirm("Click ok for Uppercase Characters");
      var special = confirm("Click ok for Special Characters");
      var number = confirm("Click ok for Numbers");
      }

    var passwordGenerate = []
  
    if (lower) {
      passwordGenerate = passwordGenerate.concat(lowerChar)
    }

    if (upper) {
      passwordGenerate = passwordGenerate.concat(upperChar)
    }

    if (special) {
      passwordGenerate = passwordGenerate.concat(specialChar)
    }

    if (number) {
      passwordGenerate = passwordGenerate.concat(numberChar)
    }

    var randomizePassword = ""

    for (var i = 0; i < length; i++) {
      randomizePassword = randomizePassword + passwordGenerate[Math.floor(Math.random() * passwordGenerate.length)];
    }
    return randomizePassword;

}




function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();

  passwordText.value = password;
}