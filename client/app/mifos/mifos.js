'use strict';

angular.module('webApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mifos', {
        url: '/mifos',
        templateUrl: 'app/mifos/mifos.html',
        controller: 'MifosCtrl'
      });
  });
