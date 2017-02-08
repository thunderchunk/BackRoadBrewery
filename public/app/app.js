// INITILIZE APP
// ============================================================
var app = angular.module("brb", ["ui.router"] )
.config(function($stateProvider, $urlRouterProvider){

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



});
