'use strict';

(function() {
	// Addtodatabases Controller Spec
	describe('Addtodatabases Controller Tests', function() {
		// Initialize global variables
		var AddtodatabasesController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Addtodatabases controller.
			AddtodatabasesController = $controller('AddtodatabasesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Addtodatabase object fetched from XHR', inject(function(Addtodatabases) {
			// Create sample Addtodatabase using the Addtodatabases service
			var sampleAddtodatabase = new Addtodatabases({
				name: 'New Addtodatabase'
			});

			// Create a sample Addtodatabases array that includes the new Addtodatabase
			var sampleAddtodatabases = [sampleAddtodatabase];

			// Set GET response
			$httpBackend.expectGET('addtodatabases').respond(sampleAddtodatabases);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.addtodatabases).toEqualData(sampleAddtodatabases);
		}));

		it('$scope.findOne() should create an array with one Addtodatabase object fetched from XHR using a addtodatabaseId URL parameter', inject(function(Addtodatabases) {
			// Define a sample Addtodatabase object
			var sampleAddtodatabase = new Addtodatabases({
				name: 'New Addtodatabase'
			});

			// Set the URL parameter
			$stateParams.addtodatabaseId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/addtodatabases\/([0-9a-fA-F]{24})$/).respond(sampleAddtodatabase);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.addtodatabase).toEqualData(sampleAddtodatabase);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Addtodatabases) {
			// Create a sample Addtodatabase object
			var sampleAddtodatabasePostData = new Addtodatabases({
				name: 'New Addtodatabase'
			});

			// Create a sample Addtodatabase response
			var sampleAddtodatabaseResponse = new Addtodatabases({
				_id: '525cf20451979dea2c000001',
				name: 'New Addtodatabase'
			});

			// Fixture mock form input values
			scope.name = 'New Addtodatabase';

			// Set POST response
			$httpBackend.expectPOST('addtodatabases', sampleAddtodatabasePostData).respond(sampleAddtodatabaseResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Addtodatabase was created
			expect($location.path()).toBe('/addtodatabases/' + sampleAddtodatabaseResponse._id);
		}));

		it('$scope.update() should update a valid Addtodatabase', inject(function(Addtodatabases) {
			// Define a sample Addtodatabase put data
			var sampleAddtodatabasePutData = new Addtodatabases({
				_id: '525cf20451979dea2c000001',
				name: 'New Addtodatabase'
			});

			// Mock Addtodatabase in scope
			scope.addtodatabase = sampleAddtodatabasePutData;

			// Set PUT response
			$httpBackend.expectPUT(/addtodatabases\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/addtodatabases/' + sampleAddtodatabasePutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid addtodatabaseId and remove the Addtodatabase from the scope', inject(function(Addtodatabases) {
			// Create new Addtodatabase object
			var sampleAddtodatabase = new Addtodatabases({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Addtodatabases array and include the Addtodatabase
			scope.addtodatabases = [sampleAddtodatabase];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/addtodatabases\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleAddtodatabase);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.addtodatabases.length).toBe(0);
		}));
	});
}());