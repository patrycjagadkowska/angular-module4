(function () {
	'use strict';

	angular.module('Data')
	.service('MenuDataService', MenuDataService)
	.constant('APIBasePath', ' https://davids-restaurant.herokuapp.com');

	MenuDataService.$inject = ['$http', 'APIBasePath'];
	function MenuDataService ($http, APIBasePath) {
		const service = this;

		service.getAllCategories = function () {
			const response = $http({
				method: "GET",
				url: (APIBasePath + '/categories.json')
			});
			return response;
		};

		service.getItemsForCategory = function (shortName) {
			const response = $http({
				method: "GET",
				url: (APIBasePath + '/menu_items.json?category=' + shortName)
			});
			return response;
		};
	}

})();