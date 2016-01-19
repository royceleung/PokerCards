angular.module('myApp.flashCards', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider.when('/flashCards', {
    templateUrl: 'views/flashCards.html',
    controller: 'flashCardsCtrl'
  });
})

.controller('flashCardsCtrl', function($scope, dataFactory) {

  $scope.flipped = true;
  $scope.category = "capitals";
  $scope.currentFlashCard;
  $scope.index;

  var setCurrentCard = function() {
    $scope.currentFlashCard = $scope.data[$scope.category][$scope.index];
  }

  $scope.changeCategory = function(category) {
    $scope.category = category;
    $scope.index = 0;
    setCurrentCard();
  }
  $scope.initCards = function() {
    $scope.data = dataFactory.getData();
    $scope.index = 0;
    setCurrentCard();
  }
  $scope.changeFlashCard = function(newIndex) {
    if((newIndex >= 0) && (newIndex < $scope.data[$scope.category].length)) {
      $scope.flipped = true;
      $scope.index = newIndex;
      setCurrentCard();
    }
  }
  $scope.saveCard = function() {
    var newCard = { question: $scope.question, answer: $scope.answer};
    $scope.data[$scope.category].push(newCard);
    $scope.success = "successfully added " + $scope.answer + " to " + $scope.category + ".";
    $scope.answer = "";
    $scope.question ="";
    setCurrentCard();
  }
  $scope.deleteCurrentCard = function() {
    $scope.data[$scope.category].splice($scope.index, 1);
    setCurrentCard();
  } 
  $scope.addNewCategory = function() {
    $scope.data[$scope.newCategory] = [];
    $scope.newCategory = "";
  }
  $scope.editCurrentCard = function() {
    var editCard = {question: $scope.editQuestion, answer: $scope.editAnswer};
    $scope.data[$scope.category].splice($scope.index, 1, editCard);
    setCurrentCard();
    $scope.editQuestion = "";
    $scope.editAnswer = "";
  }
});