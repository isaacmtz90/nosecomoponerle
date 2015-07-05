'use strict';

/**
 * @ngdoc service
 * @name quetesobraApp.campaign
 * @description
 * # campaign
 * Service in the quetesobraApp.
 */
var baseurl = 'https://api-us.clusterpoint.com/100713/CampaignManager/_search';
angular.module('quetesobraApp')
	.service('campaign', ['$http', function campaign($http) {

		function getAll() {
			var request = $http({
				method: 'POST',
				url: baseurl ,
				data: {
					'query': '<Category>Campaign</Category>'
				}
			});
			return request;
		}

		function getById(id) {
			var request = $http({
				method: 'POST',
				url: baseurl ,
				data: {
					'query': '<id>' + id + '</id>'
				}
			});
			return request;
		}

		return {
			getAll: getAll,
			getById: getById
		};


		// AngularJS will instantiate a singleton by calling "new" on this function
	}]);