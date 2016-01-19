angular.module('myApp.services', [])

.factory('dataFactory', function() {
  var flashCards = { 
    capitals: [
      { question: "capital of California", answer: "Sacramento"},
      {question: "capital of New York", answer: "New York City"},
      {question: "capital of Alabama", answer: "Montgomery"},
      {question: "capital of Alaska", answer: "Juneau"},
      {question: "capital of Arizona", answer: "Phoenix"},
      {question: "capital of Colorado", answer: "Denver"},
      {question: "capital of Connecticut", answer: "Hartford"},
      {question: "capital of Hawaii", answer: "Honolulu"},
      {question: "capital of Florida", answer: "Tallahassee"},
      {question: "capital of Maine", answer: "Augusta"},
      {question: "capital of Michigan", answer: "Lansing"},
      {question: "capital of Texas", answer: "Austin"},
      {question: "capital of Utah", answer: "Salt Lake City"},
      {question: "capital of Wyoming", answer: "Cheyenne"},
      {question: "capital of Oregon", answer: "Salem"},
      {question: "capital of Ohio", answer: "Columbus"},
      {question: "capital of Oklahoma", answer: "Oklahoma City"}
    ]
  };
  var pokerData = {
    highScore : 0,
    viableHands : [
      "0", 
      "1 Pair",
      "2 Pairs", 
      "3 of a Kind",
      "Straight",
      "Flush",
      "Full House",
      "4 of a Kind",
      "Straight Flush"
    ]
  };

  var getData = function() {
    return flashCards;
  }
  var getPokerData = function() {
    return pokerData;
  }
  var setHighScore = function(value) {
    pokerData.highScore = value;
  }

  return {
    getData: getData,
    getPokerData: getPokerData,
    setHighScore: setHighScore
  };
})

.factory('cardList', function() {
  var cards = [
    {value: 2, suit: 'clubs', pic: '/images/2_of_clubs.svg'},
    {value: 2, suit: 'diamonds', pic: '/images/2_of_diamonds.svg'},
    {value: 2, suit: 'hearts', pic: '/images/2_of_hearts.svg'},
    {value: 2, suit: 'spades', pic: '/images/2_of_spades.svg'},
    {value: 3, suit: 'clubs', pic: '/images/3_of_clubs.svg'},
    {value: 3, suit: 'diamonds', pic: '/images/3_of_diamonds.svg'},
    {value: 3, suit: 'hearts', pic: '/images/3_of_hearts.svg'},
    {value: 3, suit: 'spades', pic: '/images/3_of_spades.svg'},
    {value: 4, suit: 'clubs', pic: '/images/4_of_clubs.svg'},
    {value: 4, suit: 'diamonds', pic: '/images/4_of_diamonds.svg'},
    {value: 4, suit: 'hearts', pic: '/images/4_of_hearts.svg'},
    {value: 4, suit: 'spades', pic: '/images/4_of_spades.svg'},
    {value: 5, suit: 'clubs', pic: '/images/5_of_clubs.svg'},
    {value: 5, suit: 'diamonds', pic: '/images/5_of_diamonds.svg'},
    {value: 5, suit: 'hearts', pic: '/images/5_of_hearts.svg'},
    {value: 5, suit: 'spades', pic: '/images/5_of_spades.svg'},
    {value: 6, suit: 'clubs', pic: '/images/6_of_clubs.svg'},
    {value: 6, suit: 'diamonds', pic: '/images/6_of_diamonds.svg'},
    {value: 6, suit: 'hearts', pic: '/images/6_of_hearts.svg'},
    {value: 6, suit: 'spades', pic: '/images/6_of_spades.svg'},
    {value: 7, suit: 'clubs', pic: '/images/7_of_clubs.svg'},
    {value: 7, suit: 'diamonds', pic: '/images/7_of_diamonds.svg'},
    {value: 7, suit: 'hearts', pic: '/images/7_of_hearts.svg'},
    {value: 7, suit: 'spades', pic: '/images/7_of_spades.svg'},
    {value: 8, suit: 'clubs', pic: '/images/8_of_clubs.svg'},
    {value: 8, suit: 'diamonds', pic: '/images/8_of_diamonds.svg'},
    {value: 8, suit: 'hearts', pic: '/images/8_of_hearts.svg'},
    {value: 8, suit: 'spades', pic: '/images/8_of_spades.svg'},
    {value: 9, suit: 'clubs', pic: '/images/9_of_clubs.svg'},
    {value: 9, suit: 'diamonds', pic: '/images/9_of_diamonds.svg'},
    {value: 9, suit: 'hearts', pic: '/images/9_of_hearts.svg'},
    {value: 9, suit: 'spades', pic: '/images/9_of_spades.svg'},
    {value: 10, suit: 'clubs', pic: '/images/10_of_clubs.svg'},
    {value: 10, suit: 'diamonds', pic: '/images/10_of_diamonds.svg'},
    {value: 10, suit: 'hearts', pic: '/images/10_of_hearts.svg'},
    {value: 10, suit: 'spades', pic: '/images/10_of_spades.svg'},
    {value: 1, suit: 'clubs', pic: '/images/ace_of_clubs.svg'},
    {value: 1, suit: 'diamonds', pic: '/images/ace_of_diamonds.svg'},
    {value: 1, suit: 'hearts', pic: '/images/ace_of_hearts.svg'},
    {value: 1, suit: 'spades', pic: '/images/ace_of_spades.svg'},
    {value: 11, suit: 'clubs', pic: '/images/jack_of_clubs2.svg'},
    {value: 11, suit: 'diamonds', pic: '/images/jack_of_diamonds2.svg'},
    {value: 11, suit: 'hearts', pic: '/images/jack_of_hearts2.svg'},
    {value: 11, suit: 'spades', pic: '/images/jack_of_spades2.svg'},
    {value: 12, suit: 'clubs', pic: '/images/queen_of_clubs2.svg'},
    {value: 12, suit: 'diamonds', pic: '/images/queen_of_diamonds2.svg'},
    {value: 12, suit: 'hearts', pic: '/images/queen_of_hearts2.svg'},
    {value: 12, suit: 'spades', pic: '/images/queen_of_spades2.svg'},
    {value: 13, suit: 'clubs', pic: '/images/king_of_clubs2.svg'},
    {value: 13, suit: 'diamonds', pic: '/images/king_of_diamonds2.svg'},
    {value: 13, suit: 'hearts', pic: '/images/king_of_hearts2.svg'},
    {value: 13, suit: 'spades', pic: '/images/king_of_spades2.svg'},
  ]
  var getCardData = function() {
    return cards;
  }
  return {
    getCardData: getCardData
  };
});