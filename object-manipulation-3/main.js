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
var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var deck = [];

function createDeck(value) {
  var card = {};

  for (var s = 0; s < suit.length; s++) {
    for (var r = 0; r < rank.length; r++) {
      card.suit = suit[s];
      card.rank = rank[r];
      deck.push(card);
      card = {};
    }
  }
}
createDeck();

var shuffledDeck = _.shuffle(deck);

function dealHand(player) {
  for (var i = 0; i < 2; i++) {
    player.hand.push(shuffledDeck[i]);
    shuffledDeck.splice(0, 1);
  }
}

function dealToPlayers(deal) {
  for (var i = 0; i < players.length; i++) {
    dealHand(players[i]);
  }
  return players;
}

function findScores(toPlayers) {
  dealToPlayers(players);
  var totalPoints = 0;
  for (var p = 0; p < players.length; p++) {
    for (var c = 0; c < players[p].hand.length; c++) {
      if (players[p].hand[c].rank === 'Ace') {
        totalPoints += 11;
      } else if (players[p].hand[c].rank === 'Queen' || players[p].hand[c].rank === 'Jack' || players[p].hand[c].rank === 'King') {
        totalPoints += 10;
      } else {
        totalPoints += players[p].hand[c].rank;
      }
    }
    players[p].score = totalPoints;
  }
  return players;
}

function winningPlayer(toPlayers) {
  findScores(toPlayers);
  var winner = {};
  winner.name = toPlayers[0].name;
  winner.score = toPlayers[0].score;
  for (var i = 1; i < players.length; i++) {
    if (toPlayers[i].score > winner.score) {
      winner.name = toPlayers[i].name;
      winner.score = toPlayers[i].score;

    }
  }
  console.log(players);
  console.log('The winner of the February 2022 Coding Card Championship is ' + winner.name + ' with a total score of ' + winner.score + '! Congratulations ' + winner.name + '!!');
}
winningPlayer(players);
