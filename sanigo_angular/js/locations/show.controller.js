"use strict";

(function(){
  angular
  .module("locations")
  .controller("LocationShowController", ["LocationFactory", "$stateParams", "CommentFactory", LocationShowControllerFunction])

  function LocationShowControllerFunction(LocationFactory, $stateParams, CommentFactory){
    console.log($stateParams);
    this.location = LocationFactory.get({id: $stateParams.id});

    var vm = this;
    CommentFactory.query({location_id: $stateParams.id}).$promise.then(function(comments){
      console.log(comments)
      vm.comments = comments
    })
    // remove commented out code
  }



})();
