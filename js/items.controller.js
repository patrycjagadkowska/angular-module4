(function () {
	'use strict';

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['items'];
	function ItemsController (items) {
		const itemsCtrl = this;

		itemsCtrl.items = items.menu_items;
		itemsCtrl.shortName = items.category.name;
	}
})();