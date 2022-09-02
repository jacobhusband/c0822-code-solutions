/* exported reverseWords */

// create an empty arr for storage
// split the string at spaces
// pass through each word adding to a temp string from last letter to first letter
// pass the temp string to storage and reset it
// return the storage combined with spaces

function reverseWords(string) {
  var arr = [];
  var temp;
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    temp = '';
    for (var j = words[i].length - 1; j >= 0; j--) {
      temp += words[i][j];
    }
    arr.push(temp);
  }
  return arr.join(' ');
}
