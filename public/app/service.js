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

});