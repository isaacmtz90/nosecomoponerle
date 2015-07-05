'use strict';

/**
 * @ngdoc function
 * @name quetesobraApp.controller:CampaignsCtrl
 * @description
 * # CampaignsCtrl
 * Controller of the quetesobraApp
 */
angular.module('quetesobraApp')
  .controller('CampaignsCtrl', [ '$scope', 'campaign', function ($scope, campaignService) {


    var response = campaignService.getAll();
		response.success(function(data) {
			console.log(data.error);
			if( data.documents.length>0){
				console.log('haydata');
				$scope.campaigns= data.documents;
			}
		});
  }]);
