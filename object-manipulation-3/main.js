console.log('Lodash is loaded:', typeof _ !== 'undefined');

var playerArray = [];
var cardDeck = [];

var possibleRanks = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  'ace',
  'jack',
  'queen',
  'king'
];
var possibleSuits = ['clubs', 'diamonds', 'hearts', 'spades'];

// Make players
for (var n = 0; n < 4; n++) {
  playerArray.push({ name: n + 1, hand: [] });
}

// Make deck
for (var i = 0; i < possibleRanks.length; i++) {
  for (var j = 0; j < possibleSuits.length; j++) {
    cardDeck.push({ rank: possibleRanks[i], suit: possibleSuits[j] });
  }
}

// Shuffle deck
var shuffledDeck = [];
var randomNum;

for (var m = 51; m >= 0; m--) {
  randomNum = Math.floor(Math.random() * m);
  shuffledDeck.push(cardDeck[randomNum]);
  cardDeck.splice(randomNum, 1);
}

console.log('Shuffled Deck: ', shuffledDeck);

var cardDealingCount = 0;
for (var ind = 0; ind < 8; ind++) {
  playerArray[cardDealingCount].hand.push(shuffledDeck[ind]);
  if (ind % 2 === 1) {
    cardDealingCount++;
  }
}

// Find highest score player
var maxIndex;

for (var t = 0; t < playerArray.length; t++) {
  playerArray[t].score = 0;
  for (var g = 0; g < 2; g++) {
    if (playerArray[t].hand[g].rank === 'ace') {
      playerArray[t].score += 11;
    } else if (
      playerArray[t].hand[g].rank === 'jack' ||
      playerArray[t].hand[g].rank === 'queen' ||
      playerArray[t].hand[g].rank === 'king'
    ) {
      playerArray[t].score += 10;
    } else {
      playerArray[t].score += playerArray[t].hand[g].rank;
    }
  }
  if (t === 0) {
    maxIndex = 0;
  } else {
    if (playerArray[maxIndex].score === playerArray[t].score) {
      maxIndex = t - 1;
    } else if (playerArray[maxIndex].score < playerArray[t].score) {
      maxIndex = t;
    }
  }
}

console.log(
  'Players and their scores: ',
  playerArray[0],
  playerArray[1],
  playerArray[2],
  playerArray[3]
);

console.log('Winning player: ', playerArray[maxIndex]);
