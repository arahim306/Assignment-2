angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({
            'code': document.getElementById("newEntry").elements["newCode"].value, 
            'name': document.getElementById("newEntry").elements["newName"].value, 
            'coordinates': {
                'latitude': document.getElementById("newEntry").elements["newLatitude"].value, 
                'longitude': document.getElementById("newEntry").elements["newLongitude"].value
            },
            'address': document.getElementById("newEntry").elements["newAddress"].value } );
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
      $scope.code = $scope.listings[index].code;
      $scope.name = $scope.listings[index].name;
      try{$scope.latitude = $scope.listings[index].coordinates.latitude;}
      catch(err){$scope.latitude = '';}
      try{$scope.longitude = $scope.listings[index].coordinates.longitude;}
      catch(err){$scope.longitude = '';}
      try{$scope.address = $scope.listings[index].address;}
      catch(err){$scope.address = '';}
    };
  }
]);