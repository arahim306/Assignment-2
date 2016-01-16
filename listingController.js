angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

	$scope.addListing = function(){		
		$scope.listings.push({ 'code':$scope.code, 'name': $scope.name, 'latitude':$scope.latitude, 'longitude': $scope.longitude, 'address':$scope.address });
		$scope.code='';
		$scope.name='';
		$scope.latitude='';
		$scope.longitude='';
		$scope.address='';
	};

    $scope.deleteListing = function(index) {
    	$scope.listings.splice(index, 1);
	};

    $scope.showDetails = function(index) {
    	try {
    		$scope.latitude = $scope.listings[index].coordinates.latitude;
    	}
    	catch(err) {
    		$scope.latitude = '';
    	}

    	try {
    		$scope.longitude = $scope.listings[index].coordinates.longitude;
    	}
    	catch(err) {
    		$scope.longitude = '';
    	}

    	try {
    		$scope.address = $scope.listings[index].address;
    	}
    	catch(err) {
    		$scope.address = '';
    	}
    };

	$scope.clearText = function(){		
		$scope.code='';
		$scope.name='';
		$scope.latitude='';
		$scope.longitude='';
		$scope.address='';
	};  
  }
]);