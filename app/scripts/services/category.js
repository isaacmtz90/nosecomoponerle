'use strict';

/**
 * @ngdoc service
 * @name quetesobraApp.category
 * @description
 * # category
 * Service in the quetesobraApp.
 */
var baseurl = 'https://api-us.clusterpoint.com/100713/CampaignManager/_search';
angular.module('quetesobraApp')
	.service('category', ['$http', function category($http) {

		function getAll() {
			var request = $http({
				method: 'POST',
				url: baseurl,
				data: {
					'query': '<Category>Categorias</Category>'
				}
			});
			return request;
		}

		return {
			getAll: getAll,

		};
		// AngularJS will instantiate a singleton by calling "new" on this function
	}]);