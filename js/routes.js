(function () {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.template.html'
		})
		.state('categories', {
			url: '/categories',
			templateUrl: 'templates/categories.template.html',
			resolve: {
				myCategories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories().then(function (response) {
						return response.data;
					});
				}]
			},
			controller: 'CategoriesController as categoriesCtrl'
		})
		.state('items', {
			url: '/categories/{shortName}',
			templateUrl: 'templates/items.template.html',
			resolve: {
				items: ['$stateParams','MenuDataService', function ($stateParams, 
					MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.shortName)
					.then(function (response) {
						return response.data;
					});
				}]
			},
			controller: 'ItemsController as itemsCtrl'
		});
	}

})();