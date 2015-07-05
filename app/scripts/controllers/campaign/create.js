'use strict';

/**
 * @ngdoc function
 * @name quetesobraApp.controller:CampaignCreateCtrl
 * @description
 * # CampaignCreateCtrl
 * Controller of the quetesobraApp
 */
angular.module('quetesobraApp')
	.controller('CampaignCreateCtrl', ['campaign', '$scope', function(campaignService, $scope) {

		$scope.create = function() {
			var response = campaignService.create($scope.name, $scope.item, $scope.organization, $scope.fechainit, $scope.fechafin, $scope.user,
				$scope.description, $scope.img);
			response.success(function(data) {
				console.log(data);
				window.location.hash='#/campaigns';
			});
		};
	}]);