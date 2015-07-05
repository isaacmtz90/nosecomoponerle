'use strict';

/**
 * @ngdoc function
 * @name quetesobraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quetesobraApp
 */
angular.module('quetesobraApp')
	.controller('MainCtrl', ['$scope', 'campaign', 'category', function($scope, campaignService, categoryService){

		var response = campaignService.getAll();
		response.success(function(data) {
			if (data.documents.length > 0) {
				$scope.campaigns = data.documents;
			}
		});

		var categories = categoryService.getAll();
		categories.success(function(data) {
			console.log(data);
			if (data.documents.length > 0) {
				$scope.categories = data.documents;
			}
		});
	}]);