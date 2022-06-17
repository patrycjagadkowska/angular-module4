(function () {
	'use strict';

	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['myCategories'];
	function CategoriesController (myCategories){
		const categoriesCtrl = this;

		categoriesCtrl.categories = myCategories;
	}
})();