/* exported addSuffixToAll */

// take the input words and add the suffix to it
// repeat the previous step until all words have been added to
// return the modified input

function addSuffixToAll(words, suffix) {
  for (var i = 0; i < words.length; i++) {
    words[i] += suffix;
  }
  return words;
}
