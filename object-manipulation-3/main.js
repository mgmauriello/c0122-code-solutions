console.log('Lodash is loaded:', typeof _ !== 'undefined');
/*
1-create collection of 4 objs (newObj literal) to rep players
each player has unique name and hand
-new arrays with obj for players, new arr for cards, new empty arr for deck
2-each card has rank and suit
-count king, queen, jack as 10 and ace 11
-search through cards length through new arrs of the different suits
search each rank at the index
-push the suits to the deck
3-shuffle deck (lodash shuffle?)
4-each player gets 2 cards -no player receive same card
-dealing the hand - push the shuffled card into the empty arr of the hand for each player
-in the function for loop with i < 2
-find the player.score by += to the shuffled deck's value (card[i])
shift() - removes first element from an array and returns that removed element.
5-find player with highest score
_.pull lodash remove all the given values from a given array.
*/
var players = [
  { name: 'Frodo', hand: [], score: 0 },
  { name: 'Samwise', hand: [], score: 0 },
  { name: 'Merry', hand: [], score: 0 },
  { name: 'Pippin', hand: [], score: 0 }
];
// var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var deck = [];

// function createDeck(value) {
//   for (var i = 0; i < cards.length; i++) {
//     var spade = { rank: cards[i], suit: 'spade' };
//     var club = { rank: cards[i], suit: 'club' };
//     var heart = { rank: cards[i], suit: 'heart' };
//     var diamond = { rank: cards[i], suit: 'diamond' };
//   }
//   deck.push(spade, club, heart, diamond);
//   return deck;
// }
// var shuffledDeck = _.shuffle(deck);

function dealHand(player) {
  for (var j = 0; j < players.length; j++) {
    players[j].hand.push(deck[0]);
    deck.shift();
    players[j].hand.push(deck[0]);
    deck.shift();
  }
}
dealHand(players[0]);
dealHand(players[1]);
dealHand(players[2]);
dealHand(players[3]);

// var playerScores = [
//   players[0].hand[0].rank + players[0].hand[1].rank,
//   players[1].hand[0].rank + players[1].hand[1].rank,
//   players[2].hand[0].rank + players[2].hand[1].rank,
//   players[3].hand[0].rank + players[3].hand[1].rank
// ];

// for (var k = 0; k < playerScores.length; k++) {
//   if (playerScores[k] === Math.max(...playerScores)) {
//     console.log('Player ' + (k + 1) + ' wins with a score of : ' + scoreArray[k]);
//   }
// }
