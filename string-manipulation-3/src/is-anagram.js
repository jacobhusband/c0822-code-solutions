/* exported isAnagram */

// check if the string has spaces and if so remove them
// check if the strings are different lengths and if so return false
// make a duplicate version of firstString as an array
// for each letter of the secondString, search the first array for matches
// if it matches remove the letter from the firstString array
// if the firstString array is empty at the end, return true, else false

function isAnagram(str1, str2) {
  str1 = str1.split(' ').join('');
  str2 = str2.split(' ').join('');

  if (str1.length !== str2.length) {
    return false;
  }

  var testArr = str1.split('');

  for (var i = 0; i < str2.length; i++) {
    for (var j = 0; j < testArr.length; j++) {
      if (str2[i] === testArr[j]) {
        testArr.splice(j, 1);
        break;
      }
    }
  }
  if (testArr.length === 0) {
    return true;
  } else {
    return false;
  }
}
