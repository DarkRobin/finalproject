'use strict';

// Configuring the Articles module
angular.module('addtodatabases').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Add to Database', 'addtodatabases', 'dropdown', '/addtodatabases(/create)?');
		//Menus.addSubMenuItem('topbar', 'addtodatabases', 'List', 'addtodatabases');
		//Menus.addSubMenuItem('topbar', 'addtodatabases', 'New', 'addtodatabases/create');
	}
]);