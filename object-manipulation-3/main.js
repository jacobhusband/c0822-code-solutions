console.log('Lodash is loaded:', typeof _ !== 'undefined');

var playerArray = [];
var cardDeck = [];

for (var n = 0; n < 4; n++) {
  playerArray.push({ name: n + 1, hand: [] });
}

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
