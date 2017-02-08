angular.module('brb')
    .directive('map', function(brbService) {
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

});