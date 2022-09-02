/* exported numVowels */

// create a count and initialize it to 0
// make string input lower case
// go through each letter of string input
// compare them to all 5 of the vowels in lower case
// once a vowel matches increment count
// break out of the loop to not continue checking for vowels
// return count at end

function numVowels(str) {
  if (str.length) {
    var vow = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      for (var j = 0; j < vow.length; j++) {
        if (str[i] === vow[j]) {
          count++;
          break;
        }
      }
    }
    return count;
  } else {
    return 0;
  }
}
