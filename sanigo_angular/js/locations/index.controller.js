"use strict";

(function(){
  angular
    .module("locations")
    .controller("LocationIndexController", ["LocationFactory", "$stateParams", "$state", LocationIndexControllerFunction])


  function LocationIndexControllerFunction(LocationFactory, $stateParams, $state){
    this.locations = LocationFactory.query();

    var vm = this;
    this.location = new LocationFactory();
    this.create = function(){
      console.log("working")
      this.location.$save().then(function(response){
        vm.locations.push(response)
        $state.go("locationIndex", ({id: response.id})); // what's this second arg for?
      })
    }

    this.delete = function(location){
      location.$delete(location).then(function(response){
      // right?
        $state.go("locationIndex");
      })
    }

  }


})();
