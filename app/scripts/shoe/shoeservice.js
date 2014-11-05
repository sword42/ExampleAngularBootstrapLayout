(function () {'use strict';
angular.module('demo.shoe').factory('shoeService', shoeService);

shoeService.$inject = ['$http', '$q'];

function shoeService($http, $q) {
	var service = {
		getShoes: getShoes,
		get: get
	};
	return service;

	function getShoes() {
		var deferred = $q.defer();
		$http.get('/shoes')
			.success(function(data, status, headers) {
				deferred.resolve(data);
  			})
  			.error(function(data, status, headers, config) {
  				deferred.reject('Error Loading Shoes');
  			});
  		return deferred.promise;
	}

	function get(id) {
		var deferred = $q.defer();
		$http.get('/shoes/'+id)
			.success(function(data, status, headers) {
				deferred.resolve(data);
  			})
  			.error(function(data, status, headers, config) {
  				deferred.reject('Error Loading Shoe '+id);
  			});
  		return deferred.promise;
	}

}
})();