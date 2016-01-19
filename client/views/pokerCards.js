angular.module('myApp.pokerCards', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider.when('/pokerCards', {
    templateUrl: 'views/pokerCards.html',
    controller: 'pokerCardsCtrl'
  });
})

.controller('pokerCardsCtrl', function($scope, dataFactory, cardList) {

  $scope.currentFlashCard;
  $scope.highScore;
  $scope.index;
  $scope.pokerHand = [];
  $scope.wrongAnswer= false;
  $scope.currentPokerHand = "";
  var viableHands;
  var cardIndex = 0;
  $scope.fiveCardHand = [];
  var valuesArray = [];
  var suitsArray = [];

  $scope.initCards = function() {
    $scope.data = angular.copy(dataFactory.getData());
    $scope.highScore = dataFactory.getPokerData().highScore;
    viableHands = dataFactory.getPokerData().viableHands;
    $scope.cardData = shuffle(cardList.getCardData());
    $scope.index = 0;
    $('#myModal').modal('show');
  }

  $scope.startGame = function(category) {
    $scope.gameCards = shuffle($scope.data[category]).slice(0,13);
    setCurrentCard();
  }

  $scope.clearPokerData = function() {
    $scope.gameCards = [];
    $scope.pokerHand = [];
    $scope.currentFlashCard = "";
    $scope.index = 0;
    $scope.wrongAnswer = false;
    $scope.currentPokerHand = "";
    var cardIndex = 0;
    $scope.fiveCardHand = [];
    var valuesArray = [];
    var suitsArray = [];
  }

  $scope.submitAnswer = function() {
    if($scope.pokerAnswer === $scope.currentFlashCard.answer) {
      $scope.pokerHand.push($scope.cardData[cardIndex++]);
      $scope.wrongAnswer = false;
      $scope.pokerAnswer = "";
    } else {
      // $scope.pokerHand.push($scope.cardData[cardIndex++]);
      $scope.wrongAnswer = true;
      $scope.pokerAnswer = "";
    }
    if($scope.index < $scope.gameCards.length - 1) {
      $scope.index++;
      setCurrentCard();   
    } else {
      $scope.currentCard = "";
      if($scope.pokerHand.length > 4) {
        $('#pokerSelection').modal('show');
      } else {
        $('#failureResult').modal('show');
      }
    }
  }

  $scope.selectCard = function(card, event) {
      if(!$(event.target).hasClass('selected') && ($scope.fiveCardHand.length < 5)) {
        $(event.target).addClass('selected');
        $scope.fiveCardHand.push($scope.pokerHand[card]);
      } else if($(event.target).hasClass('selected')){
        $(event.target).removeClass('selected');
        var removeIndex = $scope.fiveCardHand.indexOf($scope.pokerHand[card]);
        $scope.fiveCardHand.splice(removeIndex, 1);
        console.log($scope.fiveCardHand.length);
      }
  }

  $scope.handChecker = function() {
    var resultString = "";
    convertHand();
    switch(duplicateCards()){
         case "2":
              resultString = "1 Pair";
              break;
          case "22":
              resultString = "2 Pairs";
              break;
         case "3":
              resultString = "3 of a Kind";
              break;
         case "23":
         case "32":
              resultString = "Full House";
              break;
         case "4":
              resultString = "4 of a Kind";
              break;
         default:
              if(isStraight()){
                   resultString = "Straight";     
              }
              break;
    }
    if(isFlush()){
         if(resultString){
              resultString = "Straight Flush";     
         }
         else{
              resultString = "Flush";
         }
    }
    if(!resultString){
         resultString = "0";
    }
    if(viableHands.indexOf(resultString) > -1) {
      $scope.currentPokerHand = resultString;
    }
    checkHighScore();
    $('#pokerResult').modal('show');
  }

  // Helper Function //

  var checkHighScore = function() {
    if(!$scope.highScore) {
      $scope.highScore = $scope.currentPokerHand;
    } else if(viableHands.indexOf($scope.currentPokerHand) > viableHands.indexOf($scope.highScore)) {
      $scope.highScore = $scope.currentPokerHand;
      dataFactory.setHighScore($scope.highScore);
    }
  }

  var convertHand = function() {
    var suitValue = ['diamonds', 'clubs', 'hearts', 'spades'];
    for(var i = 0; i < 5; i++) {
      valuesArray[i] = $scope.fiveCardHand[i].value - 1;
      var suitIndex = suitValue.indexOf($scope.fiveCardHand[i].suit);
      suitsArray[i] = suitIndex;
    }
  }

  var isFlush = function(){
    for(var i = 0; i < 4; i ++){
      if(suitsArray[i] != suitsArray[i+1]){
        return false;
      }
    }
    return true;
  }

  var isStraight = function(){
    var lowest = getLowest();
    for(var i = 1; i < 5; i++){
      if(occurrencesOf(lowest + i) != 1){
        return false
      }     
    }
    return true;
  }

  var getLowest = function(){
    var min = 12;
    for(var i = 0; i < valuesArray.length; i++){
      min = Math.min(min, valuesArray[i]);     
    }
    return min;     
  } 

  var duplicateCards = function(){
    var occurrencesFound = []; 
    var result = "";
    for(var i = 0; i < valuesArray.length; i++){
      var occurrences = occurrencesOf(valuesArray[i]);
      if(occurrences > 1 && occurrencesFound.indexOf(valuesArray[i]) == -1){
        result += occurrences; 
        occurrencesFound.push(valuesArray[i]);    
      }
    }
    return result;
  }

  var occurrencesOf = function(n){
    var count = 0;
    var index = 0;   
    do{          
      index = valuesArray.indexOf(n, index) + 1;  
      if(index == 0){
        break;
      }
      else{
        count ++;
      }
    } while(index < valuesArray.length);
    return count;
  }  

  var setCurrentCard = function() {
    $scope.currentFlashCard = $scope.gameCards[$scope.index];
  }

  var shuffle = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
  };
});