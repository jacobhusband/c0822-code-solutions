console.log('Lodash is loaded:', typeof _ !== 'undefined');

var playerArray = [];
var cardDeck = [];

// Make players
for (var n = 0; n < 4; n++) {
  playerArray.push({ name: n + 1, hand: [] });
}

// Make deck
for (var i = 1; i < 10; i++) {
  for (var j = 0; j < 4; j++) {
    if (j === 0) {
      cardDeck.push({ rank: i + 1, suit: 'clubs' });
    } else if (j === 1) {
      cardDeck.push({ rank: i + 1, suit: 'diamonds' });
    } else if (j === 2) {
      cardDeck.push({ rank: i + 1, suit: 'hearts' });
    } else if (j === 3) {
      cardDeck.push({ rank: i + 1, suit: 'spades' });
    }
  }
}

var rank;

for (var k = 0; k < 4; k++) {
  if (k === 0) {
    rank = 'ace';
  } else if (k === 1) {
    rank = 'jack';
  } else if (k === 2) {
    rank = 'queen';
  } else if (k === 3) {
    rank = 'king';
  }
  for (var l = 0; l < 4; l++) {
    if (l === 0) {
      cardDeck.push({ rank, suit: 'clubs' });
    } else if (l === 1) {
      cardDeck.push({ rank, suit: 'diamonds' });
    } else if (l === 2) {
      cardDeck.push({ rank, suit: 'hearts' });
    } else if (l === 3) {
      cardDeck.push({ rank, suit: 'spades' });
    }
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

// Deal cards
playerArray[0].hand.push(shuffledDeck[0]);
playerArray[0].hand.push(shuffledDeck[1]);
playerArray[1].hand.push(shuffledDeck[2]);
playerArray[1].hand.push(shuffledDeck[3]);
playerArray[2].hand.push(shuffledDeck[4]);
playerArray[2].hand.push(shuffledDeck[5]);
playerArray[3].hand.push(shuffledDeck[6]);
playerArray[3].hand.push(shuffledDeck[7]);

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
