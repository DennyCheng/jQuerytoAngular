myApp.controller("peopleController", ["$scope", "$http", function($scope, $http) {
  console.log("task controller working!");
  $scope.person = {};
  $scope.peoples = [];

  $scope.totalSalary = 0;

$scope.savePerson = function(){
    console.log($scope.person);
    $scope.addNumber($scope.person);
    console.log($scope.totalSalary);
  $scope.peoples.push($scope.person);
  $scope.person={};
  //sever the connection to previous object so they don't reference
  //the previous object
  $scope.person = '';


};

$scope.addNumber = function(person){
  $scope.totalSalary += parseInt(person.yearSalary);
}

$scope.deletePerson = function(){
  
}

}]);
