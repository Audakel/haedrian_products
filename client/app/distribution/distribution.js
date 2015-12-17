'use strict';

angular.module('webApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('distribution', {
        url: '/distribution',
        templateUrl: 'app/distribution/distribution.html',
        controller: 'DistributionCtrl'
      });
  });
