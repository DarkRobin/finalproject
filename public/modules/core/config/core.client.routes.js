'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('xboxone', {
			url: '/gamedatabase/xboxone',
			templateUrl: 'modules/core/views/xboxone.client.view.html'
		}).
		state('xbox360', {
			url: '/gamedatabase/xbox360',
			templateUrl: 'modules/core/views/xbox360.client.view.html'
		}).
		state('xbox', {
			url: '/gamedatabase/xbox',
			templateUrl: 'modules/core/views/xbox.client.view.html'
		}).
		state('vita', {
			url: '/gamedatabase/vita',
			templateUrl: 'modules/core/views/vita.client.view.html'
		}).
		state('psp', {
			url: '/gamedatabase/psp',
			templateUrl: 'modules/core/views/psp.client.view.html'
		}).
		state('playstation4', {
			url: '/gamedatabase/playstation4',
			templateUrl: 'modules/core/views/playstation4.client.view.html'
		}).
		state('ps3', {
			url: '/gamedatabase/ps3',
			templateUrl: 'modules/core/views/ps3.client.view.html'
		}).
		state('playstation2', {
			url: '/gamedatabase/playstation2',
			templateUrl: 'modules/core/views/playstation2.client.view.html'
		}).
		state('psx', {
			url: '/gamedatabase/psx',
			templateUrl: 'modules/core/views/psx.client.view.html'
		}).
		state('gamegear', {
			url: '/gamedatabase/gamegear',
			templateUrl: 'modules/core/views/gamegear.client.view.html'
		}).
		state('dreamcast', {
			url: '/gamedatabase/dreamcast',
			templateUrl: 'modules/core/views/dreamcast.client.view.html'
		}).
		state('segasaturn', {
			url: '/gamedatabase/segasaturn',
			templateUrl: 'modules/core/views/segasaturn.client.view.html'
		}).
		state('segacd', {
			url: '/gamedatabase/segacd',
			templateUrl: 'modules/core/views/segacd.client.view.html'
		}).
		state('32-x', {
			url: '/gamedatabase/32-x',
			templateUrl: 'modules/core/views/32-x.client.view.html'
		}).
		state('genesis', {
			url: '/gamedatabase/genesis',
			templateUrl: 'modules/core/views/genesis.client.view.html'
		}).
		state('mastersystem', {
			url: '/gamedatabase/mastersystem',
			templateUrl: 'modules/core/views/mastersystem.client.view.html'
		}).
		state('nintendo-3ds', {
			url: '/gamedatabase/nintendo-3ds',
			templateUrl: 'modules/core/views/nintendo-3ds.client.view.html'
		}).
		state('nintendo-ds', {
			url: '/gamedatabase/nintendo-ds',
			templateUrl: 'modules/core/views/nintendo-ds.client.view.html'
		}).
		state('gameboy-advance', {
			url: '/gamedatabase/gameboy-advance',
			templateUrl: 'modules/core/views/gameboy-advance.client.view.html'
		}).
		state('gameboy-color', {
			url: '/gamedatabase/gameboy-color',
			templateUrl: 'modules/core/views/gameboy-color.client.view.html'
		}).
		state('virtualboy', {
			url: '/gamedatabase/virtualboy',
			templateUrl: 'modules/core/views/virtualboy.client.view.html'
		}).
		state('gameboy', {
			url: '/gamedatabase/gameboy',
			templateUrl: 'modules/core/views/gameboy.client.view.html'
		}).
		state('wii-u', {
			url: '/gamedatabase/wii-u',
			templateUrl: 'modules/core/views/wii-u.client.view.html'
		}).
		state('wii', {
			url: '/gamedatabase/wii',
			templateUrl: 'modules/core/views/wii.client.view.html'
		}).
		state('gamecube', {
			url: '/gamedatabase/gamecube',
			templateUrl: 'modules/core/views/gamecube.client.view.html'
		}).
		state('nintendo64', {
			url: '/gamedatabase/nintendo64',
			templateUrl: 'modules/core/views/nintendo64.client.view.html'
		}).
		state('supernes', {
			url: '/gamedatabase/supernes',
			templateUrl: 'modules/core/views/supernes.client.view.html'
		}).
		
		state('nes', {
			url: '/gamedatabase/nes',
			templateUrl: 'modules/core/views/nes.client.view.html'
		}).
		state('fourm', {
			url: '/fourm',
			templateUrl: 'modules/core/views/fourm.client.view.html'
		}).
		state('addagame', {
			url: '/addagame',
			templateUrl: 'modules/core/views/addagame.client.view.html'
		}).
		state('mylibrary', {
			url: '/mylibrary',
			templateUrl: 'modules/core/views/mylibrary.client.view.html'
		}).
		state('gamedatabase', {
			url: '/gamedatabase',
			templateUrl: 'modules/core/views/gamedatabase.client.view.html'
		}).
		state('mainhome', {
			url: '/home',
			templateUrl: 'modules/core/views/mainhome.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);