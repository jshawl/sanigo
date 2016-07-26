"use strict";

(function(){
  angular
    .module("locations")
    .controller("LocationNewController", ["LocationFactory", "$stateParams", "$state", LocationNewControllerFunction])


  function LocationNewControllerFunction(LocationFactory, $stateParams, $state){
    this.locations = LocationFactory.query();

    var vm = this;
    this.location = new LocationFactory();
    this.create = function(){
      console.log("working")
      this.location.$save().then(function(response){
        vm.locations.push(response)
        $state.go("locationShow", ({id: response.id}));
      })
    }

    // this.update = function(location_id){
    //   this.location.$update(location_id).then(function(response){
    //     $state.go("locationIndex");
    //   })
    // }
    //
    // this.delete = function(location){
    //   console.log("deleted")
    //   this.location.$remove(location).then(function(response){
    //     console.log(response)
    //     $state.go("locationIndex");
    //   })
    //   remove unused code
    // }

  }


})();
