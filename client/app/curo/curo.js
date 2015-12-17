'use strict';

angular.module('webApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('curo', {
        url: '/curo',
        templateUrl: 'app/curo/curo.html',
        controller: 'CuroCtrl'
      });
  });
