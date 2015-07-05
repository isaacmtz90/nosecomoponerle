'use strict';

/**
 * @ngdoc function
 * @name quetesobraApp.controller:CampaignsCtrl
 * @description
 * # CampaignsCtrl
 * Controller of the quetesobraApp
 */
angular.module('quetesobraApp')
	.controller('CampaignsCtrl', ['$scope', 'campaign', '$routeParams', function($scope, campaignService, $routeParams) {
		var response;
		if ($routeParams.category !== '' && $routeParams.category !== null) {
			response = campaignService.getByCategory($routeParams.category);
			response.success(function(data) {
				console.log(data.error);
				if (data.documents.length > 0) {
					console.log('haydata');
					$scope.campaigns = data.documents;
				}
			});
		} else {
			response = campaignService.getAll();
			response.success(function(data) {
				console.log(data.error);
				if (data.documents.length > 0) {
					console.log('haydata');
					$scope.campaigns = data.documents;
				}
			});
		}
	}]);