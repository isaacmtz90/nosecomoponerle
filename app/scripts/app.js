'use strict';

/**
 * @ngdoc overview
 * @name quetesobraApp
 * @description
 * # quetesobraApp
 *
 * Main module of the application.
 */
angular
  .module('quetesobraApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
       .when('/campaign/create', {
        templateUrl: 'views/campaign/create.html',
        controller: 'CampaignCreateCtrl'
      })
      .when('/campaign/:id', {
        templateUrl: 'views/campaign.html',
        controller: 'CampaignCtrl'
      })

      .when('/campaigns/:category?', {
        templateUrl: 'views/campaigns.html',
        controller: 'CampaignsCtrl'
      })
     
      .otherwise({
        redirectTo: '/'
      });

  })
  .run(function($http) {
    $http.defaults.headers.common.Authorization = 'Basic ' + btoa('guifarro.lozano@gmail.com:Guepardo1');
  });