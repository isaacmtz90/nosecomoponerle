'use strict';

/**
 * @ngdoc service
 * @name quetesobraApp.campaign
 * @description
 * # campaign
 * Service in the quetesobraApp.
 */
var cbaseurl = 'https://api-us.clusterpoint.com/100713/CampaignManager/';
angular.module('quetesobraApp')
	.service('campaign', ['$http', function campaign($http) {

		function getAll() {
			var request = $http({
				method: 'POST',
				url: cbaseurl + '_search',
				data: {
					'query': '<Category>Campaign</Category>'
				}
			});
			return request;
		}

		function getById(id) {
			var request = $http({
				method: 'POST',
				url: cbaseurl +'_search',
				data: {
					'query': '<id>' + id + '</id>'
				}
			});
			return request;
		}


		function getByCategory(category) {
			var request = $http({
				method: 'POST',
				url: cbaseurl +'_search',
				data: {
					'query': '<item>' + category + '</item>'
				}
			});
			return request;
		}

		function create(name, item, org, dateInit, dateEnd, user, desc, img) {
			var request = $http({
				method: 'POST',
				url: cbaseurl,
				data: {
					'id': Math.floor((Math.random() * 100) + 1),
					'Category': 'Campaign',
					'Campaignname': name,
					'item': item,
					'Organization': org,
					'dateStart': dateInit,
					'dateEnd': dateEnd,
					'paypalAccount': 'guifarro.lozano@gmail.com',
					'user': user,
					'campaignDescription': desc,
					'campaignProfile' : img
				}
			});
			return request;
		}



		return {
			getAll: getAll,
			getById: getById,
			getByCategory: getByCategory,
			create: create
		};


		// AngularJS will instantiate a singleton by calling "new" on this function
	}]);