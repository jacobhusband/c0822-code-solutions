/* exported capitalizeWords */

// check if string has a length
// if not return it
// if it does make the first letter a capital
// anytime a space is encountered turn on a value that triggers an if statement on the next run
// inside the if have the letter be capitalized
// then in the if set the boolean back to false
// return the string at the end

function capitalizeWords(string) {
  if (string.length) {
    var output = string[0].toUpperCase();
    var bool = false;
    for (var i = 1; i < string.length; i++) {
      if (bool === true) {
        output += string[i].toUpperCase();
        bool = false;
      } else {
        if (string[i] === ' ') {
          bool = true;
          output += string[i];
        } else {
          output += string[i].toLowerCase();
        }
      }
    }
    return output;
  } else {
    return '';
  }
}
