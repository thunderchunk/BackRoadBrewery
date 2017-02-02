// INITILIZE CONTROLLER
// ============================================================
angular.module("brb").controller("locations", function($scope, brbService) {
  // VARIABLES
  
  // pulls in data from service
  $scope.thislist = brbService.locationList;
  // makes a new variable to repopulate the map coordinates
  $scope.currentL = null;
  

  
  

  
  // ============================================================
  $scope.test = "locations test"
  // FUNCTIONS
  // ============================================================
});
