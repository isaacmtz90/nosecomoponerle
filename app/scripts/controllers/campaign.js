'use strict';

/**
 * @ngdoc function
 * @name quetesobraApp.controller:CampaignCtrl
 * @description
 * # CampaignCtrl
 * Controller of the quetesobraApp
 */
angular.module('quetesobraApp')
	.controller('CampaignCtrl', ['$scope', 'campaign', '$routeParams', function($scope, campaignService, $routeParams) {

		$scope.donate = function(){


		};
		
		var response = campaignService.getById($routeParams.id);
		response.success(function(data) {
			if (data.documents.length > 0) {
				//console.log('haydata');
				$scope.campaign = data.documents[0];
			}
		});

	}]);