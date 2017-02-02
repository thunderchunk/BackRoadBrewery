// INITILIZE SERVICE
// ============================================================
angular.module("brb").service("brbService", function($http) {

  // CRUD FUNCTIONS
  // ============================================================


  // OTHER FUNCTIONS
  // ============================================================
  this.locationList = {
    availableOptions:
    [
    {id: 1,
      name: "Brick House",
    location: {lat: 41.361595, lng: -93.562537}},
    {id: 2,
      name: "300 Craft & Rooftop",
    location: {lat: 41.581911, lng: -93.619664}},
    {id: 3,
      name: "Skip's Des Moines",
    location: {lat: 41.547735, lng: -93.645413}},
    {id: 4,
      name: "Fong's Pizza Ankeny",
    location: {lat: 41.712834, lng: -93.618824}},
    {id: 5,
      name: "The Cellar Peanut Pub, Pella",
    location: {lat: 41.406661, lng: -92.915871}},
    {id: 6,
      name: "The Cellar Peanut Pub, Pella",
    location: {lat: 41.289274, lng: -92.643289}}
  ],
  
  selectedOption: {id: 0, name: "Back Road Brewery",location: {lat: 41.499303, lng: -93.486621}}
  };

});