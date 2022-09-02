/* exported isVowel */

// make an array containing all the vowels in lower case
// make the input lower case
// compare the input letter to each of the vowels
// if they are strictly equal return true else false

function isVowel(letter) {
  var arr = ['a', 'e', 'i', 'o', 'u'];
  letter = letter.toLowerCase();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === letter) {
      return true;
    }
  }
  return false;
}
