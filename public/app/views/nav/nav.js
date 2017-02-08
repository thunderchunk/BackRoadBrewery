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