// INITILIZE APP
// ============================================================
var app = angular.module("brb", ["ui.router"] )
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/views/home/home.html',
        controller: 'home'
      })
      .state('beers', {
        url: '/beers',
        templateUrl: './app/views/beers/beers.html',
        controller: 'beers'
      })
      .state('locations', {
        url: '/locations',
        templateUrl: './app/views/locations/locations.html',
        controller: 'locations'
      })
      .state('about', {
        url: '/about',
        templateUrl: './app/views/about/about.html',
        controller: 'about'
      })
      .state('brewery', {
        url: '/brewery',
        templateUrl: './app/views/brewery/brewery.html',
        controller: 'brewery'
      })
      .state('secretLocations', {
        url: '/secretLocations',
        templateUrl: './app/views/secretLocations/secretLocations.html',
        controller: 'secretLocations'
      })



}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("brb").controller("mainCtrl", ["$scope", function($scope) {

  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================


}]);
// INITILIZE SERVICE
// ============================================================
angular.module("brb").service("brbService", ["$http", function($http) {

  // CRUD FUNCTIONS
  // ============================================================


  // OTHER FUNCTIONS
  // ============================================================
  this.locationList = {
    availableOptions:
    [
    {id: 1,
      name: "Back Road Brewery",
    location: {lat: 41.499303, lng: -93.486621},
    address1: "140 N. 1st St ",
    address2: " Carlisle, IA 50047"
    },
    {id: 2,
      name: "Brick House",
    location: {lat: 41.361595, lng: -93.562537},
    address1: "107 N Buxton St",
    address2: "Indianola, IA 50125"
    },
    
    {id: 3,
      name: "300 Craft & Rooftop",
    location: {lat: 41.581911, lng: -93.619664},
    address1: "300 W Martin Luther King Jr Pkwy,",
    address2: "Des Moines, IA 50309"
    },
    {id: 4,
      name: "Skip's Des Moines",
    location: {lat: 41.547735, lng: -93.645413},
    address1: "4000 Fleur Dr",
    address2: "Des Moines, IA 50321"
    },
    {id: 5,
      name: "Fong's Pizza Ankeny",
    location: {lat: 41.712834, lng: -93.618824},
    address1: "1450 SW Vintage Pkwy #120",
    address2: "Ankeny, IA 50023"
    },
    {id: 6,
      name: "The Cellar Peanut Pub, Pella",
    location: {lat: 41.406661, lng: -92.915871},
    address1: "629 Franklin St",
    address2: "Pella, IA 50219"
    },
    {id: 7,
      name: "The Cellar Peanut Pub, Oskaloosa",
    location: {lat: 41.289274, lng: -92.643289},
    address1: "206 Rock Island Ave",
    address2: "Oskaloosa, IA 52577"
    }
  ],
  
  selectedOption: {id: 1, name: "Back Road Brewery",location: {lat: 41.499303, lng: -93.486621},   address1: "140 N. 1st St ", address2: " Carlisle, IA 50047"}
  };

}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("brb").controller("about", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "about test"
  // FUNCTIONS
  // ============================================================
}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("brb").controller("beers", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "beers test"
  // FUNCTIONS
  // ============================================================
}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("brb").controller("brewery", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "brewery test"
  // FUNCTIONS
  // ============================================================
  

}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("brb").controller("home", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "home test"
  // FUNCTIONS
  // ============================================================
}]);

// INITILIZE CONTROLLER
// ============================================================
angular.module("brb").controller("locations", ["$scope", "brbService", function($scope, brbService) {
  // VARIABLES
  
  // pulls in data from service
  $scope.thislist = brbService.locationList;
  // makes a new variable to repopulate the map coordinates
  $scope.currentL = null;
  

  
  

  
  // ============================================================
  $scope.test = "locations test"
  // FUNCTIONS
  // ============================================================
}]);

angular.module('brb')
    .directive('map', ["brbService", function(brbService) {
        return {
            restrict: 'E',
            templateUrl: './app/views/locations/map.html',
            link: function(scope, element, attributes ) {
                      
                //makes pin location from default or from updated list from selection
                scope.pin = function(){
                  if (scope.currentL) {
                    return scope.currentL.location
                  }else{
                 return scope.thislist.selectedOption.location;
               }
                }
                //populates map
                scope.map;
                scope.initMap = function() {
                  console.log(scope.pin());
                  scope.map = new google.maps.Map(document.getElementById('map'), {
                    center: scope.pin() ,
                    zoom: 15
                  });
                  scope.marker = new google.maps.Marker({
                  position: scope.pin(),
                  map: scope.map
                  });               
                  

                  
                  scope.switchPicker = function(){
                    scope.pin();
                    scope.initMap();
                  }
                };
                
  scope.initMap();
                
            }
};

}]);
angular.module('brb')
    .directive('nav', function() {
        return {
            restrict: 'E',
            templateUrl: './app/views/nav/nav.html',
            link: function(scope, element, attributes) {
              
              $("#smallLogo").on("click", function() {
                  $(".littleNavHolder").show(".littleNavHolder");
                  $(this).hide("#smallLogo");
            });

            }
};

});
// INITILIZE CONTROLLER
// ============================================================
angular.module("brb").controller("secretLocations", ["$scope", "brbService", function($scope, brbService) {
  // VARIABLES
  
  // pulls in data from service
  $scope.thislist = brbService.locationList;
  // makes a new variable to repopulate the map coordinates
  $scope.currentL = null;
  

  
  

  
  // ============================================================
  $scope.test = "locations test"
  // FUNCTIONS
  // ============================================================
}]);
