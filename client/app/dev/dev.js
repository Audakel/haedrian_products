'use strict';

angular.module('webApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dev', {
        url: '/dev',
        templateUrl: 'app/dev/dev.html',
        controller: 'DevCtrl'
      });
  });
