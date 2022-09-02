/* exported titleCase */

// make an empty arr for storage
// make string lowercase
// split up the string at spaces
// always capitalize the first letter of the first word
// make an array of conjunctions, articles, and prepositions to skip over in capitalizing
// compare the array of keywords to the split-at-spaces string starting at index 1
// if they are not any of the keywords, make a new word with a capital first letter
// if a dash is found in the word, make the next letter a capital
// if a colon is found at the end of a word, make the first letter of the next word a capital

function titleCase(title) {
  var keywords = [
    'a',
    'an',
    'the',
    'and',
    'or',
    'nor',
    'but',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to'
  ];

  var storage = [];

  var words = title.toLowerCase().split(' ');

  var capitalize, tempStr, colonFound, dashFound;

  for (var i = 0; i < words.length; i++) {
    capitalize = true;
    dashFound = false;

    for (var j = 0; j < keywords.length; j++) {
      if (words[i] === keywords[j]) {
        capitalize = false;
        break;
      }
    }
    if (capitalize || i === 0 || colonFound) {
      if (colonFound) {
        colonFound = false;
      }

      tempStr = words[i][0].toUpperCase();

      if (words[i].length > 1) {
        for (var k = 1; k < words[i].length; k++) {
          if (dashFound === true) {
            tempStr += words[i][k].toUpperCase();
            dashFound = false;
          } else {
            tempStr += words[i][k].toLowerCase();
          }
          if (words[i][k] === ':') {
            colonFound = true;
          }
          if (words[i][k] === '-') {
            dashFound = true;
          }
        }
      }
    } else {
      tempStr = words[i];
    }
    if (tempStr === 'Javascript') {
      tempStr = 'JavaScript';
    }
    if (tempStr === 'Javascript:') {
      tempStr = 'JavaScript:';
    }
    if (tempStr === 'Api') {
      tempStr = 'API';
    }
    storage.push(tempStr);
  }

  return storage.join(' ');
}
