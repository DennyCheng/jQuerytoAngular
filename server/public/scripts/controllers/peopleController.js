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


// $('#employeeinfo').on('submit', function(event) {
//   event.preventDefault();
//
//   var values = {};
//   var fields = $('#employeeinfo').serializeArray();
//   //Converts input into array
//
//   fields.forEach(function(element) {
//     values[element.name] = element.value;
//   });
//   //Convers array into objects
//
//   totalMSalary += parseFloat(values.salaryY/12);
//   //Takes collective salary figure then convets it into a monhtly figure
//   //values.salary is a object method
//
//   $('#employeeinfo').find('input[type=text]').val('');
//   //Resets input fields
//   appendDom(values);
// });


}]);
