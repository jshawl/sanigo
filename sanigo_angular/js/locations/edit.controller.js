"use strict";

(function(){
  angular
    .module("locations")
    .controller("LocationEditController", ["LocationFactory", "$stateParams", "$state", LocationEditControllerFunction])

  function LocationEditControllerFunction(LocationFactory, $stateParams, $state){
    console.log($stateParams)
    this.location = LocationFactory.get({id: $stateParams.id})
    this.update = function(){
    // could also pass this.location as argument to update method to prevent two ajax requests here.
      this.location.$update({id: $stateParams.id}).then(function(response){
        $state.go("locationIndex", ({id: response.id})); // do you need the second argument here?
      })
    }
    this.destroy = function(){
      this.location.$delete({id: $stateParams.id}).then(function(response){
        $state.go("locationIndex");
      })
    }
  }
})();
